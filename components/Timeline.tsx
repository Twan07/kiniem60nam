import React from 'react';
import { TIMELINE_DATA } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="py-20 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">1966 - Nay</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6">Hành Trình Lịch Sử</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Gần 60 năm xây dựng và trưởng thành qua 3 địa điểm: Từ những lớp học sơ tán trong kháng chiến, đến những năm tháng gian khó trên <span className="font-bold text-primary">đồi Đông Sơn</span>, và nay vươn mình mạnh mẽ tại <span className="font-bold text-primary">trung tâm Liên Bão</span>. 
            Mỗi giai đoạn là một bản hùng ca về tinh thần vượt khó và khát vọng tri thức.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line with Blue Gradient */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-200 via-primary to-sky-200 rounded-full opacity-50"></div>

          <div className="space-y-16">
            {TIMELINE_DATA.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={event.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Side */}
                  <div className="flex-1 w-full md:w-1/2 pl-12 md:pl-0 md:px-12 mb-6 md:mb-0 group">
                    <div className={`p-8 bg-white rounded-3xl shadow-sm border border-sky-100 hover:shadow-xl hover:shadow-sky-100 transition duration-500 ${!isEven ? 'md:text-right' : 'text-left'} relative overflow-hidden`}>
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition duration-300"></div>
                      
                      <span className="inline-block py-1 px-4 bg-sky-50 text-primary text-sm font-bold rounded-full mb-3 border border-sky-100">
                        Năm {event.year}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">{event.title}</h3>
                      <p className="text-slate-600 leading-relaxed font-medium">{event.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-sky-100 shadow-lg flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                  </div>

                  {/* Image Side */}
                  <div className="flex-1 w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    {event.imageUrl && (
                      <div className="overflow-hidden rounded-3xl shadow-lg rotate-1 hover:rotate-0 transition duration-500 border-4 border-white">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title} 
                          className="w-full h-56 md:h-72 object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-20 text-center">
            <p className="text-xl font-bold text-sky-300 italic">
                "Truyền thống là sức mạnh, Tương lai là khát vọng"
            </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;