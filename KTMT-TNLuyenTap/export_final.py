import sys, re, os, base64, io, json, pymupdf
sys.path.append('scratch')
sys.stdout.reconfigure(encoding='utf-8')
from check_all_yellow import decode_tcvn3

doc = pymupdf.open('300 câu tn ôn ktmt.pdf')
os.makedirs('images', exist_ok=True)

yellows_by_page = {}
for pno in range(len(doc)):
    page = doc[pno]
    drawings = page.get_drawings()
    yellows = []
    for d in drawings:
        fill = d.get('fill')
        if fill and fill[0] > 0.99 and fill[1] > 0.99 and fill[2] < 0.05:
            yellows.append(d['rect'])
    yellows_by_page[pno] = yellows

def is_word_highlighted(pno, w):
    w_rect = pymupdf.Rect(w[0], w[1], w[2], w[3])
    for yr in yellows_by_page[pno]:
        inter = w_rect & yr
        if not inter.is_empty and inter.get_area() > 0.2 * w_rect.get_area():
            return True
    return False

chapters = {
    1: "Chương 1: Giới thiệu chung",
    2: "Chương 2: Biểu diễn dữ liệu và số học máy tính",
    3: "Chương 3: Bộ xử lý",
    4: "Chương 4: Kiến trúc tập lệnh",
    5: "Chương 5: Hệ thống nhớ",
    6: "Chương 6: Hệ thống vào ra"
}

all_lines = []
for pno in range(len(doc)):
    page = doc[pno]
    words = page.get_text('words', sort=True)
    
    lines_in_page = []
    curr_line = []
    for w in words:
        if not curr_line:
            curr_line.append(w)
        else:
            last_w = curr_line[-1]
            if abs(w[1] - last_w[1]) < 4 or (w[1] < last_w[3] and w[3] > last_w[1]):
                curr_line.append(w)
            else:
                lines_in_page.append(curr_line)
                curr_line = [w]
    if curr_line:
        lines_in_page.append(curr_line)
        
    for w_list in lines_in_page:
        w_list = sorted(w_list, key=lambda x: x[0])
        line_str = decode_tcvn3(' '.join(w[4] for w in w_list)).strip()
        if not line_str or re.match(r'^Trang\s+\d+/\d+', line_str):
            continue
        all_lines.append((pno, line_str, [(pno, w) for w in w_list]))

questions = []
curr_q = None
curr_chap = 1
LETTERS = ['a', 'b', 'c', 'd']

for line_idx, (pno, line_str, pw_list) in enumerate(all_lines):
    m_chap = re.match(r'^Chương\s+(\d+)', line_str, re.IGNORECASE)
    if m_chap:
        curr_chap = int(m_chap.group(1))
        continue
        
    m_q = re.match(r'^(\d+\.\d+)[\.\:]?\s*(.*)', line_str)
    if m_q:
        if curr_q:
            questions.append(curr_q)
        curr_q = {
            'num': m_q.group(1),
            'chapter': curr_chap,
            'chapter_name': chapters.get(curr_chap, f"Chương {curr_chap}"),
            'page': pno + 1,
            'prompt_parts': [],
            'options': [],
            'in_options': False
        }
        # words in this line
        found_num = False
        p_words = []
        for pw in pw_list:
            wt = decode_tcvn3(pw[1][4])
            if not found_num and re.search(r'^\d+\.\d+', wt):
                found_num = True
                continue
            if found_num:
                p_words.append(pw)
        if p_words:
            curr_q['prompt_parts'].append((p_words, decode_tcvn3(' '.join(pw[1][4] for pw in p_words))))
        continue
        
    if curr_q is not None:
        opt_indices = []
        for idx, (wpno, w) in enumerate(pw_list):
            wt = decode_tcvn3(w[4])
            if re.match(r'^[a-dA-D][\.\)]', wt):
                opt_indices.append((idx, wt[0].lower()))
            elif idx + 1 < len(pw_list) and re.match(r'^[a-dA-D]$', wt) and pw_list[idx+1][1][4] in ('.', ')'):
                opt_indices.append((idx, wt[0].lower()))
                
        if opt_indices:
            curr_q['in_options'] = True
            for i, (start_idx, opt_letter) in enumerate(opt_indices):
                end_idx = opt_indices[i+1][0] if i + 1 < len(opt_indices) else len(pw_list)
                opt_pwords = pw_list[start_idx:end_idx]
                
                first_wt = decode_tcvn3(opt_pwords[0][1][4])
                first_clean = re.sub(r'^[a-dA-D][\.\)]\s*', '', first_wt)
                
                rem_pwords = opt_pwords[1:]
                if first_clean:
                    text_parts = [first_clean] + [decode_tcvn3(pw[1][4]) for pw in rem_pwords]
                else:
                    text_parts = [decode_tcvn3(pw[1][4]) for pw in rem_pwords]
                opt_text = ' '.join(text_parts).strip()
                
                if not opt_text and line_idx + 1 < len(all_lines):
                    next_str = all_lines[line_idx + 1][1]
                    if re.match(rf'^{opt_letter}[\.\)]', next_str):
                        continue
                
                hl_count = sum(1 for pw in opt_pwords if is_word_highlighted(pw[0], pw[1]))
                
                curr_q['options'].append({
                    'id': opt_letter,
                    'text': opt_text,
                    'pwords': opt_pwords,
                    'hl': hl_count
                })
        else:
            if not curr_q['in_options']:
                curr_q['prompt_parts'].append((pw_list, line_str))
            else:
                if curr_q['options']:
                    if curr_q['options'][-1]['text']:
                        curr_q['options'][-1]['text'] += ' ' + line_str
                    else:
                        curr_q['options'][-1]['text'] = line_str
                    curr_q['options'][-1]['pwords'].extend(pw_list)
                    curr_q['options'][-1]['hl'] += sum(1 for pw in pw_list if is_word_highlighted(pw[0], pw[1]))

