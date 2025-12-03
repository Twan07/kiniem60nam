
import React from 'react';
import { UNION_AWARDS } from '../../constants';
import { Medal, Award, Star, ArrowRight } from 'lucide-react';
import { ViewState } from '../../types';

interface AchievementsSectionProps {
  onNavigate: (view: ViewState) => void;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
         
         <div className="container mx-auto px-4 relative z-10">
             <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-slate-700 pb-8">
                 <div>
                    <span className="text-sky-400 font-bold tracking-wider uppercase text-sm flex items-center"><Medal size={16} className="mr-2"/> Bảng Vàng</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Thủ Khoa & Thành Tích</h2>
                 </div>
                 <div className="mt-6 md:mt-0 text-right">
                     <p className="text-3xl font-black text-sky-400">Top 100</p>
                     <p className="text-slate-400 font-medium">Trường THPT có điểm thi ĐH<br/>cao nhất cả nước</p>
                 </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                 {/* Học tập */}
                 <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { year: 2004, name: 'Đỗ Đình Thắng', desc: 'Thủ khoa toàn quốc', score: '30/30' },
                        { year: 2005, name: '03 Á khoa', desc: 'Á khoa toàn quốc', score: '29.5' },
                        { year: 2006, name: 'Nguyễn Ngọc Duy', desc: 'Thủ khoa toàn quốc', score: '30/30' },
                        { year: 2015, name: 'Nguyễn Đức Giảng', desc: 'Thủ khoa Tỉnh khối B', score: 'Top 1' },
                        { year: 2019, name: 'Tạ Thị Mai', desc: 'Thủ khoa Khối D', score: '27.5' },
                        { year: 2020, name: 'Nguyễn Xuân Toàn', desc: 'Thủ khoa Tỉnh khối A', score: '29.55' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-sky-500 hover:bg-slate-800 transition-all duration-300 group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full text-xs font-bold border border-sky-500/30">Năm {item.year}</span>
                                <Award className="text-slate-600 group-hover:text-yellow-400 transition" size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-white text-slate-200">{item.name}</h3>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                                <span className="font-bold text-yellow-400 text-lg">{item.score}</span>
                            </div>
                        </div>
                    ))}
                 </div>

                 {/* Phong trào Đoàn */}
                 <div className="bg-gradient-to-b from-blue-900/50 to-slate-900 border border-blue-800/50 rounded-3xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                          <Star className="text-yellow-400 mr-2 fill-current" /> Danh hiệu Đoàn Thể
                        </h3>
                        <div className="space-y-4">
                          {UNION_AWARDS.map((award, idx) => (
                            <div key={idx} className="flex items-center p-3 rounded-xl bg-slate-800/50 border border-slate-700">
                              <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 mr-4 shrink-0">
                                <Award size={20} />
                              </div>
                              <div>
                                <h4 className="font-bold text-white text-sm">{award.title}</h4>
                                <p className="text-slate-400 text-xs mt-0.5">{award.issuer} • {award.year}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => onNavigate(ViewState.ACTIVITIES)}
                        className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition flex items-center justify-center border border-white/10"
                    >
                        Xem hoạt động <ArrowRight size={18} className="ml-2" />
                    </button>
                 </div>
             </div>
             
             <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-sky-900/50 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                 <div className="mb-6 md:mb-0 relative z-10">
                     <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">Huân Chương Lao Động Hạng Nhất</h3>
                     <p className="text-sky-100 max-w-2xl text-lg">Phần thưởng cao quý của Đảng và Nhà nước trao tặng năm 2005, ghi nhận những đóng góp to lớn của nhà trường cho sự nghiệp giáo dục.</p>
                 </div>
                 <div className="flex-shrink-0 relative z-10">
                     <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                         <span className="text-4xl font-black text-yellow-300 drop-shadow-md">1st</span>
                     </div>
                 </div>
             </div>
         </div>
    </section>
  );
};

export default AchievementsSection;
