import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/components/Loader";
import ReturnBtn from "@/components/ReturnBtn";

function ProductPage() {
  const { id } = useParams();
  const baseURL = "https://stylz-shop.onrender.com";

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

  return (
    <main className="grid xl:grid-cols-2">
      <section className="grid grid-cols-2">
        <img
          src={`${baseURL}/${product.image}`}
          className="h-full w-full object-cover contrast-50 saturate-100"
          alt={product.name}
        />
        <img
          src={`${baseURL}/${product.altImage}`}
          className="b-r-2 h-full w-full border-l-2 border-r-2 border-stone-950 object-cover contrast-50 saturate-100"
          alt={product.name}
        />
        <img
          src={`${baseURL}/${product.altImage2}`}
          className="h-full w-full border-t-2 border-stone-950 object-cover contrast-50 saturate-100"
          alt={product.name}
        />
        <img
          src={`${baseURL}/${product.altImage3}`}
          className="h-full w-full border-l-2 border-r-2 border-t-2 border-stone-950 object-cover contrast-50 saturate-100"
          alt={product.name}
        />
      </section>

      <section className="mt-6 flex flex-col items-center">
        <h2 className="px-6 font-redHatDisplay text-3xl font-bold">
          {product.name}
        </h2>
        <p className="mt-4 text-2xl">{product.price}$</p>
        <p className="mt-2 text-pretty p-6 font-redHatDisplay text-xl">
          {product.description}
        </p>

        <section className="pb-6">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              AVAILABLE SIZES
            </option>
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
      </section>
    </main>
  );
}

export default ProductPage;
