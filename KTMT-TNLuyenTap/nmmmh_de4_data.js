// Dữ liệu Đề 4 - Nhập môn mật mã học
// Nguồn: Đề NMMMH(xin được)/Đề 4 (24 ảnh, 40 câu)

var NMMMH_DE4_DATA = {
  "subjectId": "nmmmh",
  "subjectName": "Nhập môn mật mã học",
  "subjectIcon": "🔐",
  "subjectColor": "#0ea5e9",
  "batchKey": "nmmmh_seed_v4",
  "sourceSet": "Đề 4",
  "questions": [
    {
      "id": "nmmmh_d4_1",
      "type": "choice",
      "num": "D4_1",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Giả sử khóa AES dạng hexa là K = 1B C0 23 8A F6 43 5E 94 AB 5C 50 BF 82 35 EB 5F. Chọn giá trị đúng cho w[3].",
      "options": [
        {
          "id": "a",
          "text": "(F6 43 5E 94)"
        },
        {
          "id": "b",
          "text": "(82 35 EB 5F)"
        },
        {
          "id": "c",
          "text": "(1B C0 23 8A)"
        },
        {
          "id": "d",
          "text": "(AB 5C 50 BF)"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223050.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_2",
      "type": "choice",
      "num": "D4_2",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Cho biết giá trị của x₁₂ và x₃₁ sau khi thực hiện bước ShiftRows. Đáp án gồm 2 giá trị x₁₂ và x₃₁ theo đúng thứ tự, ngăn cách bằng một dấu phẩy và một dấu cách theo mẫu: x₁₂, x₃₁.",
      "image": "images/nmmmh/source_crops/de4/d4_2_shiftrows.png",
      "options": [
        {
          "id": "a",
          "text": "26, AF"
        },
        {
          "id": "b",
          "text": "A3, B2"
        },
        {
          "id": "c",
          "text": "3F, 46"
        },
        {
          "id": "d",
          "text": "A3, 87"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223143.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_3",
      "type": "choice",
      "num": "D4_3",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Tính xtime(39). Đáp án được viết dưới dạng hexa, ghi đủ 2 kí tự, ví dụ: 0F",
      "options": [
        {
          "id": "a",
          "text": "69"
        },
        {
          "id": "b",
          "text": "72"
        },
        {
          "id": "c",
          "text": "68"
        },
        {
          "id": "d",
          "text": "67"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223215.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_4",
      "type": "choice",
      "num": "D4_4",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Hệ mật AES (tính toán SubBytes, ShiftRows, AddRoundKey). Trong hệ mật AES với bảng Sbox và ma trận trong hình, hãy tìm giá trị của s₁₃.",
      "image": "images/nmmmh/source_crops/de4/d4_4_subbytes.png",
      "options": [
        {
          "id": "a",
          "text": "AA"
        },
        {
          "id": "b",
          "text": "05"
        },
        {
          "id": "c",
          "text": "47"
        },
        {
          "id": "d",
          "text": "F7"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223258.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_5",
      "type": "choice",
      "num": "D4_5",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Tính giá trị của x₁₃ trong vòng tính MixColumns của hệ mật AES:",
      "image": "images/nmmmh/source_crops/de4/d4_5_mixcolumns.png",
      "options": [
        {
          "id": "a",
          "text": "B1"
        },
        {
          "id": "b",
          "text": "E3"
        },
        {
          "id": "c",
          "text": "A3"
        },
        {
          "id": "d",
          "text": "23"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223327.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_6",
      "type": "choice",
      "num": "D4_6",
      "chapter": 2,
      "chapter_name": "Mã khối",
      "prompt": "Hệ mã nào sau đây là hệ mã khối?",
      "options": [
        {
          "id": "a",
          "text": "DES, RC4, RC5."
        },
        {
          "id": "b",
          "text": "AES, Affine, RC4."
        },
        {
          "id": "c",
          "text": "DES, AES, Ceasar."
        },
        {
          "id": "d",
          "text": "DES, AES"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223337.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_7",
      "type": "choice",
      "num": "D4_7",
      "chapter": 3,
      "chapter_name": "AES & SPN",
      "prompt": "Đâu là kiến trúc mạng SPN? (Xem 4 sơ đồ (1), (2), (3), (4) trong hình)",
      "image": "images/nmmmh/source_crops/de4/d4_7_spn_diagrams.png",
      "options": [
        {
          "id": "a",
          "text": "2, 2"
        },
        {
          "id": "b",
          "text": "2, 3, 4"
        },
        {
          "id": "c",
          "text": "3, 4"
        },
        {
          "id": "d",
          "text": "2, 3"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223712.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_8",
      "type": "choice",
      "num": "D4_8",
      "chapter": 2,
      "chapter_name": "Mã khối & Shannon",
      "prompt": "Lựa chọn đáp án ĐÚNG về tính khuếch tán trong nguyên lí Shannon",
      "options": [
        {
          "id": "a",
          "text": "Tính khuếch tán trong nguyên lí Shannon yêu cầu khi thay đổi 1 bit trong bản rõ phải dẫn tới sự thay đổi 2 bit trong bản mã tạo ra và ngược lại"
        },
        {
          "id": "b",
          "text": "Tính khuếch tán trong nguyên lí Shannon yêu cầu khi thay đổi 1 bit trong bản rõ phải dẫn tới sự thay đổi 1 bit trong bản mã tạo ra và ngược lại"
        },
        {
          "id": "c",
          "text": "Tính khuếch tán trong nguyên lí Shannon yêu cầu khi thay đổi 1 bit trong bản rõ phải dẫn tới sự thay đổi một nửa số bit trong bản mã tạo ra và ngược lại"
        },
        {
          "id": "d",
          "text": "Tính khuếch tán trong nguyên lí Shannon yêu cầu khi thay đổi 1 bit trong khóa phải dẫn tới sự thay đổi một nửa số bit trong bản mã tạo ra và ngược lại"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223746.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_9",
      "type": "choice",
      "num": "D4_9",
      "chapter": 1,
      "chapter_name": "Tổng quan mật mã",
      "prompt": "Kẻ tấn công thám mã để tìm khóa được sử dụng trong quá trình mã hóa từ một số thông điệp được mã hóa, đó là hình thức tấn công nào?",
      "options": [
        {
          "id": "a",
          "text": "Tấn công chỉ với bản rõ"
        },
        {
          "id": "b",
          "text": "Tấn công chỉ với bản mã"
        },
        {
          "id": "c",
          "text": "Tấn công với bản rõ đã biết"
        },
        {
          "id": "d",
          "text": "Tấn công với bản mã được chọn"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223746.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_10",
      "type": "choice",
      "num": "D4_10",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Hãy cho biết giá trị của x₂₃ và x₀₁ sau khi thực hiện InvShiftRows. Đáp án gồm 2 giá trị x₂₃ và x₀₁ theo đúng thứ tự, ngăn cách bằng một dấu phẩy và một dấu cách theo mẫu: x₂₃, x₀₁.",
      "image": "images/nmmmh/source_crops/de4/d4_10_invshiftrows.png",
      "options": [
        {
          "id": "a",
          "text": "9F, 10"
        },
        {
          "id": "b",
          "text": "20, 10"
        },
        {
          "id": "c",
          "text": "4D, 10"
        },
        {
          "id": "d",
          "text": "4D, 5B"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223820.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_11",
      "type": "choice",
      "num": "D4_11",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Tính xtime(A5). Đáp án được viết dưới dạng hexa, ghi đủ 2 kí tự, ví dụ: 0F",
      "options": [
        {
          "id": "a",
          "text": "41"
        },
        {
          "id": "b",
          "text": "B1"
        },
        {
          "id": "c",
          "text": "11"
        },
        {
          "id": "d",
          "text": "51"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223847.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_12",
      "type": "choice",
      "num": "D4_12",
      "chapter": 2,
      "chapter_name": "DES & Feistel",
      "prompt": "Nhược điểm của mạng Feistel là",
      "options": [
        {
          "id": "a",
          "text": "Cấu trúc mạng Feistel chỉ được sử dụng trong việc mã hóa các dữ liệu nhỏ."
        },
        {
          "id": "b",
          "text": "Mỗi vòng mã chỉ thực hiện biến đổi một nửa khối dữ liệu nên cần số vòng mã hóa lớn để đảm bảo an toàn của hệ mật, điều này làm giảm đáng kể tốc độ mã."
        },
        {
          "id": "c",
          "text": "Quá trình mã và giải mã là đồng nhất nên dễ bị tấn công hơn."
        },
        {
          "id": "d",
          "text": "Chỉ sử dụng phép thế trong quá trình mã hóa dữ liệu"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223847.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_13",
      "type": "choice",
      "num": "D4_13",
      "chapter": 1,
      "chapter_name": "Mật mã cổ điển",
      "prompt": "Phát biểu nào về hệ mã OTP sau đây là SAI?",
      "options": [
        {
          "id": "a",
          "text": "Là hệ mật có độ mật hoàn thiện"
        },
        {
          "id": "b",
          "text": "|K| < |P|"
        },
        {
          "id": "c",
          "text": "Phép mã và giải mã là đồng nhất."
        },
        {
          "id": "d",
          "text": "Là hệ mật khóa đối xứng."
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223847.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_14",
      "type": "choice",
      "num": "D4_14",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Trong quá trình mở rộng khóa của hệ mật AES giả sử kết quả của SubWord = (AE; FE; 86; 54) và Rcon[j]=(01,00,00,00). Hãy tính g(w[3])",
      "options": [
        {
          "id": "a",
          "text": "(A6; FE; 86; 54)"
        },
        {
          "id": "b",
          "text": "(EE; FE; 86; 54)"
        },
        {
          "id": "c",
          "text": "(AF; FE; 86; 54)"
        },
        {
          "id": "d",
          "text": "(EA; FE; 86; 54)"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223918.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_15",
      "type": "choice",
      "num": "D4_15",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Trong quá trình mở rộng khóa của hệ mật AES giả sử w[0] = (12; 70; AE; DB) và g(w[3])= (65; 07; E0; AB). Hãy tính w[4].",
      "options": [
        {
          "id": "a",
          "text": "(87; 70; 5F; 80)"
        },
        {
          "id": "b",
          "text": "(87; 71; 5F; 61)"
        },
        {
          "id": "c",
          "text": "(77; 70; 5F; 80)"
        },
        {
          "id": "d",
          "text": "(77; 77; 4E; 70)"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223918.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_16",
      "type": "choice",
      "num": "D4_16",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Trong quá trình mở rộng khóa của hệ mật AES giả sử bản rõ và khóa như hình vẽ. Kết quả của AddRoundKey là ma trận x. Hãy tính x₂₀.",
      "image": "images/nmmmh/source_crops/de4/d4_16_addroundkey.png",
      "options": [
        {
          "id": "a",
          "text": "42"
        },
        {
          "id": "b",
          "text": "61"
        },
        {
          "id": "c",
          "text": "52"
        },
        {
          "id": "d",
          "text": "21"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 223947.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_17",
      "type": "choice",
      "num": "D4_17",
      "chapter": 2,
      "chapter_name": "DES & Feistel",
      "prompt": "Phân biệt kiến trúc SPN và Feistel. DES sử dụng mạng Feistel có đặc điểm là:",
      "options": [
        {
          "id": "a",
          "text": "DES sử dụng mạng Feistel có đặc điểm là:"
        },
        {
          "id": "b",
          "text": "Quá trình mã hóa và giải mã là ngược nhau."
        },
        {
          "id": "c",
          "text": "Quá trình mã hóa và giải mã là đồng nhất chỉ khác ở thứ tự khóa con."
        },
        {
          "id": "d",
          "text": "Quá trình mã hóa và giải mã là ngược nhau nhưng thứ tự khóa sử dụng giống nhau."
        },
        {
          "id": "e",
          "text": "Mỗi vòng mã chỉ thực hiện biến đổi nửa trái của khối dữ liệu."
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 224004.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_18",
      "type": "choice",
      "num": "D4_18",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Trong thủ tục mở rộng khóa của AES, biết RC[5] = (10). Hãy tính RC[6]",
      "options": [
        {
          "id": "a",
          "text": "(20)"
        },
        {
          "id": "b",
          "text": "(40)"
        },
        {
          "id": "c",
          "text": "(80)"
        },
        {
          "id": "d",
          "text": "(08)"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 224004.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_19",
      "type": "choice",
      "num": "D4_19",
      "chapter": 3,
      "chapter_name": "AES & Feistel",
      "prompt": "Sự khác biệt giữa kiến trúc mạng Feistel so với SPN là?",
      "options": [
        {
          "id": "a",
          "text": "Hộp thế có tính chất phi tuyến."
        },
        {
          "id": "b",
          "text": "Đáp ứng được cả hai yêu cầu xáo trộn và khuếch tán"
        },
        {
          "id": "c",
          "text": "Khối dữ liệu đầu vào của mạng Feistel được chia thành hai nửa sau đó đi qua các vòng xử lí và được kết hợp lại để tạo ra khối dữ liệu mã"
        },
        {
          "id": "d",
          "text": "Số vòng thực hiện của mạng SPN luôn lớn hơn so với mạng Feistel"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 224136.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_20",
      "type": "choice",
      "num": "D4_20",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Trong hệ mật AES. Tính kết quả của phép tính 42_H • 18_H trên GF(2^8) với đa thức rút gọn m(x) = x^8 + x^4 + x^3 + x + 1. Đáp án dưới dạng hexa, ghi đủ 2 kí tự. Ví dụ: 0F",
      "options": [
        {
          "id": "a",
          "text": "6A"
        },
        {
          "id": "b",
          "text": "26"
        },
        {
          "id": "c",
          "text": "2A"
        },
        {
          "id": "d",
          "text": "4C"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 224136.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_21",
      "type": "choice",
      "num": "D4_21",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Chọn đáp án SAI về thuật toán mật mã khối Rijndael?",
      "options": [
        {
          "id": "a",
          "text": "Khóa có độ dài tối đa là 512 bít"
        },
        {
          "id": "b",
          "text": "Khóa có độ dài tối đa là 256 bít"
        },
        {
          "id": "c",
          "text": "Độ dài của khóa phải chia hết cho 32"
        },
        {
          "id": "d",
          "text": "Độ dài của khóa không cân bằng với độ dài của khối dữ liệu"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 224855.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_22",
      "type": "choice",
      "num": "D4_22",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Kích thước khóa tối đa cho phép trong thuật toán mã Rijndael là",
      "options": [
        {
          "id": "a",
          "text": "1024 bít"
        },
        {
          "id": "b",
          "text": "256 bít"
        },
        {
          "id": "c",
          "text": "64 bít"
        },
        {
          "id": "d",
          "text": "192 bít"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 224855.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_23",
      "type": "choice",
      "num": "D4_23",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "AES-192 thực hiện bao nhiêu vòng lặp?",
      "options": [
        {
          "id": "a",
          "text": "10"
        },
        {
          "id": "b",
          "text": "16"
        },
        {
          "id": "c",
          "text": "8"
        },
        {
          "id": "d",
          "text": "12"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 224855.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_24",
      "type": "choice",
      "num": "D4_24",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Kích thước khóa của AES là:",
      "options": [
        {
          "id": "a",
          "text": "64/128/192 bít"
        },
        {
          "id": "b",
          "text": "56/64/128 bít"
        },
        {
          "id": "c",
          "text": "128/192/256 bít"
        },
        {
          "id": "d",
          "text": "64/192/256 bít"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 224932.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_25",
      "type": "choice",
      "num": "D4_25",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Phát biểu nào sau đây về hệ mã khối AES là đúng",
      "options": [
        {
          "id": "a",
          "text": "Hàm AddRoundkeys của AES giúp đảm bảo tính khuếch tán"
        },
        {
          "id": "b",
          "text": "Hộp thế S-box của AES nhằm tăng tính khuếch tán của thuật toán."
        },
        {
          "id": "c",
          "text": "Hàm ShiftRows và MixColumns của thuật toán AES là tầng trộn tuyến tính để đảm bảo tính khuếch tán."
        },
        {
          "id": "d",
          "text": "Thuật toán AES thực hiện 10 vòng mã hóa đối với khóa 256 bit"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 224932.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_26",
      "type": "choice",
      "num": "D4_26",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Chọn đáp án SAI về thuật toán mật mã khối Rijndael?",
      "options": [
        {
          "id": "a",
          "text": "Có thể được cài đặt trên thẻ thông minh"
        },
        {
          "id": "b",
          "text": "Khóa có thể có độ dài là 256 bít."
        },
        {
          "id": "c",
          "text": "Độ dài của khối dữ liệu là 64 bít"
        },
        {
          "id": "d",
          "text": "Các phép biến đổi trong vòng lặp có thể nghịch đảo được"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 224932.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_27",
      "type": "choice",
      "num": "D4_27",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Khẳng định nào sau đây về AES là SAI?",
      "options": [
        {
          "id": "a",
          "text": "AES hỗ trợ độ dài đối với khối dữ liệu là 128, 192 hoặc 256 bit"
        },
        {
          "id": "b",
          "text": "Khóa của AES phải được giữ bí mật"
        },
        {
          "id": "c",
          "text": "Phép toán cộng và nhân của AES được thực hiện trên trường hữu hạn GF(2^8)."
        },
        {
          "id": "d",
          "text": "AES dùng mạng thay thế hoán vị (SPN) trên cấu trúc các mảng trạng thái"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225019.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_28",
      "type": "choice",
      "num": "D4_28",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Kích thước khóa mở rộng của AES-256 là bao nhiêu?",
      "options": [
        {
          "id": "a",
          "text": "60 từ"
        },
        {
          "id": "b",
          "text": "52 từ"
        },
        {
          "id": "c",
          "text": "44 từ"
        },
        {
          "id": "d",
          "text": "32 từ"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225019.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_29",
      "type": "choice",
      "num": "D4_29",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Chọn đáp án ĐÚNG?",
      "options": [
        {
          "id": "a",
          "text": "Phép biến đổi ShiftRow và MixColumn trong AES đảm bảo tính xáo trộn trên bản mã"
        },
        {
          "id": "b",
          "text": "S-box của AES bao gồm hoán vị của tất cả 256 giá trị 8 bit"
        },
        {
          "id": "c",
          "text": "S-box của AES thực hiện thay thế mỗi byte của trạng thái đầu vào thành một byte khác để đảm bảo tính khuếch tán trên bản mã."
        },
        {
          "id": "d",
          "text": "Mạng SPN trong AES tương tự mạng Feistel trong DES"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225019.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_30",
      "type": "choice",
      "num": "D4_30",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "AES có bao nhiêu hộp thế?",
      "options": [
        {
          "id": "a",
          "text": "10"
        },
        {
          "id": "b",
          "text": "12"
        },
        {
          "id": "c",
          "text": "8"
        },
        {
          "id": "d",
          "text": "1"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225054.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_31",
      "type": "choice",
      "num": "D4_31",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Thuật toán AES có bao nhiêu vòng lặp?",
      "options": [
        {
          "id": "a",
          "text": "8/12/16"
        },
        {
          "id": "b",
          "text": "8/10/16"
        },
        {
          "id": "c",
          "text": "10/12/14"
        },
        {
          "id": "d",
          "text": "10/12/16"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225054.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_32",
      "type": "choice",
      "num": "D4_32",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Chọn đáp án SAI về thuật toán mật mã khối Rijndael?",
      "options": [
        {
          "id": "a",
          "text": "Có tổng cộng 25 sự kết hợp về độ dài khóa với độ dài khối dữ liệu đầu vào"
        },
        {
          "id": "b",
          "text": "Độ dài khối dữ liệu chia hết cho 128"
        },
        {
          "id": "c",
          "text": "Độ dài khóa có thể thay đổi tùy chọn"
        },
        {
          "id": "d",
          "text": "Thuật toán Rijndael có thiết kế bị ảnh hưởng bởi thuật toán mã khối Square"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225054.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_33",
      "type": "choice",
      "num": "D4_33",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Kích thước khối dữ liệu đầu vào của AES là:",
      "options": [
        {
          "id": "a",
          "text": "64 bít"
        },
        {
          "id": "b",
          "text": "192 bít"
        },
        {
          "id": "c",
          "text": "128 bít"
        },
        {
          "id": "d",
          "text": "256 bít"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225126.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_34",
      "type": "choice",
      "num": "D4_34",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Khẳng định nào sau đây là SAI?\nA. Ma trận A trong hàm SubByte của AES là ma trận khả nghịch do các hàng của A là độc lập tuyến tính trong GF(2^8)\nB. Hàm SubByte ngược có công thức là x = (A^-1(y + c))^-1\nC. Thành phần nghịch đảo của x trong hàm SubBytes() tạo nên tính phi tuyến của nó.\nD. Hàm SubByte có công thức y= Ax^-1 + c của AES đảm bảo tính khuếch tán",
      "options": [
        {
          "id": "a",
          "text": "A"
        },
        {
          "id": "b",
          "text": "C"
        },
        {
          "id": "c",
          "text": "D"
        },
        {
          "id": "d",
          "text": "B"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225126.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_35",
      "type": "choice",
      "num": "D4_35",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Kích thước khóa mở rộng của AES-128 là bao nhiêu?",
      "options": [
        {
          "id": "a",
          "text": "56 từ"
        },
        {
          "id": "b",
          "text": "44 từ"
        },
        {
          "id": "c",
          "text": "32 từ"
        },
        {
          "id": "d",
          "text": "60 từ"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225126.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_36",
      "type": "choice",
      "num": "D4_36",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Chọn đáp án SAI?\nA. Mảng trạng thái của AES là các ma trận kích thước 4x4, mỗi phần tử của ma trận là một byte\nB. AES xử lí trên đơn vị cơ bản là một byte\nC. Đa thức tối giản của AES khi thực hiện phép nhân là m(x) = x^8 + x^3 + 1\nD. AES đảm bảo tính xáo trộn nhờ phép SubByte và đảm bảo tính khuếch tán nhờ ShiftRow và Mixcolumn",
      "options": [
        {
          "id": "a",
          "text": "B"
        },
        {
          "id": "b",
          "text": "D"
        },
        {
          "id": "c",
          "text": "C"
        },
        {
          "id": "d",
          "text": "A"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225153.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_37",
      "type": "choice",
      "num": "D4_37",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Kích thước khóa mở rộng của AES-192 là bao nhiêu?",
      "options": [
        {
          "id": "a",
          "text": "40 từ"
        },
        {
          "id": "b",
          "text": "52 từ"
        },
        {
          "id": "c",
          "text": "20 từ"
        },
        {
          "id": "d",
          "text": "50 từ"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225153.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_38",
      "type": "choice",
      "num": "D4_38",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "AES-256 thực hiện bao nhiêu vòng lặp?",
      "options": [
        {
          "id": "a",
          "text": "8"
        },
        {
          "id": "b",
          "text": "16"
        },
        {
          "id": "c",
          "text": "14"
        },
        {
          "id": "d",
          "text": "10"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225153.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_39",
      "type": "choice",
      "num": "D4_39",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "AES-128 thực hiện bao nhiêu vòng lặp?",
      "options": [
        {
          "id": "a",
          "text": "10"
        },
        {
          "id": "b",
          "text": "14"
        },
        {
          "id": "c",
          "text": "8"
        },
        {
          "id": "d",
          "text": "12"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225223.png",
      "needs_check": true
    },
    {
      "id": "nmmmh_d4_40",
      "type": "choice",
      "num": "D4_40",
      "chapter": 3,
      "chapter_name": "AES",
      "prompt": "Kích thước của ma trận trạng thái trong AES là",
      "options": [
        {
          "id": "a",
          "text": "Phụ thuộc kích thước khối"
        },
        {
          "id": "b",
          "text": "Phụ thuộc vào mỗi hàm Subbyte, Shiftrow hay Mixcolumn"
        },
        {
          "id": "c",
          "text": "4 x 4"
        },
        {
          "id": "d",
          "text": "Phụ thuộc kích thước khóa"
        }
      ],
      "answer": "",
      "source_set": "Đề 4",
      "source_image": "Screenshot 2026-08-30 225223.png",
      "needs_check": true
    }
  ]
};
