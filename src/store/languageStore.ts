import { create } from 'zustand';

interface LanguageState {
  isVietnamese: boolean;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  isVietnamese: false,
  toggleLanguage: () => set((state) => ({ isVietnamese: !state.isVietnamese })),
})); 