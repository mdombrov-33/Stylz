import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    email: "",
    fullName: "",
  },
  setUser: (email, fullName) => set(() => ({ user: { email, fullName } })),
  clearUser: () => set(() => ({ user: { email: "", fullName: "" } })),
}));

export default useUserStore;
