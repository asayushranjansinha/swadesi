import { create } from 'zustand';

interface useNewProductStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useNewProduct = create<useNewProductStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));