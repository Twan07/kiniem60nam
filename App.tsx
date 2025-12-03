import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Timeline from './components/Timeline';
import MemoryWall from './components/MemoryWall';
import Gallery from './components/Gallery';
import NewsPage from './components/NewsPage';
import ActivitiesPage from './components/ActivitiesPage';
import HomePage from './components/HomePage';
import { ViewState, MemoryPost } from './types';
import { api } from './services/api';
import { Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [memories, setMemories] = useState<MemoryPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initial Data Fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getMemories();
        setMemories(data);
      } catch (error) {
        console.error("Failed to fetch memories", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddMemory = async (newMemory: MemoryPost) => {
    try {
      const savedMemory = await api.createMemory(newMemory);
      setMemories([savedMemory, ...memories]);
    } catch (error) {
      console.error("Failed to add memory", error);
      alert("Có lỗi xảy ra khi gửi bài viết.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-primary">
        <Loader2 size={48} className="animate-spin mb-4 text-primary" />
        <h2 className="text-2xl font-black text-slate-800">Đang tải dữ liệu...</h2>
      </div>
    );
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView}>
      {currentView === ViewState.HOME && (
        <HomePage onNavigate={setCurrentView} />
      )}
      {currentView === ViewState.HISTORY && <Timeline />}
      {currentView === ViewState.MEMORIES && (
        <MemoryWall 
          memories={memories} 
          onAddMemory={handleAddMemory} 
        />
      )}
      {currentView === ViewState.GALLERY && <Gallery />}
      {currentView === ViewState.NEWS && <NewsPage />}
      {currentView === ViewState.ACTIVITIES && <ActivitiesPage onNavigate={setCurrentView} />}
    </Layout>
  );
};

export default App;