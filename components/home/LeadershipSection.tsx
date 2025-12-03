
import React from 'react';

const LeadershipSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Ban Giám Hiệu 2024-2025</span>
          <h2 className="text-4xl font-black text-slate-900 mt-2">Những Người Chèo Lái</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">
            Đội ngũ lãnh đạo tâm huyết, năng động, đang kế thừa truyền thống vẻ vang và kiến tạo tương lai số cho nhà trường.
          </p>
        </div>
  
        <div className="flex flex-col items-center">
          {/* Principal */}
          <div className="mb-12 w-full flex justify-center">
              <div className="bg-white p-8 rounded-[2rem] border border-sky-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center max-w-md w-full relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-sky-300"></div>
                   <div className="w-40 h-40 mx-auto rounded-full bg-sky-100 mb-6 overflow-hidden border-4 border-white shadow-lg">
                      <img src="https://picsum.photos/seed/principal/300/300" alt="Cô Ngô Thị Hồng Thúy" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-1">Ths. Ngô Thị Hồng Thúy</h3>
                   <p className="text-primary font-bold text-sm uppercase mb-3 tracking-wide">Bí thư Chi bộ - Hiệu trưởng</p>
                   <p className="text-slate-500 text-sm leading-relaxed">Nhà quản lý năng động, quyết liệt đổi mới, đẩy mạnh chuyển đổi số và mô hình "Trường học hạnh phúc".</p>
              </div>
          </div>
  
          {/* Vice Principals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              {[
                  { name: 'Thầy Đặng Việt Hùng', role: 'Phó Hiệu trưởng', sub: 'Phó Bí thư Chi bộ' },
                  { name: 'Thầy Đào Văn Thái', role: 'Phó Hiệu trưởng', sub: 'Phụ trách chuyên môn' },
                  { name: 'Thầy Nguyễn Văn Thắng', role: 'Phó Hiệu trưởng', sub: 'Chi ủy viên' }
              ].map((teacher, idx) => (
                  <div key={idx} className="bg-sky-50 p-6 rounded-2xl border border-sky-100 text-center hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                      <div className="w-20 h-20 mx-auto rounded-full bg-white mb-4 flex items-center justify-center text-primary font-bold text-3xl border-2 border-sky-200 shadow-sm group-hover:border-primary group-hover:text-white group-hover:bg-primary transition-colors">
                          {teacher.name.split(' ').pop()?.charAt(0)}
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">{teacher.name}</h4>
                      <p className="text-primary font-medium text-sm mt-1">{teacher.role}</p>
                      {teacher.sub && <p className="text-slate-400 text-xs mt-1">{teacher.sub}</p>}
                  </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
