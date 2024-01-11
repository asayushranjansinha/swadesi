import { create } from "zustand";

interface useSigninStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSignin = create<useSigninStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
