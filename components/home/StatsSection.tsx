
import React from 'react';
import { Award, Users, Medal } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div className="p-8 rounded-3xl bg-white border border-sky-50 shadow-sm text-sky-900 transition hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100 duration-300">
              <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                 <Award size={32} />
              </div>
              <h3 className="text-4xl font-black mb-2 text-slate-800">59 Năm</h3>
              <p className="font-medium text-slate-500">Xây dựng & Trưởng thành</p>
           </div>
           <div className="p-8 rounded-3xl bg-white border border-sky-50 shadow-sm text-sky-900 transition hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100 duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500">
                 <Users size={32} />
              </div>
              <h3 className="text-4xl font-black mb-2 text-slate-800">100%</h3>
              <p className="font-medium text-slate-500">Tỷ lệ tốt nghiệp hàng năm</p>
           </div>
           <div className="p-8 rounded-3xl bg-white border border-sky-50 shadow-sm text-sky-900 transition hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100 duration-300">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-500">
                 <Medal size={32} />
              </div>
              <h3 className="text-4xl font-black mb-2 text-slate-800">Top 100</h3>
              <p className="font-medium text-slate-500">Trường điểm thi ĐH cao nhất</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
