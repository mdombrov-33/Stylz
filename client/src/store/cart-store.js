// store/cart-store.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product, size) =>
    set((state) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === product.id && item.size === size,
      );

      if (itemIndex !== -1) {
        // If the item with the same size is in the cart, increase its quantity
        const updatedCart = state.cart.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item,
        );
        return { cart: updatedCart };
      } else {
        // Add the new item with quantity 1 and the specified size
        return {
          cart: [
            ...state.cart,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              size: size,
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
