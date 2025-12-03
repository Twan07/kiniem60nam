
import React, { useState } from 'react';
import { NEWS_ITEMS } from '../constants';
import { Search, Calendar, Tag, ArrowRight, X, Clock, Share2, Check } from 'lucide-react';
import { NewsItem } from '../types';

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const categories = ['All', ...Array.from(new Set(NEWS_ITEMS.map(n => n.category)))];

  const filteredNews = NEWS_ITEMS.filter(news => {
     const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase());
     const matchesCategory = filterCategory === 'All' || news.category === filterCategory;
     return matchesSearch && matchesCategory;
  });

  const handleShare = async () => {
    if (!selectedNews) return;

    // In a real app, this would be a specific URL like `domain.com/news/${selectedNews.id}`
    const shareUrl = window.location.href; 
    const shareData = {
      title: selectedNews.title,
      text: selectedNews.excerpt,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        // Use native mobile share sheet
        await navigator.share(shareData);
      } else {
        // Fallback to clipboard copy for desktop
        await navigator.clipboard.writeText(shareUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch (err) {
      console.log('User closed share dialog or error sharing');
    }
  };

  return (
    <div className="bg-sky-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Cập nhật 24/7</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Tin Tức & Sự Kiện</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
             Theo dõi các hoạt động mới nhất, thông báo quan trọng và những câu chuyện truyền cảm hứng từ mái trường Tiên Du 1.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100 mb-12 flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
           <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20}/>
              <input 
                 type="text" 
                 placeholder="Tìm kiếm tin tức..." 
                 className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map(cat => (
                 <button 
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${
                       filterCategory === cat 
                       ? 'bg-primary text-white' 
                       : 'bg-slate-50 text-slate-600 hover:bg-sky-100'
                    }`}
                 >
                    {cat}
                 </button>
              ))}
           </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredNews.map((news) => (
              <div 
                key={news.id} 
                onClick={() => setSelectedNews(news)}
                className="bg-white rounded-[2rem] overflow-hidden border border-sky-50 shadow-sm hover:shadow-xl hover:shadow-sky-100 transition-all duration-300 group cursor-pointer flex flex-col h-full hover:-translate-y-1"
              >
                 <div className="h-56 overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-sm">
                       <Tag size={12} className="mr-1 text-primary"/> {news.category}
                    </div>
                    <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                 </div>
                 
                 <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-slate-400 text-xs font-bold mb-4">
                       <Calendar size={14} className="mr-1"/> {news.date}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition leading-tight">
                       {news.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                       {news.excerpt}
                    </p>
                    <div className="mt-auto">
                       <span className="text-primary font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                          Đọc tiếp <ArrowRight size={16} className="ml-1"/>
                       </span>
                    </div>
                 </div>
              </div>
           ))}
        </div>

        {filteredNews.length === 0 && (
           <div className="text-center py-20">
              <p className="text-slate-400 font-bold text-lg">Không tìm thấy tin tức nào phù hợp.</p>
           </div>
        )}
      </div>

      {/* Article Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
           <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedNews(null)}></div>
           <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 animate-blob">
              <button 
                 onClick={() => setSelectedNews(null)}
                 className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-md rounded-full text-slate-800 hover:bg-white hover:text-red-500 transition z-20"
              >
                 <X size={24} />
              </button>

              <div className="relative h-64 md:h-96">
                 <img src={selectedNews.imageUrl} alt={selectedNews.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                 <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                    <div className="flex items-center space-x-4 text-white/80 text-sm font-bold mb-4">
                       <span className="flex items-center"><Calendar size={14} className="mr-1"/> {selectedNews.date}</span>
                       <span className="flex items-center bg-white/20 px-2 py-1 rounded text-white"><Tag size={12} className="mr-1"/> {selectedNews.category}</span>
                       <span className="flex items-center"><Clock size={14} className="mr-1"/> 5 phút đọc</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">{selectedNews.title}</h2>
                 </div>
              </div>

              <div className="p-8 md:p-12">
                 <div className="prose prose-lg prose-slate max-w-none">
                    <p className="font-bold text-xl text-slate-800 mb-6">{selectedNews.excerpt}</p>
                    
                    {/* Simulated Full Content */}
                    <p>
                       Hòa chung không khí tưng bừng phấn khởi của cả nước, trường THPT Tiên Du số 1 đã tổ chức long trọng chuỗi hoạt động ý nghĩa. Đây là dịp để thầy và trò cùng nhau ôn lại truyền thống vẻ vang, đồng thời khẳng định quyết tâm thi đua dạy tốt - học tốt trong giai đoạn mới.
                    </p>
                    <p>
                       Tại buổi lễ, đại diện Ban Giám hiệu nhà trường, cô Ngô Thị Hồng Thúy - Bí thư Chi bộ, Hiệu trưởng nhà trường đã có bài phát biểu xúc động, ghi nhận những nỗ lực không ngừng nghỉ của tập thể cán bộ giáo viên và học sinh.
                    </p>
                    <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-slate-600">
                       "Chúng ta không chỉ dạy kiến thức, mà còn dạy các em làm người, dạy các em biết ước mơ và khát vọng. Mỗi học sinh Tiên Du 1 hãy là một đại sứ mang hình ảnh đẹp của nhà trường đi khắp mọi miền tổ quốc."
                    </blockquote>
                    <p>
                       Cũng trong khuôn khổ chương trình, nhiều hoạt động văn nghệ, thể thao sôi nổi đã diễn ra, thu hút sự tham gia nhiệt tình của các chi đoàn. Không khí lễ hội tràn ngập khắp sân trường, để lại những kỷ niệm khó quên trong lòng mỗi học sinh.
                    </p>
                    <p>
                       Kết thúc chương trình là phần vinh danh các cá nhân, tập thể có thành tích xuất sắc. Đây là nguồn động viên to lớn, khích lệ tinh thần phấn đấu vươn lên của toàn trường.
                    </p>
                 </div>

                 <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                    <p className="text-slate-400 font-medium">Tác giả: <span className="text-slate-700 font-bold">Ban Truyền Thông TD1</span></p>
                    <button 
                      onClick={handleShare}
                      className={`flex items-center space-x-2 font-bold px-4 py-2 rounded-full transition ${
                        isCopied 
                        ? 'bg-green-100 text-green-600' 
                        : 'text-primary hover:bg-sky-50'
                      }`}
                    >
                       {isCopied ? <Check size={18} /> : <Share2 size={18} />}
                       <span>{isCopied ? 'Đã sao chép link' : 'Chia sẻ'}</span>
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;
