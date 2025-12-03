
import React from 'react';
import { YOUTH_ACTIVITIES, UNION_AWARDS, CLUBS_LIST } from '../constants';
import { Trophy, Star, Music, Zap, Globe, BookOpen, Camera, Activity, Heart, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface ActivitiesPageProps {
  onNavigate: (view: ViewState) => void;
}

const ActivitiesPage: React.FC<ActivitiesPageProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Trophy': return <Trophy size={24} />;
      case 'Music': return <Music size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'Globe': return <Globe size={24} />;
      case 'BookOpen': return <BookOpen size={24} />;
      case 'Camera': return <Camera size={24} />;
      case 'Activity': return <Activity size={24} />;
      case 'Heart': return <Heart size={24} />;
      default: return <Star size={24} />;
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white font-bold text-sm mb-4 backdrop-blur-md border border-white/30">
            Năng Động - Sáng Tạo - Hội Nhập
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Tuổi Trẻ Tiên Du 1</h1>
          <p className="text-sky-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Nơi thanh xuân rực rỡ nhất với hàng loạt hoạt động ngoại khóa, CLB và các sân chơi bổ ích. "Học hết sức - Chơi hết mình!"
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        {/* Main Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {YOUTH_ACTIVITIES.map((act) => (
             <div key={act.id} className="bg-white p-8 rounded-3xl shadow-xl shadow-sky-100 border border-sky-50 hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-14 h-14 rounded-2xl ${act.color} flex items-center justify-center mb-6`}>
                   {getIcon(act.icon)}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{act.title}</h3>
                <p className="text-slate-500 text-sm">{act.desc}</p>
             </div>
          ))}
        </div>

        {/* Clubs Section */}
        <div className="mb-24">
            <div className="text-center mb-12">
                <span className="text-primary font-bold tracking-wider uppercase text-sm">Cộng Đồng</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Các Câu Lạc Bộ (CLB)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CLUBS_LIST.map((club) => (
                    <div key={club.id} className="flex items-start p-6 rounded-2xl bg-sky-50 border border-sky-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="bg-white p-3 rounded-xl shadow-sm text-primary mr-4">
                            {getIcon(club.icon)}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-lg">{club.name}</h4>
                            <p className="text-slate-500 text-sm mb-2">{club.description}</p>
                            <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-600 text-xs font-bold rounded">
                                {club.memberCount} thành viên
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Union Awards Section */}
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Bảng Vàng <br/><span className="text-yellow-400">Đoàn Thanh Niên</span></h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Ghi nhận những thành tích xuất sắc trong công tác Đoàn và phong trào thanh niên của nhà trường qua các năm.
                    </p>
                    <button 
                        onClick={() => onNavigate(ViewState.NEWS)}
                        className="bg-primary hover:bg-sky-400 text-white px-8 py-3 rounded-full font-bold transition flex items-center"
                    >
                        Xem tin tức chi tiết <ArrowRight size={20} className="ml-2"/>
                    </button>
                </div>

                <div className="space-y-4">
                    {UNION_AWARDS.map((award, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center">
                            <div className="w-12 h-12 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center mr-4 shrink-0">
                                <Trophy size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{award.title}</h4>
                                <div className="text-slate-400 text-sm flex items-center mt-1">
                                    <span className="bg-white/10 px-2 py-0.5 rounded text-xs mr-2">{award.year}</span>
                                    <span>{award.issuer}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ActivitiesPage;
