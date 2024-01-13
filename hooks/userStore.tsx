// userStore.ts
import { create } from "zustand";

const dummyAdminUser: User = {
  id: "123456",
  role: "admin",
  username: "adminUser",
  email: "admin@example.com",
};
const dummyUser: User = {
  id: "123456",
  role: "customer",
  username: "adminUser",
  email: "admin@example.com",
};
type User = {
  id: string | null;
  role: "customer" | "admin" | null;
  username: string | null;
  email: string | null;
};

type UserState = {
  user: User | undefined;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user: { ...user } })),
  clearUser: () => set({ user: undefined }),
}));
