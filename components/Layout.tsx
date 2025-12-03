
import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { Menu, X, Facebook, Mail, MapPin, Phone, Instagram, Youtube } from 'lucide-react';

interface LayoutProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, onChangeView, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Trang Chủ', value: ViewState.HOME },
    { label: 'Lịch Sử', value: ViewState.HISTORY },
    { label: 'Tin Tức', value: ViewState.NEWS },
    { label: 'Hoạt Động', value: ViewState.ACTIVITIES },
    { label: 'Góc Kỷ Niệm', value: ViewState.MEMORIES },
    { label: 'Thư Viện Ảnh', value: ViewState.GALLERY },
  ];

  const handleNavClick = (view: ViewState) => {
    onChangeView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-sky-50 overflow-x-hidden">
      {/* Header */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-sky-100 py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick(ViewState.HOME)}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-sky-300 flex items-center justify-center text-white font-extrabold text-xl mr-3 shadow-lg shadow-sky-200 group-hover:rotate-12 transition-transform duration-300">
              TD1
            </div>
            <div>
              <h1 className={`font-bold text-xl leading-none transition-colors ${scrolled ? 'text-slate-800' : 'text-slate-800 md:text-sky-900'}`}>THPT Tiên Du 1</h1>
              <span className={`text-xs font-medium tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary`}>Since 1966</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  currentView === item.value 
                    ? 'bg-primary text-white shadow-lg shadow-sky-200' 
                    : scrolled ? 'text-slate-600 hover:bg-sky-50 hover:text-primary' : 'text-slate-600 hover:bg-white/50 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Tablet Nav (truncated) */}
          <nav className="hidden md:flex xl:hidden space-x-1">
             {navItems.slice(0, 4).map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  currentView === item.value 
                    ? 'bg-primary text-white shadow-lg shadow-sky-200' 
                    : scrolled ? 'text-slate-600 hover:bg-sky-50 hover:text-primary' : 'text-slate-600 hover:bg-white/50 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-slate-800' : 'text-slate-800'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-sky-100 transition-all duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-left font-bold py-3 px-4 rounded-xl ${
                    currentView === item.value ? 'bg-sky-50 text-primary' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-sky-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                 <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold mr-2">TD1</div>
                 <h3 className="text-xl font-bold text-slate-900">Tiên Du 1</h3>
              </div>
              <p className="text-slate-500 mb-6 leading-relaxed max-w-sm">
                Gần 60 năm kiến tạo tri thức (1966 - Nay). Nơi ươm mầm cho những khát vọng xanh của tuổi trẻ Bắc Ninh bay cao, vươn xa.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Khám Phá</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><button onClick={() => onChangeView(ViewState.HISTORY)} className="hover:text-primary transition">Lịch sử truyền thống</button></li>
                <li><button onClick={() => onChangeView(ViewState.ACTIVITIES)} className="hover:text-primary transition">Hoạt động & CLB</button></li>
                <li><button onClick={() => onChangeView(ViewState.MEMORIES)} className="hover:text-primary transition">Góc Kỷ Niệm</button></li>
                <li><button onClick={() => onChangeView(ViewState.NEWS)} className="hover:text-primary transition">Tin tức</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Liên Hệ</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-primary shrink-0" />
                  <span>Xã Liên Bão, Tiên Du, Bắc Ninh</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-primary shrink-0" />
                  <span>0222 383 6048</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-primary shrink-0" />
                  <span>c3tiendu1@bacninh.edu.vn</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-sky-50 pt-8 text-center">
             <p className="text-slate-400 text-sm font-medium">
               © {new Date().getFullYear()} THPT Tiên Du 1. Made with 💙 by Alumni.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
