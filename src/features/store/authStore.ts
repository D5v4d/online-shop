import { create } from 'zustand';

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken?: string;
  refreshToken?: string;
};

type Store = {
  user?: User;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  setUser: (data: User) => void
  clearUser: () => void
};

export const useStore = create<Store>((set) => ({
  user: undefined,
  me: undefined,
  isLoading: false,

  login: async (username: string, password: string) => {
    try {
      set({ isLoading: true });
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error('Login failed');

      const data: User = await response.json();
      localStorage.setItem('User',  JSON.stringify(data))
      set({ user: data });
    } catch (err) {
      console.error('Login error:', err);
    } finally {
      set({ isLoading: false });
    }
  },
  setUser: (data) => {
    set({ user: data });
  },
  clearUser: () => {
    set({ user: undefined });
    localStorage.removeItem('User');
  }

}));