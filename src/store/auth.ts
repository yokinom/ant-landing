import { create } from "zustand";

interface AuthState {
  provider: string;
  setProvider: (provider: string) => void;
  clearProvider: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  provider: "",
  setProvider: (provider) => set({ provider }),
  clearProvider: () => set({ provider: "" }),
}));

export default useAuthStore;
