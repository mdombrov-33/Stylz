import { create } from "zustand";

// Utility functions to load and save cart from/to localStorage
const loadCartFromLocalStorage = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart"));
  return storedCart ? storedCart : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const useCartStore = create((set) => ({
  cart: loadCartFromLocalStorage(), // Initial load from localStorage

  addToCart: (product, size) =>
    set((state) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === product.id && item.size === size,
      );

      let updatedCart;
      if (itemIndex !== -1) {
        // Update quantity if item with the same size is in the cart
        updatedCart = state.cart.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        // Add a new item with quantity 1 and specified size
        updatedCart = [
          ...state.cart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: 1,
          },
        ];
      }

      saveCartToLocalStorage(updatedCart); // Save updated cart
      return { cart: updatedCart };
    }),

  removeFromCart: (id, size) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (item) => !(item.id === id && item.size === size),
      );

      saveCartToLocalStorage(updatedCart); // Save updated cart
      return { cart: updatedCart };
    }),

  clearCart: () =>
    set(() => {
      saveCartToLocalStorage([]); // Clear cart in localStorage
      return { cart: [] };
    }),
}));

export default useCartStore;
