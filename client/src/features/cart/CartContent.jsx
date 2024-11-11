import useCartStore from "@/store/cart-store";
import useThemeStore from "@/store/theme-store";
import CartClearBtn from "@/features/cart/CartClearBtn";

function CartContent() {
  const { cart, removeFromCart } = useCartStore((state) => state);
  const { theme } = useThemeStore((state) => state);

  const baseURL = "https://stylz-shop.onrender.com";

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
              <td>
                <h2 className="pb-6 font-redHatDisplay md:text-2xl">
                  {item.name}
                </h2>
                <img
                  className={`${theme === "lemonade" ? "brightness-100 saturate-100" : "brightness-75 saturate-150"} h-16 w-16 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44`}
                  src={`${baseURL}/${item.image}`}
                  alt={item.name}
                />
              </td>
              <td>
                <h3 className="font-redHatDisplay md:text-2xl">{item.size}</h3>
              </td>
              <td>
                <h3 className="font-redHatDisplay md:text-2xl">{item.price}</h3>
              </td>
              <td>
                <h3 className="font-redHatDisplay md:text-2xl">
                  {item.quantity}
                </h3>
              </td>
              <td>
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="btn btn-ghost w-4 font-redHatDisplay md:w-44 md:text-2xl"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <CartClearBtn />
      </table>
    </main>
  );
}

export default CartContent;
