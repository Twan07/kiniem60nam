
import { TimelineEvent, MemoryPost, GalleryItem, NewsItem, ClubItem } from './types';

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: '1',
    year: 1966,
    title: 'Thành lập & Những năm tháng sơ tán',
    description: 'Ngày 05/05/1966, Trường cấp III Tiên Du (nay là THPT Tiên Du số 1) được thành lập theo Quyết định 772/QĐ-UBHC. Hiệu trưởng đầu tiên là thầy Nguyễn Đình Chúc. Trong khói lửa chiến tranh, trường phải sơ tán tại các thôn Bái Uyên, Hoài Thượng (xã Liên Bão). Thầy trò vừa đào hào đắp lũy, vừa thi đua "Dạy tốt - Học tốt".',
    imageUrl: 'https://picsum.photos/seed/1966history/400/300'
  },
  {
    id: '2',
    year: 1973,
    title: 'Dấu ấn "Đất học Đông Sơn"',
    description: 'Tháng 9/1973, trường chuyển địa điểm về đồi Đông Sơn (xã Việt Đoàn). Đây là giai đoạn gian khó với nhà tranh vách đất nhưng đầy hào hùng. Tại vùng đất thiêng từng là nơi dạy học của danh nhân Vũ Mộng Nguyên, truyền thống hiếu học của nhà trường càng được bồi đắp mạnh mẽ.',
    imageUrl: 'https://picsum.photos/seed/dongson1973/400/300'
  },
  {
    id: '3',
    year: 1993,
    title: 'Vươn mình tại vị thế mới',
    description: 'Tháng 9/1993, trường chuyển về địa điểm hiện tại (trung tâm xã Liên Bão, khu vực Núi Chè). Cơ sở vật chất bắt đầu được kiên cố hóa với các dãy nhà cao tầng, mở ra kỷ nguyên phát triển ổn định và bứt phá về chất lượng đào tạo.',
    imageUrl: 'https://picsum.photos/seed/1993move/400/300'
  },
  {
    id: '4',
    year: 2005,
    title: 'Đỉnh cao & Huân chương Hạng Nhất',
    description: 'Giai đoạn rực rỡ nhất về thành tích mũi nhọn. Năm 2005, nhà trường vinh dự đón nhận Huân chương Lao động hạng Nhất. Liên tiếp các năm 2004, 2005, 2006, trường có Thủ khoa, Á khoa toàn quốc (30/30 điểm), khẳng định thương hiệu top đầu cả nước.',
    imageUrl: 'https://picsum.photos/seed/medal2005/400/300'
  },
  {
    id: '5',
    year: 2024,
    title: 'Hội nhập & Chuyển đổi số',
    description: 'Hướng tới kỷ niệm 60 năm thành lập (2026), nhà trường dưới sự dẫn dắt của cô Hiệu trưởng Ngô Thị Hồng Thúy đang mạnh mẽ đổi mới phương pháp, xây dựng "Trường học hạnh phúc", tiên phong trong chuyển đổi số và hội nhập quốc tế.',
    imageUrl: 'https://picsum.photos/seed/digital2024/400/300'
  }
];

export const INITIAL_MEMORIES: MemoryPost[] = [
  {
    id: 'm1',
    authorName: 'Hồ Nghĩa Dũng',
    role: 'Cựu HS - Nguyên Bộ trưởng Bộ GTVT',
    content: 'Tự hào là một phần của lịch sử nhà trường. Những bài học làm người từ mái trường Tiên Du 1 là hành trang quý giá theo tôi suốt cuộc đời.',
    status: 'approved',
    dateSubmitted: '2023-11-20',
    likes: 1250,
    imageUrl: 'https://picsum.photos/seed/honghiadung/200/200'
  },
  {
    id: 'm2',
    authorName: 'Đỗ Đình Thắng',
    role: 'Thủ khoa Toàn quốc 2004 (30/30)',
    content: 'Nhớ mãi mùa thi năm ấy và sự tận tụy của các thầy cô. Tiên Du 1 không chỉ dạy kiến thức mà còn rèn giũa ý chí vươn lên đỉnh cao.',
    status: 'approved',
    dateSubmitted: '2024-01-15',
    likes: 890,
    imageUrl: 'https://picsum.photos/seed/thukhoa/200/200'
  },
  {
    id: 'm3',
    authorName: 'Cô Nguyễn Thị Lan',
    role: 'Cựu Giáo viên',
    content: 'Những năm tháng ở đồi Đông Sơn thật gian khó nhưng tình thầy trò thì sáng mãi. Nhớ những buổi lao động trồng cây, những đêm văn nghệ dưới ánh đèn dầu.',
    status: 'approved',
    dateSubmitted: '2023-12-05',
    likes: 450
  }
];

export const YOUTH_ACTIVITIES = [
  {
    id: 'act1',
    title: 'Giải Bóng đá Học sinh',
    desc: 'Sân chơi cuồng nhiệt nhất trong năm, nơi tinh thần đồng đội thăng hoa.',
    icon: 'Trophy',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: 'act2',
    title: 'Văn nghệ 20/11',
    desc: 'Bữa tiệc âm nhạc & ánh sáng, nơi tài năng nghệ thuật của TD1 tỏa sáng.',
    icon: 'Music',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    id: 'act3',
    title: 'CLB STEM & Robotics',
    desc: 'Khơi nguồn sáng tạo công nghệ, bắt kịp xu hướng 4.0.',
    icon: 'Cpu',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'act4',
    title: 'Tiếp sức mùa thi',
    desc: 'Màu áo xanh tình nguyện, nhiệt huyết cống hiến vì cộng đồng.',
    icon: 'Heart',
    color: 'bg-green-100 text-green-600'
  }
];

