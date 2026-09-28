import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('questions_data.js', 'r', encoding='utf-8') as f:
    js_data = f.read()

# Replace <script src="questions_data.js"></script> with embedded <script>...</script>
bundled_html = html.replace(
    '<script src="questions_data.js"></script>',
    f'<script>\n{js_data}\n</script>'
)

with open('trac_nghiem_ktmt.html', 'w', encoding='utf-8') as f:
    f.write(bundled_html)

print("Generated standalone trac_nghiem_ktmt.html successfully!")
