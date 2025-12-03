
import React from 'react';
import { Cloud, Sparkles } from 'lucide-react';
import { ViewState } from '../../types';

interface HeroSectionProps {
  onNavigate: (view: ViewState) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Abstract Blobs Background - Blue/Sky/Cyan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-sky-100 shadow-sm mb-6 animate-float">
           <Cloud size={16} className="text-primary mr-2" />
           <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-sky-600">Từ 1966: Sơ Tán - Đông Sơn - Liên Bão</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight text-slate-900">
          Tiên Du Số 1 <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-sky-400 to-blue-500">
            Sự Lựa Chọn Số 1
          </span>
        </h1>
        
        <p className="max-w-xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
           Gần 60 năm thắp sáng ngọn lửa tri thức vùng đất học Kinh Bắc. Tự hào truyền thống - Vững bước tương lai.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => onNavigate(ViewState.HISTORY)}
            className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-sky-100 shadow-sm"
          >
            Hành trình lịch sử
          </button>
          <button 
            onClick={() => onNavigate(ViewState.MEMORIES)}
            className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:shadow-lg hover:shadow-sky-400/30 hover:-translate-y-1 transition duration-300 flex items-center justify-center"
          >
            <Sparkles size={20} className="mr-2" />
            Gửi Kỷ Niệm
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
