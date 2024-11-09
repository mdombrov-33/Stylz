import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/components/Loader";
import ShopNewItems from "@/features/shop_new/ShopNewItem";

async function fetchNewItems() {
  const response = await axios("https://stylz-shop.onrender.com/api/new");
  return response.data;
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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1 className="mt-6 text-center font-redHatDisplay text-2xl font-bold uppercase">
        New Arrivals
      </h1>
      <section className="grid justify-center gap-20 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <ShopNewItems
            id={item.id}
            key={item.id}
            name={item.name}
            gender={item.gender}
            image={item.image}
            altImage={item.altImage}
            price={item.price}
            category={item.category}
          />
        ))}
      </section>
    </>
  );
}

export default ShopNew;
