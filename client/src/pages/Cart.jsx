import CartNavigation from "@/features/cart/CartNavigation";
import CartContent from "@/features/cart/CartContent";
import CartPrice from "@/features/cart/CartPrice";
import useCartStore from "@/store/cart-store";

function Cart() {
  const { cart } = useCartStore((state) => state);

  if (cart.length === 0) {
    return (
      <div className="flex h-96 flex-col items-center justify-center gap-2 font-bold">
        <h1 className="text-center font-redHatDisplay text-3xl">
          Your cart is empty
        </h1>
        <p className="text-sm">Go add some items</p>
      </div>
    );
  } else {
    return (
      <section>
        <CartContent />
        <CartPrice />
        <CartNavigation />
      </section>
    );
  }
}

export default Cart;
