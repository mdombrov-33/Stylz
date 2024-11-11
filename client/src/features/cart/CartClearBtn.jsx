import useCartStore from "@/store/cart-store";

function CartClearBtn() {
  const { clearCart } = useCartStore((state) => state);

  return (
    <div className="flex p-4">
      <button
        onClick={clearCart}
        className="btn h-12 font-redHatDisplay text-sm font-bold"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default CartClearBtn;
