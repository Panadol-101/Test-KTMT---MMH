// Dữ liệu Đề 2 - Nhập môn mật mã học
// Nguồn: Đề NMMMH(xin được)/Đề 2 (10 ảnh, 20 câu)
// Đáp án để trống vì ảnh nguồn không đánh dấu đáp án đúng – người dùng rà và bổ sung sau.
// File này được index.html đọc và tự nạp vào IndexedDB.

var NMMMH_DE2_DATA = {
  subjectId: 'nmmmh',
  subjectName: 'Nhập môn mật mã học',
  subjectIcon: '🔐',
  subjectColor: '#0ea5e9',
  batchKey: 'nmmmh_seed_v2',
  sourceSet: 'Đề 2',
  questions: [
    {
      "id": "nmmmh_d2_1",
      "type": "choice",
      "num": "D2_1",
      "chapter": 1,
      "chapter_name": "An toàn thông tin",
      "prompt": "Lựa chọn đáp án ĐÚNG về các dịch vụ đảm bảo an toàn thông tin.",
      "options": [
        { "id": "a", "text": "Toàn vẹn thông tin là dịch vụ giúp phát hiện những sự thay đổi trái phép đối với thông tin" },
        { "id": "b", "text": "Chống chối bỏ là dịch vụ bảo đảm bên gửi và bên nhận không thể chối bỏ nhau." },
        { "id": "c", "text": "Xác thực thông tin là dịch vụ giúp kiểm tra, xác thực tính bí mật/toàn vẹn của thông tin." },
        { "id": "d", "text": "Bí mật thông tin là dịch vụ bảo đảm không ai biết thông tin đó" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223243.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_2",
      "type": "choice",
      "num": "D2_2",
      "chapter": 1,
      "chapter_name": "Mã hóa dữ liệu",
      "prompt": "Phát biểu nào sau đây là ĐÚNG về mã hóa dữ liệu?",
      "options": [
        { "id": "a", "text": "Có mục đích là để che giấu sự tồn tại của thông điệp bí mật cần trao đổi." },
        { "id": "b", "text": "Luôn được sử dụng trong lĩnh vực quân sự" },
        { "id": "c", "text": "Thường sử dụng hàm băm mật mã hoặc chữ kí số để mã hóa dữ liệu" },
        { "id": "d", "text": "Chuyển bản rõ có thể đọc được thành thông tin không thể đọc được và được gọi là bản mã." }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223243.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_3",
      "type": "choice",
      "num": "D2_3",
      "chapter": 1,
      "chapter_name": "Khái niệm mật mã",
      "prompt": "Mật mã có tác dụng:",
      "options": [
        { "id": "a", "text": "Đảm bảo tính toàn vẹn, bí mật, xác thực và sẵn sàng của dữ liệu." },
        { "id": "b", "text": "Đảm bảo bí mật, xác thực và kịp thời của dữ liệu." },
        { "id": "c", "text": "Đảm bảo tính toàn vẹn, bí mật và kịp thời của dữ liệu." },
        { "id": "d", "text": "Đảm bảo tính toàn vẹn, bí mật và xác thực của dữ liệu." }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223344.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_4",
      "type": "choice",
      "num": "D2_4",
      "chapter": 1,
      "chapter_name": "Khái niệm mật mã",
      "prompt": "Đâu là khẳng định SAI?",
      "options": [
        { "id": "a", "text": "Bản mã là dạng mã của dữ liệu bản rõ." },
        { "id": "b", "text": "Mã hóa là quá trình biến đổi bản rõ thành bản mã, bên thứ 3 không có khóa thì không hiểu được bản mã." },
        { "id": "c", "text": "Khóa mật mã là thông tin tham số dùng để mã hóa người gửi và nhận cần phải bảo vệ sự bí mật của khóa mật mã." },
        { "id": "d", "text": "Giải mã là quá trình chuyển bản mã thành bản rõ và là quá trình ngược lại của mã hóa" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223344.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_5",
      "type": "choice",
      "num": "D2_5",
      "chapter": 1,
      "chapter_name": "Mật mã khóa đối xứng",
      "prompt": "Lựa chọn khẳng định SAI về mật mã khóa đối xứng.",
      "options": [
        { "id": "a", "text": "Khóa của mật mã khóa đối xứng là cặp (khóa riêng; khóa công khai)." },
        { "id": "b", "text": "Khóa mã hóa của mật mã khóa đối xứng cần phải giữ bí mật và được bên gửi và nhận trao đổi trên kênh truyền an toàn." },
        { "id": "c", "text": "Mật mã khóa đối xứng thường có khả năng mã hóa/giải mã thông điệp nhanh hơn mật mã khóa bất đối xứng." },
        { "id": "d", "text": "Trong mật mã khóa đối xứng, khóa mã hóa và khóa giải mã là giống nhau hoặc dễ dàng suy ra nhau." }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223437.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_6",
      "type": "choice",
      "num": "D2_6",
      "chapter": 1,
      "chapter_name": "Độ an toàn hệ mật",
      "prompt": "Đâu là thuật toán mã hóa được xem là có độ an toàn tốt nhất?",
      "options": [
        { "id": "a", "text": "Affine" },
        { "id": "b", "text": "OTP" },
        { "id": "c", "text": "Vigenere" },
        { "id": "d", "text": "Mã hoán vị" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223437.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_7",
      "type": "choice",
      "num": "D2_7",
      "chapter": 1,
      "chapter_name": "Hệ mật khóa bí mật",
      "prompt": "Hệ mật khóa bí mật đảm bảo tính chất an toàn nào của thông tin?",
      "options": [
        { "id": "a", "text": "Tính chống chối bỏ" },
        { "id": "b", "text": "Tính bí mật, sẵn sàng và chống chối bỏ" },
        { "id": "c", "text": "Tính bí mật và sẵn sàng" },
        { "id": "d", "text": "Tính bí mật" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223525.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_8",
      "type": "choice",
      "num": "D2_8",
      "chapter": 1,
      "chapter_name": "Mật mã khóa đối xứng",
      "prompt": "Phát biểu nào sau đây về mật mã khóa đối xứng là ĐÚNG?",
      "options": [
        { "id": "a", "text": "Được sử dụng để tạo chữ kí số." },
        { "id": "b", "text": "Có tốc độ mã hóa/giải mã cao" },
        { "id": "c", "text": "Sử dụng hai khóa khác nhau cho mã hóa/giải mã và được dùng để kí số." },
        { "id": "d", "text": "Có khả năng đảm bảo tính chống chối bỏ và tốc độ mã hóa/giải mã cao" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223525.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_9",
      "type": "choice",
      "num": "D2_9",
      "chapter": 1,
      "chapter_name": "Mật mã khóa đối xứng",
      "prompt": "Khẳng định nào sau đây về mật mã khóa đối xứng là KHÔNG đúng?",
      "options": [
        { "id": "a", "text": "Đảm bảo được tính bí mật của thông tin." },
        { "id": "b", "text": "Mã khối và mã dòng là các hệ mật mã khóa đối xứng" },
        { "id": "c", "text": "Được dùng để tạo chữ kí số." },
        { "id": "d", "text": "Là hệ mật dùng một khóa cho quá trình mã và giải mã." }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223554.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_10",
      "type": "choice",
      "num": "D2_10",
      "chapter": 1,
      "chapter_name": "Đặc trưng hệ mật",
      "prompt": "Hệ mật mã được đặc trưng bởi các yếu tố nào sau đây?",
      "options": [
        { "id": "a", "text": "Cách bản rõ được xử lí và cấu trúc toán học của hệ mật." },
        { "id": "b", "text": "Số khóa được sử dụng khi mã/giải mã và cách bản rõ được xử lí" },
        { "id": "c", "text": "Cấu trúc toán học của hệ mật, Số khóa được sử dụng khi mã/giải mã và cách bản rõ được xử lí." },
        { "id": "d", "text": "Số khóa được sử dụng khi mã/giải mã và cấu trúc toán học của hệ mật." }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223554.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_11",
      "type": "choice",
      "num": "D2_11",
      "chapter": 1,
      "chapter_name": "Khái niệm mật mã",
      "prompt": "Đâu là quá trình chuyển bản rõ thành bản mã?",
      "options": [
        { "id": "a", "text": "Encryption" },
        { "id": "b", "text": "Plaintext" },
        { "id": "c", "text": "Ciphertext" },
        { "id": "d", "text": "Decryption" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223623.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_12",
      "type": "choice",
      "num": "D2_12",
      "chapter": 1,
      "chapter_name": "Hệ mật mã đối xứng",
      "prompt": "Khẳng định nào sau đây là ĐÚNG về hệ mật mã đối xứng?",
      "options": [
        { "id": "a", "text": "Mỗi bên sử dụng khóa bí mật của riêng mình để mã hóa." },
        { "id": "b", "text": "Mỗi bên gửi cho bên còn lại một phần khóa riêng của mình để sử dụng" },
        { "id": "c", "text": "Hai bên thỏa thuận trước để dùng chung một khóa." },
        { "id": "d", "text": "Hai bên không cần thỏa thuận trước vì từ khóa của riêng mình có thể dễ dàng suy ra khóa chung" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223623.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_13",
      "type": "choice",
      "num": "D2_13",
      "chapter": 1,
      "chapter_name": "Mã khối",
      "prompt": "Khẳng định nào sau đây về mã khối là SAI?",
      "options": [
        { "id": "a", "text": "Hoạt động tương tự mã dòng" },
        { "id": "b", "text": "Khóa của mã khối là đối xứng." },
        { "id": "c", "text": "Sử dụng cặp khóa công khai và khóa riêng để mã và giải mã" },
        { "id": "d", "text": "Bản rõ có kích thước cố định" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223648.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_14",
      "type": "choice",
      "num": "D2_14",
      "chapter": 1,
      "chapter_name": "Mật mã cổ điển - Caesar",
      "prompt": "Hệ mật dịch vòng có khóa k=3 có tên gọi là gì?",
      "options": [
        { "id": "a", "text": "Vigenere Caesar" },
        { "id": "b", "text": "David Caesar" },
        { "id": "c", "text": "Vladimir Caesar" },
        { "id": "d", "text": "Caesar" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223648.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_15",
      "type": "choice",
      "num": "D2_15",
      "chapter": 1,
      "chapter_name": "Tấn công phân tích tần suất",
      "prompt": "Hệ mã nào dưới đây có khả năng chống lại tấn công phân tích tần suất?",
      "options": [
        { "id": "a", "text": "Mã thay thế đơn biểu" },
        { "id": "b", "text": "Mã đơn biểu" },
        { "id": "c", "text": "Mã dịch vòng" },
        { "id": "d", "text": "Mã đa biểu" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223733.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_16",
      "type": "choice",
      "num": "D2_16",
      "chapter": 1,
      "chapter_name": "Mật mã cổ điển - Mã Hill",
      "prompt": "Giả sử bản rõ 'sinhvien' được mã hóa bằng hệ mã Hill với m = 2 và thu được bản mã tương ứng là IYIDBHVM. Hãy chọn khóa mã hóa đúng",
      "options": [
        { "id": "a", "text": "pddg" },
        { "id": "b", "text": "pgdg" },
        { "id": "c", "text": "dggd" },
        { "id": "d", "text": "gddg" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223733.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_17",
      "type": "choice",
      "num": "D2_17",
      "chapter": 1,
      "chapter_name": "Mật mã cổ điển - Dịch vòng",
      "prompt": "Giả sử 2 bên sử dụng mã dịch vòng và bản mã truyền đi là “TQXJWPLJLQ”. Hãy tìm khóa mã hoá phù hợp",
      "options": [
        { "id": "a", "text": "17" },
        { "id": "b", "text": "21" },
        { "id": "c", "text": "9" },
        { "id": "d", "text": "25" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223821.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_18",
      "type": "choice",
      "num": "D2_18",
      "chapter": 1,
      "chapter_name": "Mật mã cổ điển - Hệ mật Affine",
      "prompt": "Giả sử 2 bên sử dụng hệ mật Affine với k = (a, b) và hàm mã y = ax + b mod 26 ta có E là mã hóa của H và X là mã hóa của K. Tìm khóa (a, b)",
      "options": [
        { "id": "a", "text": "(15,3)" },
        { "id": "b", "text": "(13,5)" },
        { "id": "c", "text": "(3,15)" },
        { "id": "d", "text": "(5,13)" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223821.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_19",
      "type": "choice",
      "num": "D2_19",
      "chapter": 1,
      "chapter_name": "Mật mã cổ điển - Vigenere",
      "prompt": "Tìm bản mã đúng của bản rõ \"chanthanh\" khi sử dụng hệ mật Vigenere với khoá K='kind'",
      "options": [
        { "id": "a", "text": "MPNQMPNQR" },
        { "id": "b", "text": "MPNQDPNQR" },
        { "id": "c", "text": "MPNQDPNRR" },
        { "id": "d", "text": "MNNQDPNQR" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223835.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d2_20",
      "type": "choice",
      "num": "D2_20",
      "chapter": 1,
      "chapter_name": "Mật mã cổ điển - Khóa chạy",
      "prompt": "A và B thống nhất sử dụng hệ mật khóa chạy A mã hóa bản rõ “doantotnghiep” với khóa K = “key”. Đâu là bản mã mà A thu được",
      "options": [
        { "id": "a", "text": "NSYQHOGGUAVKW" },
        { "id": "b", "text": "NSYQHOGGULVKW" },
        { "id": "c", "text": "NSZQHOGGUAVKW" },
        { "id": "d", "text": "NSYQHOPGUAVKW" }
      ],
      "answer": "",
      "source_set": "Đề 2",
      "source_image": "Screenshot 2026-08-16 223835.png",
      "needs_check": true
    }
  ]
};
