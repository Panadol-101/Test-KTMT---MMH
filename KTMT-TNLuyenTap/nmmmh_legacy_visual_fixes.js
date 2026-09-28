// Sửa một lần cho dữ liệu NMMMH đã được seed trước đây vào IndexedDB.
// Chỉ chạm tới câu còn dùng đúng ảnh chụp màn hình cũ; không ghi đè bản sửa tay.
var NMMMH_LEGACY_VISUAL_FIXES = [
  {
    id: 'nmmmh_d3_5',
    from_image: 'Đề NMMMH(xin được)/Đề 3/Screenshot 2026-08-23 224831.png',
    to_image: null,
    old_prompt: 'A và B lựa chọn hệ mật hoán vị với quy tắc: viết bản rõ theo từng hàng thành một ma trận. B nhận được bản mã "HKNAAHGNTOKTAAHONCAAGOIN". Hãy giúp B lựa chọn đáp án đúng cho các vị trí (8;16;19;23) trong bản rõ.',
    new_prompt: 'A và B lựa chọn hệ mật hoán vị với quy tắc: viết bản rõ theo từng hàng thành ma trận mat(1,2,3,4,5,6;7,8,9,10,11,12;13,14,15,16,17,18;19,20,21,22,23,24). Sau đó tạo ra bản mã bằng cách lấy các cột của ma trận này. B nhận được bản mã "HKNAAHGNTOKTAAHONCAAGOIN". Hãy giúp B lựa chọn đáp án đúng cho các vị trí (8;16;19;23) trong bản rõ.'
  },
  {
    id: 'nmmmh_d3_7',
    from_image: 'Đề NMMMH(xin được)/Đề 3/Screenshot 2026-08-23 224912.png',
    to_image: 'images/nmmmh/source_crops/de3/d3_7_positions.png',
    old_prompt: 'A và B sử dụng hệ mật Affine để trao đổi thông tin, B nhận được bản mã "HERQPCERHXEFDHFQPXEDT". Biết "H" là mã hóa của "C", "E" là mã hóa của "H". Hãy giúp B tìm các kí tự của bản rõ ở các vị trí abcd.',
    new_prompt: 'A và B sử dụng hệ mật Affine để trao đổi thông tin, B nhận được bản mã "HERQPCERHXEFDHFQPXEDT". Biết "H" là mã hóa của "C", "E" là mã hóa của "H". Hãy giúp B tìm các kí tự của bản rõ ở các vị trí a, b, c, d trong sơ đồ.'
  },
  {
    id: 'nmmmh_d3_9',
    from_image: 'Đề NMMMH(xin được)/Đề 3/Screenshot 2026-08-23 224955.png',
    to_image: null,
    old_prompt: 'Đâu là bản rõ của bản mã "QCTO" thu được khi dùng hệ mã Hill với ma trận khóa k⁻¹ = [[23, 18], [22, 19]]?',
    new_prompt: 'Đâu là bản rõ của bản mã "QCTO" thu được khi dùng hệ mã Hill với ma trận khóa k⁻¹ = mat(23,18;22,19)?'
  },
  { id: 'nmmmh_d3_28', from_image: 'Đề NMMMH(xin được)/Đề 3/Screenshot 2026-08-23 230615.png', to_image: 'images/nmmmh/source_crops/de3/d3_28_diagrams.png', from_source_image: 'Screenshot 2026-08-23 230729.png', to_source_image: 'Screenshot 2026-08-23 230615.png' },
  {
    id: 'nmmmh_d4_2', from_image: 'Đề NMMMH(xin được)/Đề 4/Screenshot 2026-08-30 223143.png', to_image: 'images/nmmmh/source_crops/de4/d4_2_shiftrows.png',
    old_prompt: 'Cho biết giá trị của x₁₂ và x₃₁ sau khi thực hiện bước ShiftRows: (theo mẫu: x₁₂, x₃₁)',
    new_prompt: 'Cho biết giá trị của x₁₂ và x₃₁ sau khi thực hiện bước ShiftRows. Đáp án gồm 2 giá trị x₁₂ và x₃₁ theo đúng thứ tự, ngăn cách bằng một dấu phẩy và một dấu cách theo mẫu: x₁₂, x₃₁.'
  },
  {
    id: 'nmmmh_d4_4', from_image: 'Đề NMMMH(xin được)/Đề 4/Screenshot 2026-08-30 223258.png', to_image: 'images/nmmmh/source_crops/de4/d4_4_subbytes.png',
    old_prompt: 'Trong hệ mật AES với bảng Sbox và ma trận như hình vẽ, hãy tìm giá trị của s₁₃:',
    new_prompt: 'Hệ mật AES (tính toán SubBytes, ShiftRows, AddRoundKey). Trong hệ mật AES với bảng Sbox và ma trận trong hình, hãy tìm giá trị của s₁₃.'
  },
  { id: 'nmmmh_d4_5', from_image: 'Đề NMMMH(xin được)/Đề 4/Screenshot 2026-08-30 223327.png', to_image: 'images/nmmmh/source_crops/de4/d4_5_mixcolumns.png' },
  { id: 'nmmmh_d4_7', from_image: 'Đề NMMMH(xin được)/Đề 4/Screenshot 2026-08-30 223712.png', to_image: 'images/nmmmh/source_crops/de4/d4_7_spn_diagrams.png' },
  {
    id: 'nmmmh_d4_10', from_image: 'Đề NMMMH(xin được)/Đề 4/Screenshot 2026-08-30 223820.png', to_image: 'images/nmmmh/source_crops/de4/d4_10_invshiftrows.png',
    old_prompt: 'Hãy cho biết giá trị của x₂₃ và x₀₁ sau khi thực hiện InvShiftRows: (theo mẫu: x₂₃, x₀₁)',
    new_prompt: 'Hãy cho biết giá trị của x₂₃ và x₀₁ sau khi thực hiện InvShiftRows. Đáp án gồm 2 giá trị x₂₃ và x₀₁ theo đúng thứ tự, ngăn cách bằng một dấu phẩy và một dấu cách theo mẫu: x₂₃, x₀₁.'
  },
  { id: 'nmmmh_d4_16', from_image: 'Đề NMMMH(xin được)/Đề 4/Screenshot 2026-08-30 223947.png', to_image: 'images/nmmmh/source_crops/de4/d4_16_addroundkey.png' },
  { id: 'nmmmh_d4_34', from_image: 'Đề NMMMH(xin được)/Đề 4/Screenshot 2026-08-30 225126.png', to_image: null },
  { id: 'nmmmh_d4_36', from_image: 'Đề NMMMH(xin được)/Đề 4/Screenshot 2026-08-30 225153.png', to_image: null }
];

function applyNmmmhLegacyVisualFixes(questionRecord) {
  if (!questionRecord || !Array.isArray(questionRecord.data)) return false;
  let changed = false;
  const byId = new Map(NMMMH_LEGACY_VISUAL_FIXES.map(fix => [fix.id, fix]));
  questionRecord.data.forEach(question => {
    const fix = byId.get(question && question.id);
    if (!fix || question.image !== fix.from_image) return;
    question.image = fix.to_image;
    if (fix.old_prompt && question.prompt === fix.old_prompt) question.prompt = fix.new_prompt;
    if (fix.from_source_image && question.source_image === fix.from_source_image) question.source_image = fix.to_source_image;
    changed = true;
  });
  return changed;
}