if curr_q:
    questions.append(curr_q)

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

# Process diagram clips accurately
final_data = []

for q_idx, q in enumerate(questions):
    q_num = q['num']
    first_part = q['prompt_parts'][0]
    prompt_text = first_part[1]
    
    is_diagram_q = bool(re.search(r'hình\s+vẽ|sơ\s+đồ|bảng\s+dưới|bảng\s+sau|ký\s+hiệu', prompt_text, re.IGNORECASE))
    
    full_prompt_lines = [prompt_text]
    if not is_diagram_q:
        for part in q['prompt_parts'][1:]:
            full_prompt_lines.append(part[1])
            
    clean_prompt = ' '.join(full_prompt_lines).strip()
    clean_prompt = re.sub(r'^\d+\.\d+[\.\:]?\s*', '', clean_prompt)
    
    image_rel_path = None
    image_base64 = None
    
    if is_diagram_q and q['options'] and q['options'][0]['pwords']:
        fl_pwords = first_part[0]
        fl_pno = fl_pwords[0][0]
        fl_y1 = max(pw[1][3] for pw in fl_pwords)
        
        oa_pwords = q['options'][0]['pwords']
        oa_pno = oa_pwords[0][0]
        oa_y0 = min(pw[1][1] for pw in oa_pwords)
        
        target_pno = None
        clip_rect = None
        
        if fl_pno == oa_pno and oa_y0 > fl_y1 + 25:
            target_pno = fl_pno
            clip_rect = pymupdf.Rect(60, fl_y1 + 4, 540, oa_y0 - 4)
        elif oa_pno > fl_pno:
            # Diagram is on the page with option a!
            target_pno = oa_pno
            clip_rect = pymupdf.Rect(60, 60, 540, oa_y0 - 4)
            
        if target_pno is not None and clip_rect is not None and clip_rect.height > 20:
            target_page = doc[target_pno]
            pix = target_page.get_pixmap(clip=clip_rect, dpi=160)
            img_filename = f"q_{q_num.replace('.', '_')}.png"
            img_path = os.path.join('images', img_filename)
            pix.save(img_path)
            image_rel_path = f"images/{img_filename}"
            
            b64_str = base64.b64encode(pix.tobytes("png")).decode('utf-8')
            image_base64 = f"data:image/png;base64,{b64_str}"
            
    # Clean options
    clean_options = []
    for opt in q['options']:
        t = re.sub(r'^[a-dA-D][\.\)]\s*', '', opt['text']).strip()
        clean_options.append({
            'id': opt['id'],
            'text': t
        })
        
    hl_opts = [o for o in q['options'] if o['hl'] > 0]
    if len(hl_opts) == 1:
        correct_ans = hl_opts[0]['id']
    elif len(hl_opts) > 1:
        best = max(hl_opts, key=lambda x: x['hl'])
        correct_ans = best['id']
    else:
        correct_ans = 'a'
        
    final_data.append({
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

print(f"Generated final data for {len(final_data)} questions.")
images_with_clip = [q for q in final_data if q['image']]
print(f"Total questions with clipped images: {len(images_with_clip)}")
for q in images_with_clip[:10]:
    print(f"  Q {q['num']}: {q['image']}")

with open('questions_data.json', 'w', encoding='utf-8') as f:
    json.dump(final_data, f, ensure_ascii=False, indent=2)

with open('questions_data.js', 'w', encoding='utf-8') as f:
    f.write('const QUESTIONS_DATA = ' + json.dumps(final_data, ensure_ascii=False, indent=2) + ';')

print("Successfully written questions_data.json and questions_data.js")
