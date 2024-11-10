import CartButtons from "@/features/cart/CartButtons";
import CartContent from "@/features/cart/CartContent";
import CartPrice from "@/features/cart/CartPrice";
import useCartStore from "@/store/cart-store";

function Cart() {
  const { cart } = useCartStore((state) => state);

  if (cart.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center font-bold uppercase">
        <h1 className="font-redHatDisplay text-3xl">Your cart is empty</h1>
      </div>
    );
  } else {
    return (
      <section>
        <CartContent />
        <CartPrice />
        <CartButtons />
      </section>
    );
  }
}

export default Cart;
