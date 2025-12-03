
import React from 'react';
import { ViewState } from '../../types';
import { YOUTH_ACTIVITIES } from '../../constants';
import { Trophy, Music, Cpu, Heart, Star, Zap, ArrowRight } from 'lucide-react';

interface StudentLifeSectionProps {
  onNavigate: (view: ViewState) => void;
}

const StudentLifeSection: React.FC<StudentLifeSectionProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Trophy': return <Trophy size={28} />;
      case 'Music': return <Music size={28} />;
      case 'Cpu': return <Cpu size={28} />;
      case 'Heart': return <Heart size={28} />;
      default: return <Star size={28} />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm flex items-center mb-2">
              <Zap size={16} className="mr-2 fill-current" /> Sức trẻ Tiên Du 1
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Nhịp Sống <span className="text-primary">Học Đường</span>
            </h2>
          </div>
          <div className="flex flex-col items-end md:items-end mt-4 md:mt-0">
             <p className="md:max-w-md text-right text-slate-500 font-medium mb-4">
               Nơi tài năng tỏa sáng và đam mê cất cánh. Học hết sức, chơi hết mình!
             </p>
             <button 
                onClick={() => onNavigate(ViewState.ACTIVITIES)}
                className="text-primary font-bold flex items-center bg-sky-50 px-5 py-2 rounded-full hover:bg-primary hover:text-white transition shadow-sm"
             >
                Khám phá CLB <ArrowRight size={18} className="ml-2"/>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {YOUTH_ACTIVITIES.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onNavigate(ViewState.ACTIVITIES)}
              className="relative group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-sky-100 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="text-slate-300" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
