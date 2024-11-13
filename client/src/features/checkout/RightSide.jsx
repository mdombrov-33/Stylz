import { useRef, useState } from "react";
import toast from "react-hot-toast";

function RightSide({ cart, theme }) {
  const priceRef = useRef(null);
  const discountInputRef = useRef(null);
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const baseURL = "https://stylz-shop.onrender.com";

  const checkDiscount = () => {
    const discount = discountInputRef.current.value;
    if (discount === "ABC123456") {
      const price = priceRef.current.textContent;
      const discountedPrice = (parseFloat(price) * 0.9).toFixed(2);
      priceRef.current.textContent = `${discountedPrice}$`;
      setIsDiscountApplied(true);
      toast.success("Discount applied");
    } else {
      toast.error("Invalid discount code");
    }
  };

  return (
    <section
      className={`${theme === "lemonade" ? "bg-[#d3cfcfbd]" : "bg-base-300"} col-span-1 h-full w-full border-l-2 border-black md:col-span-2`}
    >
      <div className="flex h-full flex-col items-center">
        <h2 className="pt-4 text-center font-redHatDisplay font-bold lg:text-2xl">
          Your order:
        </h2>
        <div
          // Grid based on the number of items in the cart
          className={`mt-4 grid grid-cols-1 gap-2 px-4 ${cart.length === 1 ? "md:grid-cols-1" : cart.length === 2 ? "md:grid-cols-2" : "md:grid-cols-5"}`}
        >
          {cart.map((item) => {
            return (
              <div
                key={`${item.id}-${item.size}`}
                className="carousel rounded-box"
              >
                <div className="carousel-item indicator relative w-auto">
                  {/* Item image */}
                  <img
                    src={`${baseURL}/${item.image}`}
                    alt={item.name}
                    className={`${theme === "lemonade" ? "brightness-100 saturate-100" : "brightness-75 saturate-150"} h-12 w-12 object-fill md:h-16 md:w-16 lg:h-24 lg:w-24`}
                  />
                  {/* Quantity badge in the top-right corner */}
                  <span className="badge indicator-item badge-accent badge-sm absolute right-0 top-0 translate-x-1 translate-y-0.5 transform font-bold">
                    {item.quantity}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center px-2 pb-2 pt-6">
          <h3 className="text-center font-redHatDisplay text-sm font-bold">
            Apply discount
          </h3>
          <p className="text-center font-redHatDisplay text-sm font-bold">
            Try this: ABC123456
          </p>
          <input
            className="mt-2 h-8 w-16 rounded-lg border border-stone-950 px-4 py-2 md:w-44"
            type="text"
            ref={discountInputRef}
          />
          <div className="pt-2">
            <button
              disabled={isDiscountApplied}
              onClick={() => {
                checkDiscount();
              }}
              className="btn btn-accent h-max w-14 rounded-md p-4 font-redHatDisplay md:w-24"
            >
              Apply
            </button>
          </div>
          <div className="flex flex-col items-center justify-center pt-6">
            <h3 className="text-center text-xl font-bold uppercase lg:text-3xl">
              Total
            </h3>
            <p className="text-center text-xl font-bold" ref={priceRef}>
              {cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
              $
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSide;
