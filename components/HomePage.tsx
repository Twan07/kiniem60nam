
import React from 'react';
import { ViewState } from '../types';
import HeroSection from './home/HeroSection';
import StatsSection from './home/StatsSection';
import StudentLifeSection from './home/StudentLifeSection';
import AchievementsSection from './home/AchievementsSection';
import LeadershipSection from './home/LeadershipSection';
import HomeNewsSection from './home/HomeNewsSection';

interface HomePageProps {
  onNavigate: (view: ViewState) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <StatsSection />
      <StudentLifeSection onNavigate={onNavigate} />
      <AchievementsSection onNavigate={onNavigate} />
      <LeadershipSection />
      <HomeNewsSection onNavigate={onNavigate} />
    </>
  );
};

export default HomePage;
