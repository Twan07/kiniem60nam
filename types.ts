
export enum ViewState {
  HOME = 'HOME',
  HISTORY = 'HISTORY',
  GALLERY = 'GALLERY',
  MEMORIES = 'MEMORIES',
  ADMIN = 'ADMIN',
  NEWS = 'NEWS',
  ACTIVITIES = 'ACTIVITIES'
}

export enum UserRole {
  GUEST = 'GUEST',
  ALUMNI = 'ALUMNI',
  TEACHER = 'TEACHER',
  ADMIN = 'ADMIN'
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface MemoryPost {
  id: string;
  authorName: string;
  role: string; // e.g., "Cựu học sinh khóa 1995-1998"
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  dateSubmitted: string;
  likes: number;
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: string; // e.g., "1960-1980", "1980-2000"
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string; // e.g. "Sự kiện", "Học tập", "Thông báo"
  imageUrl: string;
}

export interface ClubItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  memberCount: number;
}
