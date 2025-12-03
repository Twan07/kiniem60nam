
import React from 'react';
import { ViewState } from '../../types';
import { NEWS_ITEMS } from '../../constants';
import { ArrowRight, Tag, Calendar } from 'lucide-react';

interface HomeNewsSectionProps {
  onNavigate: (view: ViewState) => void;
}

const HomeNewsSection: React.FC<HomeNewsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-sky-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Cập nhật</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2">Tin Tức & Sự Kiện</h2>
          </div>
          <button 
             onClick={() => onNavigate(ViewState.NEWS)}
             className="hidden md:flex text-slate-600 font-bold items-center hover:text-primary transition bg-white px-5 py-2 rounded-full shadow-sm hover:shadow"
          >
            Xem tất cả <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEWS_ITEMS.slice(0, 2).map((news) => (
            <div 
              key={news.id} 
              onClick={() => onNavigate(ViewState.NEWS)}
              className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl hover:shadow-sky-100 transition duration-300 group cursor-pointer border border-sky-100"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 overflow-hidden rounded-2xl relative">
                   <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition z-10"></div>
                   <img src={news.imageUrl} alt={news.title} className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-sky-50 text-primary text-xs font-bold rounded-full mb-3 w-fit">{news.date}</span>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition leading-tight">{news.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2">{news.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
           onClick={() => onNavigate(ViewState.NEWS)}
           className="md:hidden w-full mt-8 text-slate-600 font-bold flex justify-center items-center hover:text-primary transition bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-200"
        >
            Xem tất cả <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default HomeNewsSection;
