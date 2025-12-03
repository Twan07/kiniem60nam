import React, { useState } from 'react';
import { MemoryPost } from '../types';
import { polishMemoryContent } from '../services/geminiService';
import { Heart, Send, Sparkles, Loader2, Quote } from 'lucide-react';

interface MemoryWallProps {
  memories: MemoryPost[];
  onAddMemory: (memory: MemoryPost) => Promise<void>;
}

const MemoryWall: React.FC<MemoryWallProps> = ({ memories, onAddMemory }) => {
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formContent, setFormContent] = useState('');
  const [isPolishing, setIsPolishing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const displayMemories = memories.filter(m => m.status === 'approved');

  const handlePolish = async () => {
    if (!formContent.trim()) return;
    setIsPolishing(true);
    const polished = await polishMemoryContent(formContent);
    setFormContent(polished);
    setIsPolishing(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formContent.trim() || !formName.trim() || !formRole.trim()) return;

    setIsSubmitting(true);

    const newMemory: MemoryPost = {
      id: '', 
      authorName: formName,
      role: formRole,
      content: formContent,
      status: 'approved',
      dateSubmitted: new Date().toISOString().split('T')[0],
      likes: 0,
      imageUrl: `https://picsum.photos/seed/${Date.now()}/200/200`
    };

    try {
      await onAddMemory(newMemory);
      setFormContent('');
      setFormName('');
      setFormRole('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="text-center mb-16">
           <span className="text-primary font-bold tracking-wider uppercase text-sm bg-sky-100 px-3 py-1 rounded-full">Confession</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Góc Kỷ Niệm</h2>
          <p className="text-slate-500 text-lg">Chia sẻ những khoảnh khắc "xanh" nhất thời học sinh của bạn.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Submission Form */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-sky-100 sticky top-24 border border-sky-100">
              <h3 className="text-2xl font-black mb-6 text-slate-800 flex items-center">
                <Send className="mr-2 text-primary" size={24} /> Gửi lời nhắn
              </h3>
              
              {showSuccess ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-2xl mb-4 animate-bounce-in border border-green-100">
                  <p className="font-bold text-lg">Đã gửi thành công! 🎉</p>
                  <p className="text-sm opacity-80 mt-1">Cảm ơn bạn đã đóng góp một phần ký ức.</p>
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="mt-4 text-sm font-bold underline hover:text-green-900"
                  >
                    Viết tiếp
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Tên của bạn (hoặc nickname)</label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition font-medium text-slate-800"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="VD: Tuấn 'Còi' 12A1"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Chức danh / Niên khóa</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition font-medium text-slate-800"
                        value={formRole}
                        onChange={(e) => setFormRole(e.target.value)}
                        placeholder="VD: Cựu HS Khóa 2000-2003, GVCN Lớp A..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Lời nhắn gửi</label>
                    <div className="relative">
                      <textarea
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 h-40 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none transition text-slate-700 leading-relaxed"
                        value={formContent}
                        onChange={(e) => setFormContent(e.target.value)}
                        placeholder="Ngày ấy..."
                        required
                        disabled={isSubmitting}
                      />
                      <button
                        type="button"
                        onClick={handlePolish}
                        disabled={isPolishing || !formContent || isSubmitting}
                        className="absolute bottom-3 right-3 text-xs flex items-center bg-white shadow-sm border border-sky-100 text-primary px-3 py-1.5 rounded-full hover:bg-sky-50 transition font-bold"
                        title="Dùng AI viết hay hơn"
                      >
                         {isPolishing ? <Loader2 className="animate-spin mr-1" size={12}/> : <Sparkles className="mr-1" size={12}/>}
                         AI Magic
                       </button>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-3.5 rounded-xl hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center font-bold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <Loader2 size={24} className="animate-spin" /> : 'Đăng lên tường'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Wall of Memories */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {displayMemories.map((mem) => {
                // Subtle blue/white variations
                const randomColor = ['bg-white', 'bg-sky-50', 'bg-white', 'bg-slate-50'][Math.floor(Math.random() * 4)];
                return (
                  <div key={mem.id} className={`break-inside-avoid ${randomColor} rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-sky-100 relative group`}>
                    <Quote className="absolute top-4 right-4 text-sky-100 group-hover:text-sky-200 transition" size={48} />
                    
                    <div className="flex items-center mb-4 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-100 to-white flex items-center justify-center text-lg font-bold shadow-sm mr-3 text-primary border-2 border-white">
                        {mem.authorName.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-base leading-tight">{mem.authorName}</h4>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 opacity-70">{mem.role}</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/60 p-4 rounded-2xl mb-4 relative z-10 backdrop-blur-sm">
                      <p className="text-slate-700 leading-relaxed font-medium">"{mem.content}"</p>
                    </div>

                    <div className="flex justify-between items-center text-xs font-bold text-slate-400 relative z-10">
                      <span>{mem.dateSubmitted}</span>
                      <button className="flex items-center space-x-1 text-pink-500 hover:scale-110 transition bg-white px-2 py-1 rounded-full shadow-sm">
                        <Heart size={14} fill="currentColor" />
                        <span>{mem.likes > 0 ? mem.likes : 'Thả tim'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {displayMemories.length === 0 && (
               <div className="text-center py-24 rounded-3xl border-4 border-dashed border-sky-100 bg-white">
                 <div className="inline-block p-4 rounded-full bg-sky-50 mb-4">
                   <Sparkles className="text-primary" size={32}/>
                 </div>
                 <p className="text-slate-400 font-bold text-lg">Chưa có bài viết nào. "Mở bát" ngay thôi!</p>
               </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MemoryWall;