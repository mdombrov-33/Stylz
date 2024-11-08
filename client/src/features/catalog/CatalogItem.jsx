import { useParams } from "react-router-dom";
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
      `https://stylz-shop.onrender.com/api/catalog/${id}`
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

  console.log(product);
  //   const {
  //     image,
  //     altImage,
  //     altImage2,
  //     altImage3,
  //     category,
  //     description,
  //     gender,
  //     name,
  //     price,
  //     sizes,
  //   } = product;

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="grid grid-cols-2">
      <section className="grid grid-cols-2">
        <img
          src={`${baseURL}/${product.image}`}
          className="h-full w-full object-cover"
          alt={name}
        />
        <img
          src={`${baseURL}/${product.altImage}`}
          className="h-full object-cover  w-full"
          alt={name}
        />
        <img
          src={`${baseURL}/${product.altImage2}`}
          className="h-full object-cover  w-full"
          alt={name}
        />
        <img
          src={`${baseURL}/${product.altImage3}`}
          className="h-full object-cover  w-full"
          alt={name}
        />
      </section>
      aboba
    </main>
  );
}

export default ProductPage;
