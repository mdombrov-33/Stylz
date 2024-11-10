import CartButtons from "@/features/cart/CartButtons";
import useCartStore from "@/store/cart-store";
import useThemeStore from "@/store/theme-store";

function Cart() {
  const { cart, removeFromCart } = useCartStore((state) => state);
  const baseURL = "https://stylz-shop.onrender.com";

  const { theme } = useThemeStore((state) => state);

  if (cart.length === 0) {
    return (
      <main className="flex h-96 items-center justify-center">
        <h1 className="mt-10 text-2xl font-bold xl:text-3xl">
          Your cart is empty
        </h1>
      </main>
    );
  }

  return (
    <>
      <main className="flex overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="font-delaGothicOne md:text-2xl">Item</th>
              <th className="font-delaGothicOne md:text-2xl">Size</th>
              <th className="font-delaGothicOne md:text-2xl">Price</th>
              <th className="font-delaGothicOne md:text-2xl">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={`${item.id}-${item.size}`} className="hover">
                <td className="font-redHatDisplay md:text-2xl">
                  <h2 className="pb-6">{item.name}</h2>
                  <img
                    className={`${theme === "lemonade" ? "brightness-100 saturate-100" : "brightness-75 saturate-150"} h-16 w-16 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-48 lg:w-48`}
                    src={`${baseURL}/${item.image}`}
                    alt=""
                  />
                </td>
                <td className="font-redHatDisplay md:text-2xl">
                  <h3>{item.size}</h3>
                </td>
                <td className="font-redHatDisplay md:text-2xl">
                  <h3>{item.price}</h3>
                </td>
                <td className="font-redHatDisplay md:text-2xl">
                  <h3>{item.quantity}</h3>
                </td>
                <td>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="btn btn-ghost font-redHatDisplay md:text-2xl"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <section>
        <h2 className="mt-6 text-center font-redHatDisplay text-2xl font-bold md:text-4xl">
          Total Price:{" "}
          {cart
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
          $
        </h2>
      </section>
      <CartButtons />
    </>
  );
}
export default Cart;
