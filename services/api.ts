import { MemoryPost } from '../types';
import { INITIAL_MEMORIES } from '../constants';

const STORAGE_KEY = 'tiendu1_memories_db';

// Simulate network delay to feel like a real server
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper to get DB
const getDB = (): MemoryPost[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    // Seed initial data if empty
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MEMORIES));
    return INITIAL_MEMORIES;
  }
  return JSON.parse(data);
};

// Helper to save DB
const saveDB = (data: MemoryPost[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const api = {
  // GET: Fetch all memories
  getMemories: async (): Promise<MemoryPost[]> => {
    await delay(500); // Fake latency
    return getDB();
  },

  // POST: Create a new memory
  createMemory: async (memory: MemoryPost): Promise<MemoryPost> => {
    await delay(600);
    const db = getDB();
    // Force status to approved so it shows immediately since Admin is removed
    const newMemory = { ...memory, id: Date.now().toString(), status: 'approved' as const };
    const updatedDb = [newMemory, ...db];
    saveDB(updatedDb);
    return newMemory;
  },

  // PUT: Update status (Approve/Reject)
  updateStatus: async (id: string, status: 'approved' | 'rejected'): Promise<void> => {
    await delay(400);
    const db = getDB();
    const updatedDb = db.map(post => 
      post.id === id ? { ...post, status } : post
    );
    saveDB(updatedDb);
  },

  // DELETE: Remove a memory
  deleteMemory: async (id: string): Promise<void> => {
    await delay(400);
    const db = getDB();
    const updatedDb = db.filter(post => post.id !== id);
    saveDB(updatedDb);
  }
};