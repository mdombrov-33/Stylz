import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const itemIndex = state.cart.findIndex((item) => item.id === product.id);

      if (itemIndex !== -1) {
        // If item is in the cart, just increase the quantity
        const updatedCart = state.cart.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item,
        );
        return { cart: updatedCart };
      } else {
        // Add the new item with quantity 1
        return {
          cart: [
            ...state.cart,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: 1,
            },
          ],
        };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
