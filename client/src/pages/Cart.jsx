import useCartStore from "@/store/cart-store";

function Cart() {
  const { cart, removeFromCart } = useCartStore((state) => state);
  const baseURL = "https://stylz-shop.onrender.com";

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
    <main className="flex overflow-x-auto p-6">
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
                {item.name}
                <img
                  className="h-12 w-12 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-48 lg:w-48"
                  src={`${baseURL}/${item.image}`}
                  alt=""
                />
              </td>
              <td className="font-redHatDisplay md:text-2xl">{item.size}</td>
              <td className="font-redHatDisplay md:text-2xl">{item.price}</td>
              <td className="font-redHatDisplay md:text-2xl">
                {item.quantity}
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
  );
}
export default Cart;
