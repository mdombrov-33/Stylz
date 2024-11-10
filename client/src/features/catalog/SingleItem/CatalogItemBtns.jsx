import useCartStore from "@/store/cart-store";
import toast from "react-hot-toast";

function CatalogItemBtns({ product, selectedSize }) {
  const { addToCart } = useCartStore((state) => state);

  const showErrorToast = () => {
    if (selectedSize == "null" || selectedSize === "") {
      toast.error("Please select a size to add to cart");
    }
  };

  const showSuccessToast = () => {
    toast.success(`${product.name} - Size ${selectedSize} added to cart`, {
      duration: 6000,
      position: "bottom-left",
      icon: "🛒",
    });
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-12">
      <button
        disabled={selectedSize === "" || selectedSize === "null"}
        onClick={() => {
          addToCart(product, selectedSize);
          showErrorToast();
          showSuccessToast();
        }}
        className="btn btn-accent w-96 font-redHatDisplay text-xl font-bold uppercase"
      >
        add to cart
      </button>
      <button
        disabled={selectedSize === "" || selectedSize === "null"}
        onClick={() => {
          addToCart(product, selectedSize);
          showErrorToast();
          showSuccessToast();
        }}
        className="btn btn-outline w-96 font-redHatDisplay text-xl font-normal uppercase"
      >
        try before you buy
      </button>
      <p className="-mt-6 text-sm">
        Try up to 6 items at home for 7 days. Powered by{" "}
        <span className="font-delaGothicOne">trynow</span>
      </p>
    </section>
  );
}

export default CatalogItemBtns;
