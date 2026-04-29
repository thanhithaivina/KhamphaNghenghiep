export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "Bác sĩ ngày nay không chỉ khám bệnh trực tiếp mà còn khám qua video call, theo dõi nhịp tim bệnh nhân qua smartwatch. Nghề này được gọi là gì?",
    options: [
      "Bác sĩ tư vấn từ xa (Telemedicine)",
      "Bác sĩ phẫu thuật",
      "Bác sĩ tâm lý",
      "Trình dược viên"
    ],
    correctAnswerIndex: 0,
    explanation: "CNTT giúp bác sĩ chẩn đoán và điều trị cho bệnh nhân ở bất cứ đâu thông qua internet và các thiết bị đeo thông minh, xóa bỏ khoảng cách địa lý."
  },
  {
    id: 2,
    question: "Thay vì cầm cuốc ra đồng, người nông dân hiện đại sử dụng điện thoại để điều khiển drone phun thuốc sâu và hệ thống tưới tự động. Họ được gọi là gì?",
    options: [
      "Kỹ sư nông nghiệp thông minh",
      "Thợ máy nông nghiệp",
      "Kỹ sư sinh học",
      "Chuyên gia khí tượng"
    ],
    correctAnswerIndex: 0,
    explanation: "Nông nghiệp công nghệ cao ứng dụng IoT (Internet vạn vật) và Drone giúp tăng năng suất, giảm sức lao động và bảo vệ môi trường."
  },
  {
    id: 3,
    question: "Nghề nào sau đây chuyên sử dụng Facebook, Google, TikTok để quảng bá sản phẩm thay vì phát tờ rơi ngoài ngã tư?",
    options: [
      "Chuyên gia Marketing Online",
      "Nhân viên bán hàng siêu thị",
      "Chuyên gia tổ chức sự kiện",
      "Nhà thiết kế đồ họa"
    ],
    correctAnswerIndex: 0,
    explanation: "Digital Marketing sử dụng sức mạnh của internet và mạng xã hội để tiếp cận hàng triệu khách hàng mục tiêu một cách nhanh chóng và chính xác."
  },
  {
    id: 4,
    question: "Người thiết kế các bài học tương tác trên máy tính, tạo ra các trò chơi học tập giúp học sinh học online không bị nhàm chán là ai?",
    options: [
      "Nhà thiết kế bài giảng E-learning",
      "Giáo viên chủ nhiệm",
      "Giám thị",
      "Thủ thư"
    ],
    correctAnswerIndex: 0,
    explanation: "Giáo dục số hóa cần những chuyên gia kết hợp giữa sư phạm và công nghệ để tạo ra trải nghiệm học tập mới mẻ, sinh động."
  },
  {
    id: 5,
    question: "Mỗi ngày có hàng tỷ thông tin được tạo ra trên mạng. Ai là người thu thập, phân tích những con số khô khan này để giúp công ty đưa ra quyết định kinh doanh?",
    options: [
      "Chuyên gia phân tích dữ liệu (Data Analyst)",
      "Kế toán viên",
      "Nhân viên thu ngân",
      "Chuyên gia nhân sự"
    ],
    correctAnswerIndex: 0,
    explanation: "Dữ liệu được coi là 'dầu mỏ' của thế kỷ 21. Phân tích dữ liệu giúp tìm ra xu hướng, hiểu khách hàng và dự đoán tương lai."
  },
  {
    id: 6,
    question: "Khi các ngân hàng, bệnh viện lưu trữ thông tin trên máy tính, họ rất sợ bị hacker đánh cắp. Ai là người bảo vệ những hệ thống này?",
    options: [
      "Chuyên gia an ninh mạng (Cybersecurity)",
      "Cảnh sát hình sự",
      "Bảo vệ tòa nhà",
      "Thợ sửa máy tính"
    ],
    correctAnswerIndex: 0,
    explanation: "An ninh mạng là tấm khiên bảo vệ tài sản số, thông tin cá nhân và bí mật quốc gia trên không gian mạng đầy rẫy rủi ro."
  },
  {
    id: 7,
    question: "Khách hàng muốn xem trước ngôi nhà tương lai của mình trông như thế nào khi chưa xây dựng. Kiến trúc sư sẽ dùng công nghệ gì để cho khách hàng 'đi dạo' trong ngôi nhà đó?",
    options: [
      "Thực tế ảo (VR) và Thực tế tăng cường (AR)",
      "Bản vẽ trên giấy",
      "Mô hình bằng gỗ",
      "Chụp ảnh bằng Flycam"
    ],
    correctAnswerIndex: 0,
    explanation: "VR/AR giúp mô phỏng không gian 3D chân thực, ứng dụng mạnh mẽ trong kiến trúc, bất động sản, y tế và giải trí."
  },
  {
    id: 8,
    question: "Một nhà báo ngày nay không chỉ viết chữ mà còn biết quay video, làm podcast, thiết kế infographic. Họ được gọi là gì?",
    options: [
      "Phóng viên đa phương tiện / Sáng tạo nội dung số",
      "Thợ chụp ảnh dạo",
      "Người giao báo",
      "Phát thanh viên đài tiếng nói"
    ],
    correctAnswerIndex: 0,
    explanation: "Báo chí hiện đại đòi hỏi kỹ năng số hóa để truyền tải thông tin đa chiều, sinh động qua nhiều nền tảng số khác nhau."
  },
  {
    id: 9,
    question: "Ai là người 'dạy' cho máy tính biết nhận diện khuôn mặt, biết dịch ngôn ngữ và thậm chí là biết chơi cờ tướng thắng con người?",
    options: [
      "Lập trình viên Trí tuệ nhân tạo (AI Developer)",
      "Giáo viên tin học",
      "Kỹ sư cơ khí",
      "Thợ lắp ráp máy tính"
    ],
    correctAnswerIndex: 0,
    explanation: "AI đang thay đổi thế giới. Các kỹ sư AI tạo ra những thuật toán giúp máy móc có khả năng học hỏi, suy luận và tự ra quyết định."
  },
  {
    id: 10,
    question: "Thay vì dùng sổ sách dày cộp hay bàn tính, kế toán viên ngày nay quản lý hàng triệu giao dịch qua các phần mềm trên mạng. Đó là ứng dụng của công nghệ gì?",
    options: [
      "Điện toán đám mây (Cloud Computing)",
      "Trí tuệ nhân tạo",
      "In 3D",
      "Thực tế ảo"
    ],
    correctAnswerIndex: 0,
    explanation: "Điện toán đám mây giúp lưu trữ và xử lý dữ liệu khổng lồ một cách an toàn, tiết kiệm chi phí và có thể truy cập từ mọi nơi."
  },
  {
    id: 11,
    question: "Trong thời kỳ đại dịch, mọi người không thể đi du lịch. Nghề nào đã giúp du khách tham quan bảo tàng Louvre (Pháp) ngay tại phòng ngủ của mình?",
    options: [
      "Người tạo tour du lịch ảo (Virtual Tour Creator)",
      "Hướng dẫn viên du lịch quốc tế",
      "Phi công",
      "Lễ tân khách sạn"
    ],
    correctAnswerIndex: 0,
    explanation: "Công nghệ ảnh 360 độ và VR giúp số hóa các địa danh, mang lại trải nghiệm du lịch không giới hạn không gian và thời gian."
  },
  {
    id: 12,
    question: "Công việc hàng ngày của nghề này là lên kế hoạch đăng bài, trả lời bình luận, và phân tích lượt 'Like', 'Share' trên Facebook, TikTok cho các thương hiệu. Đó là nghề gì?",
    options: [
      "Chuyên gia quản lý mạng xã hội (Social Media Manager)",
      "Chuyên gia tâm lý học",
      "Nhà văn",
      "Thư ký văn phòng"
    ],
    correctAnswerIndex: 0,
    explanation: "Mạng xã hội là kênh giao tiếp chính của doanh nghiệp hiện đại, đòi hỏi chuyên gia am hiểu thuật toán nền tảng và tâm lý người dùng mạng."
  },
  {
    id: 13,
    question: "Trong các nhà máy sản xuất ô tô hiện đại, thay vì tự tay lắp ráp từng con ốc, công nhân sẽ làm nhiệm vụ gì?",
    options: [
      "Kỹ sư lập trình và vận hành robot tự động",
      "Thợ rèn",
      "Nhân viên vệ sinh nhà máy",
      "Tài xế lái xe tải"
    ],
    correctAnswerIndex: 0,
    explanation: "Tự động hóa và Robot đang thay thế lao động chân tay nặng nhọc, con người chuyển sang vai trò điều khiển và bảo trì máy móc thông minh."
  },
  {
    id: 14,
    question: "Chơi game không chỉ là giải trí mà đã trở thành một nghề hái ra tiền, có huấn luyện viên, có giải đấu quốc tế. Nghề này gọi là gì?",
    options: [
      "Tuyển thủ Thể thao điện tử (Esports Player)",
      "Lập trình viên game",
      "Người bán máy tính",
      "Bình luận viên bóng đá"
    ],
    correctAnswerIndex: 0,
    explanation: "Esports là ngành công nghiệp tỷ đô, minh chứng rõ nét cho việc môi trường kỹ thuật số có thể tạo ra những môn thể thao và nghề nghiệp hoàn toàn mới."
  },
  {
    id: 15,
    question: "Để giảm kẹt xe, các thành phố lớn dùng camera thông minh và AI để tự động điều chỉnh đèn đỏ. Ai là người thiết kế hệ thống này?",
    options: [
      "Chuyên gia phân tích hệ thống giao thông thông minh",
      "Cảnh sát giao thông",
      "Thợ sửa xe máy",
      "Kỹ sư xây cầu đường"
    ],
    correctAnswerIndex: 0,
    explanation: "Giao thông thông minh (Smart Traffic) dùng dữ liệu thời gian thực để tối ưu hóa luồng phương tiện, giảm ùn tắc và tai nạn."
  },
  {
    id: 16,
    question: "Công nghệ nào đứng sau các ứng dụng chuyển tiền nhanh, ví điện tử (Momo, ZaloPay) giúp chúng ta không cần mang theo tiền mặt?",
    options: [
      "Công nghệ tài chính (Fintech)",
      "Thương mại điện tử",
      "Công nghệ sinh học",
      "Công nghệ nano"
    ],
    correctAnswerIndex: 0,
    explanation: "Fintech kết hợp giữa tài chính và công nghệ, mang lại sự tiện lợi, nhanh chóng, minh bạch và an toàn cho các giao dịch tiền tệ."
  },
  {
    id: 17,
    question: "Thay vì may thử hàng chục bộ quần áo bằng vải thật gây lãng phí, các nhà thiết kế hiện đại làm gì trước khi sản xuất hàng loạt?",
    options: [
      "Thiết kế thời trang 3D trên phần mềm máy tính",
      "Vẽ tay trên giấy nháp",
      "Mặc thử lên ma-nơ-canh",
      "Hỏi ý kiến khách hàng qua điện thoại"
    ],
    correctAnswerIndex: 0,
    explanation: "Thiết kế 3D giúp mô phỏng chính xác chất liệu, độ rủ của vải, tiết kiệm chi phí, thời gian và bảo vệ môi trường."
  },
  {
    id: 18,
    question: "Công nghệ nào nổi tiếng với tính minh bạch, không thể làm giả, được ứng dụng để truy xuất nguồn gốc nông sản (quét mã QR biết con lợn được nuôi ở đâu)?",
    options: [
      "Blockchain (Chuỗi khối)",
      "Trí tuệ nhân tạo (AI)",
      "Điện toán đám mây",
      "Mạng 5G"
    ],
    correctAnswerIndex: 0,
    explanation: "Blockchain lưu trữ thông tin thành các khối liên kết chặt chẽ, không thể sửa đổi, giúp minh bạch hóa thông tin trong nhiều lĩnh vực như tài chính, y tế, chuỗi cung ứng."
  },
  {
    id: 19,
    question: "Nghề nào sử dụng các phần mềm chuyên dụng để quản lý hồ sơ nhân viên, tự động tính lương và đánh giá hiệu suất làm việc thay vì dùng sổ sách?",
    options: [
      "Chuyên gia Quản trị Nhân sự số (HR Tech)",
      "Giám đốc công ty",
      "Kế toán trưởng",
      "Thư ký"
    ],
    correctAnswerIndex: 0,
    explanation: "Chuyển đổi số trong nhân sự giúp tự động hóa các quy trình thủ công, để chuyên gia nhân sự tập trung vào việc phát triển văn hóa và con người."
  },
  {
    id: 20,
    question: "Trong các kho hàng khổng lồ của Amazon hay Shopee, ai là người tính toán đường đi ngắn nhất cho các robot lấy hàng để giao cho khách nhanh nhất?",
    options: [
      "Kỹ sư tối ưu hóa chuỗi cung ứng và Logistics",
      "Nhân viên giao hàng (Shipper)",
      "Thủ kho",
      "Bảo vệ kho hàng"
    ],
    correctAnswerIndex: 0,
    explanation: "Logistics hiện đại là một bài toán phức tạp về dữ liệu và thuật toán, giúp hàng hóa lưu thông toàn cầu với tốc độ chóng mặt và chi phí tối ưu."
  }
];

// Shuffle options for each question to make it random
export const getShuffledQuestions = () => {
  return questions.map(q => {
    const optionsWithIndex = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.correctAnswerIndex }));
    // Fisher-Yates shuffle
    for (let i = optionsWithIndex.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
    }
    return {
      ...q,
      shuffledOptions: optionsWithIndex
    };
  });
};
