import {create} from 'zustand';

interface SidebarStore {
  isSidebarVisible: boolean;
  showSidebar: () => void;
  hideSidebar: () => void;
  toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarStore>((set) => ({
  isSidebarVisible: true,
  showSidebar: () => set({ isSidebarVisible: true }),
  hideSidebar: () => set({ isSidebarVisible: false }),
  toggleSidebar: () => set((state) => ({ isSidebarVisible: !state.isSidebarVisible })),
}));

export default useSidebarStore;
