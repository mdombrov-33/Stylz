import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/components/Loader";
import ReturnBtn from "@/components/ReturnBtn";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import useCartStore from "@/store/cart-store";
import toast from "react-hot-toast";
import useThemeStore from "@/store/theme-store";

function CatalogItem() {
  const { id } = useParams();
  const baseURL = "https://stylz-shop.onrender.com";
  const { theme } = useThemeStore((state) => state);

  // State to track selected size
  const [selectedSize, setSelectedSize] = useState("");

  const showErrorToast = () => {
    if (selectedSize == "null" || selectedSize === "") {
      toast.error("Please select a size to add to cart");
    }
  };

  const showSuccessToast = () => {
    toast.success(`${product.name} added to cart`);
  };

  // Cart store
  const addToCart = useCartStore((state) => state.addToCart);

  // State to track which section is open
  const [openSection, setOpenSection] = useState(null);

  // Fetch product details
  const fetchProductDetails = async () => {
    const response = await axios.get(
      `https://stylz-shop.onrender.com/api/catalog/${id}`,
    );
    return response.data;
  };

  // Query setup to fetch product details
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchProductDetails,
    staleTime: 1000 * 60 * 10, // 10 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: true,
    retry: 3,
    enabled: true, // Always enabled for continuous fetching
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  // Function to toggle which section is open
  const toggleCollapse = (section) => {
    setOpenSection((prev) => (prev === section ? null : section)); // Close if same section is clicked again, otherwise open the new one
  };

  return (
    <main className="grid xl:grid-cols-2">
      <section className="grid grid-cols-2">
        <img
          src={`${baseURL}/${product.image}`}
          className={`${theme === "lemonade" ? "brightness-75 saturate-100" : "brightness-50 saturate-100"} h-full w-full shrink-0 object-cover`}
          alt={product.name}
        />
        <img
          src={`${baseURL}/${product.altImage}`}
          className={`${theme === "lemonade" ? "brightness-75 saturate-100" : "brightness-50 saturate-100"} b-r-2 h-full w-full shrink-0 border-l-2 border-r-2 border-stone-950 object-cover`}
          alt={product.name}
        />
        <img
          src={`${baseURL}/${product.altImage2}`}
          className={`${theme === "lemonade" ? "brightness-75 saturate-100" : "brightness-50 saturate-100"} h-full w-full shrink-0 border-b-2 border-t-2 border-stone-950 object-cover saturate-150`}
          alt={product.name}
        />
        <img
          src={`${baseURL}/${product.altImage3}`}
          className={`${theme === "lemonade" ? "brightness-75 saturate-100" : "brightness-50 saturate-100"} h-full w-full shrink-0 border-b-2 border-l-2 border-r-2 border-t-2 border-stone-950 object-cover`}
          alt={product.name}
        />
      </section>

      <section className="mt-6 flex flex-col items-center">
        <h2 className="px-6 font-redHatDisplay text-3xl font-bold">
          {product.name}
        </h2>
        <p className="mt-2 text-2xl">{product.price}$</p>
        <p className="mt-2 text-pretty p-6 font-redHatDisplay text-xl">
          {product.description}
        </p>

        <section className="mt-8 pb-6">
          <select
            className="select select-bordered w-full max-w-xs"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option disabled={selectedSize !== ""}>AVAILABLE SIZES</option>
            {product?.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <Link to="/contact/sizeguide">
            <p className="mt-2 font-bold underline">What size should i buy?</p>
          </Link>
        </section>
        <section className="flex flex-col gap-8 py-12">
          <button
            disabled={selectedSize === "" || selectedSize === "null"}
            onClick={() => {
              addToCart(product, selectedSize);
              showErrorToast();
              showSuccessToast();
            }}
            className="btn btn-neutral w-96 text-xl font-bold uppercase"
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
            className="btn btn-outline w-96 text-xl font-normal uppercase"
          >
            try before you buy
          </button>
        </section>
        <p className="-mt-10 pb-6 text-sm">
          Try up to 6 items at home for 7 days. Powered by{" "}
          <span className="font-delaGothicOne">trynow</span>
        </p>

        <div className="rating mt-12">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            disabled={true}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            disabled={true}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            disabled={true}
            defaultChecked
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            disabled={true}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            disabled={true}
          />
        </div>

        <p className="mt-2 text-pretty text-sm">Based on 5 reviews</p>

        {/* Collapsed */}
        <section className="mt-12 flex w-96 flex-col gap-2 pb-12">
          {/* Origin Section */}
          <div className="collapse bg-base-200">
            <input
              type="checkbox"
              checked={openSection === "origin"}
              onChange={() => toggleCollapse("origin")}
            />
            <div className="collapse-title flex items-center text-xl font-medium uppercase">
              <p>origin</p>
              {openSection === "origin" ? (
                <FaMinus className="ml-auto" />
              ) : (
                <FaPlus className="ml-auto" />
              )}
            </div>
            <div className="collapse-content">
              <p>{product.origin}</p>
            </div>
          </div>

          {/* Fabric Section */}
          <div className="collapse bg-base-200">
            <input
              type="checkbox"
              checked={openSection === "fabric"}
              onChange={() => toggleCollapse("fabric")}
            />
            <div className="collapse-title flex items-center text-xl font-medium uppercase">
              <p>fabric</p>
              {openSection === "fabric" ? (
                <FaMinus className="ml-auto" />
              ) : (
                <FaPlus className="ml-auto" />
              )}
            </div>
            <div className="collapse-content">
              <p>{product.fabric}</p>
            </div>
          </div>

          {/* Care Section */}
          <div className="collapse bg-base-200">
            <input
              type="checkbox"
              checked={openSection === "care"}
              onChange={() => toggleCollapse("care")}
            />
            <div className="collapse-title flex items-center text-xl font-medium uppercase">
              <p>care</p>
              {openSection === "care" ? (
                <FaMinus className="ml-auto" />
              ) : (
                <FaPlus className="ml-auto" />
              )}
            </div>
            <div className="collapse-content">
              <p>{product.care}</p>
            </div>
          </div>
        </section>

        <section className="mt-12 pb-6">
          <ReturnBtn to={-1} />
        </section>
      </section>
    </main>
  );
}

export default CatalogItem;
