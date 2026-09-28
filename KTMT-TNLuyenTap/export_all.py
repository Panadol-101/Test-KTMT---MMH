import sys, re, os, base64, io, json, pymupdf
sys.path.append('scratch')
sys.stdout.reconfigure(encoding='utf-8')
from refined_parser_v2 import questions, LETTERS, decode_tcvn3

doc = pymupdf.open('300 câu tn ôn ktmt.pdf')
os.makedirs('images', exist_ok=True)

# Clean duplicate 'a' in Q 5.52
for q in questions:
    opts = q['options']
    if len(opts) == 5 and opts[0]['id'] == 'a' and opts[1]['id'] == 'a':
        if len(opts[0]['text']) < len(opts[1]['text']):
            opts.pop(0)
        else:
            opts.pop(1)
    if len(opts) == 4:
        for idx, letter in enumerate(LETTERS):
            opts[idx]['id'] = letter

# Process prompt text and diagram image for each question
processed_questions = []

for q_idx, q in enumerate(questions):
    q_num = q['num']
    pno = q['page'] - 1
    
    # Prompt text: first line text
    first_part = q['prompt_parts'][0]
    prompt_text = first_part[1]
    
    # If the prompt continues across lines without diagram
    # check if there are other parts that are real prompt sentences
    full_prompt_lines = [first_part[1]]
    is_diagram_q = bool(re.search(r'hình\s+vẽ|sơ\s+đồ|bảng\s+dưới|bảng\s+sau|ký\s+hiệu', first_part[1], re.IGNORECASE))
    
    # If not a diagram question, append other prompt parts
    if not is_diagram_q:
        for part in q['prompt_parts'][1:]:
            full_prompt_lines.append(part[1])
    
    clean_prompt = ' '.join(full_prompt_lines).strip()
    
    # Remove redundant prefix question number from prompt if still present
    clean_prompt = re.sub(r'^\d+\.\d+[\.\:]?\s*', '', clean_prompt)
    
    # Diagram extraction
    image_rel_path = None
    image_base64 = None
    
    if is_diagram_q:
        # Calculate diagram rect
        # First line words
        fl_words = first_part[0]
        fl_y1 = max(w[3] for w in fl_words)
        fl_pno = fl_words[0][5]
        
        opt_a_words = q['options'][0]['words']
        oa_y0 = min(w[1] for w in opt_a_words) if opt_a_words else 0
        oa_pno = opt_a_words[0][5] if opt_a_words else pno
        
        target_pno = pno
        # Determine clip rectangle
        if fl_y1 < oa_y0 - 25 and fl_pno == oa_pno:
            # Same page
            target_pno = fl_pno
            clip_rect = pymupdf.Rect(60, fl_y1 + 4, 540, oa_y0 - 4)
        elif oa_pno > fl_pno:
            # Across pages:
            # Check if diagram is on next page or first page
            # Usually on next page from top to opt_a_y0
            target_pno = oa_pno
            clip_rect = pymupdf.Rect(60, 60, 540, oa_y0 - 4)
        else:
            # fallback
            clip_rect = pymupdf.Rect(60, fl_y1 + 4, 540, min(doc[pno].rect.height - 50, fl_y1 + 250))
            
        # Render clip
        if clip_rect.height > 15 and clip_rect.width > 20:
            target_page = doc[target_pno]
            # render with dpi=150
            pix = target_page.get_pixmap(clip=clip_rect, dpi=160)
            img_filename = f"q_{q_num.replace('.', '_')}.png"
            img_path = os.path.join('images', img_filename)
            pix.save(img_path)
            image_rel_path = f"images/{img_filename}"
            
            # base64 data URI
            png_bytes = pix.tobytes("png")
            b64_str = base64.b64encode(png_bytes).decode('utf-8')
            image_base64 = f"data:image/png;base64,{b64_str}"

    # Clean options
    clean_options = []
    for opt in q['options']:
        # clean text
        t = opt['text'].strip()
        t = re.sub(r'^[a-dA-D][\.\)]\s*', '', t) # remove any leading marker
        clean_options.append({
            'id': opt['id'],
            'text': t
        })
        
    # Correct answer
    hl_opts = [o for o in q['options'] if o['hl'] > 0]
    if len(hl_opts) == 1:
        correct_ans = hl_opts[0]['id']
    elif len(hl_opts) > 1:
        best = max(hl_opts, key=lambda x: x['hl'])
        correct_ans = best['id']
    else:
        correct_ans = 'a' # fallback
        
    processed_questions.append({
        'id': q_idx + 1,
        'num': q_num,
        'chapter': q['chapter'],
        'chapter_name': q['chapter_name'],
        'page': q['page'],
        'prompt': clean_prompt,
        'image': image_rel_path,
        'image_data': image_base64,
        'options': clean_options,
        'answer': correct_ans
    })

print(f"Processed {len(processed_questions)} questions successfully.")
print(f"Diagram images generated: {len([q for q in processed_questions if q['image']])}")

# Save JSON and JS
with open('questions_data.json', 'w', encoding='utf-8') as f:
    json.dump(processed_questions, f, ensure_ascii=False, indent=2)

with open('questions_data.js', 'w', encoding='utf-8') as f:
    f.write('const QUESTIONS_DATA = ' + json.dumps(processed_questions, ensure_ascii=False, indent=2) + ';')

print("Saved questions_data.json and questions_data.js")
