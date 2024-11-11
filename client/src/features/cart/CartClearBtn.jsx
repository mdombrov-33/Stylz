import useCartStore from "@/store/cart-store";

function CartClearBtn() {
  const { clearCart } = useCartStore((state) => state);

  const handleClearCart = () => {
    clearCart();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex p-4">
      <button
        onClick={handleClearCart}
        className="btn h-12 font-redHatDisplay text-sm font-bold md:text-xl"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default CartClearBtn;
