import useCartStore from "@/store/cart-store";
import useThemeStore from "@/store/theme-store";

function CartContent() {
  const { cart, removeFromCart, clearCart } = useCartStore((state) => state);
  const baseURL = "https://stylz-shop.onrender.com";
  const { theme } = useThemeStore((state) => state);

  return (
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
                  className={`${theme === "lemonade" ? "brightness-100 saturate-100" : "brightness-75 saturate-150"} h-16 w-16 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44`}
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
        <div className="flex p-4">
          <button
            onClick={clearCart}
            className="btn h-12 font-redHatDisplay text-xl"
          >
            Clear Cart
          </button>
        </div>
      </table>
    </main>
  );
}

export default CartContent;
