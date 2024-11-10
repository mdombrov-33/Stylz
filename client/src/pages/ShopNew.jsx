import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/components/Loader";
import ShopNewContent from "@/features/shop_new/ShopNewContent";
import toast from "react-hot-toast";

async function fetchNewItems() {
  try {
    const response = await axios("https://stylz-shop.onrender.com/api/catalog");
    return response.data;
  } catch (err) {
    toast.error(err.response.data);
  }
}

function ShopNew() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["newItems"],
    queryFn: fetchNewItems,
    staleTime: 1000 * 60 * 10, // 10 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: true,
    refetchInterval: 1000 * 60 * 15, // 15 minutes
    retry: 3,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error)
    return (
      <div className="flex items-center justify-center text-2xl font-bold">
        Something went wrong...
      </div>
    );

  const newItems = data.totalItems.filter((item) => item.newItem === true);

  return (
    <>
      <h1 className="mt-6 text-center font-redHatDisplay text-2xl font-bold uppercase">
        New Arrivals
      </h1>
      <main className="grid justify-center gap-20 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {newItems.map((item) => (
          <ShopNewContent
            id={item.id}
            key={item.id}
            name={item.name}
            gender={item.gender}
            image={item.image}
            altImage={item.altImage}
            price={item.price}
            category={item.category}
            sizes={item.sizes}
          />
        ))}
      </main>
    </>
  );
}

export default ShopNew;
