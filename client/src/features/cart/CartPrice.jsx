import useCartStore from "@/store/cart-store";

function CartPrice() {
  const { cart } = useCartStore((state) => state);

  return (
    <section>
      <h2 className="mt-6 text-center font-redHatDisplay text-2xl font-bold md:text-4xl">
        Total Price:{" "}
        {cart
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)}
        $
      </h2>
    </section>
  );
}

export default CartPrice;
