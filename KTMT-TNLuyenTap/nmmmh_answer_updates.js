// Bổ sung đáp án đã đối chiếu cho các câu NMMMH có dữ kiện đủ rõ.
// Chỉ áp dụng khi câu trong IndexedDB chưa có đáp án, vì vậy không ghi đè sửa tay.

var NMMMH_ANSWER_UPDATES = {
  batchKey: 'nmmmh_answer_updates_v1',
  answers: {
    // Đề 1 (câu 5 giữ lại để kiểm tra vì kết quả phép tính trong ảnh không khớp các lựa chọn)
    'nmmmh_1':'d','nmmmh_2':'a','nmmmh_3':'b','nmmmh_4':'d',
    'nmmmh_6':'d','nmmmh_7':'c','nmmmh_8':'c','nmmmh_9':'b','nmmmh_10':'a',
    'nmmmh_11':'d','nmmmh_12':'b','nmmmh_13':'b','nmmmh_14':'c','nmmmh_15':'d',
    'nmmmh_16':'d','nmmmh_17':'b','nmmmh_18':'a','nmmmh_19':'c','nmmmh_20':'a',
    'nmmmh_21':'a','nmmmh_22':'b','nmmmh_23':'d','nmmmh_24':'c','nmmmh_25':'c',
    'nmmmh_26':'c','nmmmh_27':'a','nmmmh_28':'a','nmmmh_29':'b','nmmmh_30':'d',
    'nmmmh_31':'c','nmmmh_32':'b','nmmmh_33':'c','nmmmh_34':'c','nmmmh_35':'b',
    'nmmmh_36':'c','nmmmh_37':'b','nmmmh_38':'c','nmmmh_39':'a','nmmmh_40':'c',

    // Đề 2 (câu 4 và 13 được giữ lại vì đề gốc có hơn một diễn giải hợp lý)
    'nmmmh_d2_1':'a','nmmmh_d2_2':'d','nmmmh_d2_3':'d','nmmmh_d2_5':'a',
    'nmmmh_d2_6':'b','nmmmh_d2_7':'d','nmmmh_d2_8':'b','nmmmh_d2_9':'c',
    'nmmmh_d2_10':'c','nmmmh_d2_11':'a','nmmmh_d2_12':'c','nmmmh_d2_14':'d',
    'nmmmh_d2_15':'d','nmmmh_d2_16':'a','nmmmh_d2_17':'c','nmmmh_d2_18':'a',
    'nmmmh_d2_19':'b','nmmmh_d2_20':'a',

    // Đề 3 (câu 5 và 7 phụ thuộc sơ đồ/chỉ số trong ảnh nên giữ để rà lại)
    'nmmmh_d3_1':'b','nmmmh_d3_2':'d','nmmmh_d3_3':'d','nmmmh_d3_4':'d',
    'nmmmh_d3_6':'c','nmmmh_d3_8':'b','nmmmh_d3_9':'b','nmmmh_d3_10':'a',
    'nmmmh_d3_11':'c','nmmmh_d3_12':'c','nmmmh_d3_13':'b','nmmmh_d3_14':'b',
    'nmmmh_d3_15':'c','nmmmh_d3_16':'b','nmmmh_d3_17':'b','nmmmh_d3_18':'c',
    'nmmmh_d3_19':'c','nmmmh_d3_20':'b','nmmmh_d3_21':'b','nmmmh_d3_22':'b',
    'nmmmh_d3_23':'a','nmmmh_d3_24':'d','nmmmh_d3_25':'b','nmmmh_d3_26':'c',
    'nmmmh_d3_27':'c','nmmmh_d3_28':'d','nmmmh_d3_29':'d','nmmmh_d3_30':'a',

    // Đề 4 là bộ đề có cùng nội dung tính toán với Đề 1.
    'nmmmh_d4_1':'d','nmmmh_d4_2':'a','nmmmh_d4_3':'b','nmmmh_d4_4':'d',
    'nmmmh_d4_6':'d','nmmmh_d4_7':'c','nmmmh_d4_8':'c','nmmmh_d4_9':'b','nmmmh_d4_10':'a',
    'nmmmh_d4_11':'d','nmmmh_d4_12':'b','nmmmh_d4_13':'b','nmmmh_d4_14':'c','nmmmh_d4_15':'d',
    'nmmmh_d4_16':'d','nmmmh_d4_17':'b','nmmmh_d4_18':'a','nmmmh_d4_19':'c','nmmmh_d4_20':'a',
    'nmmmh_d4_21':'a','nmmmh_d4_22':'b','nmmmh_d4_23':'d','nmmmh_d4_24':'c','nmmmh_d4_25':'c',
    'nmmmh_d4_26':'c','nmmmh_d4_27':'a','nmmmh_d4_28':'a','nmmmh_d4_29':'b','nmmmh_d4_30':'d',
    'nmmmh_d4_31':'c','nmmmh_d4_32':'b','nmmmh_d4_33':'c','nmmmh_d4_34':'c','nmmmh_d4_35':'b',
    'nmmmh_d4_36':'c','nmmmh_d4_37':'b','nmmmh_d4_38':'c','nmmmh_d4_39':'a','nmmmh_d4_40':'c'
  }
};
