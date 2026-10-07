'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserRole } from '@/types';

interface AppState {
  currentRole: UserRole | null;
  userName: string;
  companyName: string;
  notifications: number;
  sidebarOpen: boolean;
  setRole: (role: UserRole, name: string, company?: string) => void;
  logout: () => void;
  setSidebarOpen: (open: boolean) => void;
  decrementNotification: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentRole: null,
      userName: '',
      companyName: '',
      notifications: 5,
      sidebarOpen: true,
      setRole: (role, name, company = '') =>
        set({ currentRole: role, userName: name, companyName: company }),
      logout: () =>
        set({ currentRole: null, userName: '', companyName: '' }),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      decrementNotification: () =>
        set((state) => ({ notifications: Math.max(0, state.notifications - 1) })),
    }),
    {
      name: 'geo-connect-storage',
    }
  )
);
