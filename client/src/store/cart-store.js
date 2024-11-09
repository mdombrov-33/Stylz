import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (product) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
    })),
  clearCart: () => set({ cart: [] }),
}));