export const CLUBS_LIST: ClubItem[] = [
  { id: 'c1', name: 'CLB Phản Biện Trẻ', description: 'Nơi rèn luyện tư duy logic và khả năng hùng biện sắc bén.', icon: 'Zap', memberCount: 45 },
  { id: 'c2', name: 'CLB Tiếng Anh (TEC)', description: 'Môi trường giao tiếp quốc tế năng động, tự tin.', icon: 'Globe', memberCount: 60 },
  { id: 'c3', name: 'CLB Guitar & Music', description: 'Giai điệu thanh xuân, kết nối đam mê âm nhạc.', icon: 'Music', memberCount: 35 },
  { id: 'c4', name: 'CLB Sách & Hành Động', description: 'Lan tỏa văn hóa đọc và các dự án xã hội.', icon: 'BookOpen', memberCount: 50 },
  { id: 'c5', name: 'CLB Nhiếp Ảnh (Photography)', description: 'Lưu giữ những khoảnh khắc đẹp nhất của tuổi học trò.', icon: 'Camera', memberCount: 25 },
  { id: 'c6', name: 'CLB Bóng Rổ', description: 'Rèn luyện sức khỏe, kỹ thuật và tinh thần đồng đội.', icon: 'Activity', memberCount: 40 },
];

export const UNION_AWARDS = [
  { title: 'Cờ thi đua xuất sắc', issuer: 'Trung ương Đoàn', year: 'Nhiều năm liền' },
  { title: 'Bằng khen Đơn vị Vững mạnh', issuer: 'Tỉnh Đoàn Bắc Ninh', year: '2020 - 2024' },
  { title: 'Giải Nhất Hội thi Giai điệu Tuổi hồng', issuer: 'Sở GD&ĐT', year: '2023' },
  { title: 'Lá cờ đầu Công tác Đoàn', issuer: 'Huyện Đoàn Tiên Du', year: '2024' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', url: 'https://picsum.photos/seed/1966old/600/400', category: '1960-1990', description: 'Lớp học sơ tán thời chiến' },
  { id: 'g2', url: 'https://picsum.photos/seed/dongson/600/400', category: '1960-1990', description: 'Ký ức đồi Đông Sơn' },
  { id: 'g3', url: 'https://picsum.photos/seed/hcld1/600/400', category: '1990-2010', description: 'Đón nhận Huân chương LĐ Hạng Nhất (2005)' },
  { id: 'g4', url: 'https://picsum.photos/seed/thukhoa2006/600/400', category: '1990-2010', description: 'Gặp mặt các Thủ khoa Đại học' },
  { id: 'g5', url: 'https://picsum.photos/seed/modern1/600/400', category: '2010-Nay', description: 'Lễ khai giảng năm học mới' },
  { id: 'g6', url: 'https://picsum.photos/seed/stemday/600/400', category: '2010-Nay', description: 'Hoạt động trải nghiệm STEM & Robotics' },
  { id: 'g7', url: 'https://picsum.photos/seed/bongda/600/400', category: '2010-Nay', description: 'Giải bóng đá Nam học sinh' },
  { id: 'g8', url: 'https://picsum.photos/seed/vannghe/600/400', category: '2010-Nay', description: 'Hội diễn văn nghệ chào mừng 20/11' },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Đại hội Đại biểu Đoàn TNCS Hồ Chí Minh nhiệm kỳ 2024-2025',
    date: '15/10/2024',
    category: 'Hoạt động Đoàn',
    excerpt: 'Tuổi trẻ Tiên Du 1 xung kích, sáng tạo, quyết tâm thực hiện thắng lợi nhiệm vụ năm học, lập thành tích chào mừng các ngày lễ lớn.',
    imageUrl: 'https://picsum.photos/seed/doantruong/400/200'
  },
  {
    id: 'n2',
    title: 'Hội nghị Cán bộ, Viên chức, Người lao động năm học 2024-2025',
    date: '30/09/2024',
    category: 'Sự kiện nhà trường',
    excerpt: 'Nhà trường thống nhất các chỉ tiêu phấn đấu, tiếp tục giữ vững danh hiệu Tập thể lao động xuất sắc và nâng cao chất lượng giáo dục mũi nhọn.',
    imageUrl: 'https://picsum.photos/seed/hoinghi/400/200'
  },
  {
    id: 'n3',
    title: 'Lễ Kỷ niệm 42 năm ngày Nhà giáo Việt Nam 20/11',
    date: '20/11/2024',
    category: 'Sự kiện',
    excerpt: 'Tri ân các thế hệ thầy cô giáo, những người lái đò thầm lặng đưa bao thế hệ học sinh cập bến tri thức.',
    imageUrl: 'https://picsum.photos/seed/2011celebration/400/200'
  },
  {
    id: 'n4',
    title: 'Thông báo Tuyển sinh vào lớp 10 năm học 2025-2026',
    date: '05/05/2025',
    category: 'Tuyển sinh',
    excerpt: 'Nhà trường công bố chỉ tiêu tuyển sinh và hướng dẫn nộp hồ sơ trực tuyến cho các em học sinh lớp 9.',
    imageUrl: 'https://picsum.photos/seed/tuyensinh/400/200'
  },
  {
    id: 'n5',
    title: 'Chung kết Cuộc thi "Đường lên đỉnh Olympia" cấp trường',
    date: '26/03/2025',
    category: 'Học tập',
    excerpt: 'Cuộc tranh tài gay cấn giữa 4 nhà leo núi xuất sắc nhất để tìm ra gương mặt đại diện tham dự cấp Tỉnh.',
    imageUrl: 'https://picsum.photos/seed/olympia/400/200'
  }
];
