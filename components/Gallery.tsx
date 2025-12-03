
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  const categories = ['All', '1960-1990', '1990-2010', '2010-Nay'];
  
  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Thư Viện Ảnh</h2>
          <p className="text-slate-500 font-medium">Lưu giữ khoảnh khắc, đóng băng thời gian.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${
                filter === cat 
                  ? 'bg-primary text-white transform scale-105 shadow-lg shadow-sky-200' 
                  : 'bg-sky-50 text-slate-600 hover:bg-sky-100 hover:text-primary hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                <img 
                  src={item.url} 
                  alt={item.description} 
                  className="object-cover w-full h-full transform transition duration-700 group-hover:scale-110 filter brightness-100 group-hover:brightness-90"
                  style={{ minHeight: '300px' }}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
                <span className="inline-block px-2 py-1 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded w-fit mb-2">
                  {item.category}
                </span>
                <p className="text-white font-bold text-lg leading-tight flex items-center justify-between">
                   {item.description}
                   <ZoomIn size={20} className="text-sky-200" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Image Viewer */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[70] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          <button 
            className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition hidden md:block"
            onClick={handlePrev}
          >
            <ChevronLeft size={40} />
          </button>

          <div 
            className="max-w-5xl max-h-[85vh] relative" 
            onClick={(e) => e.stopPropagation()}
          >
             <img 
               src={selectedImage.url} 
               alt={selectedImage.description} 
               className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
             />
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center rounded-b-lg">
                <p className="text-white font-bold text-lg">{selectedImage.description}</p>
                <span className="text-sky-300 text-sm">{selectedImage.category}</span>
             </div>
          </div>

          <button 
            className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition hidden md:block"
            onClick={handleNext}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
