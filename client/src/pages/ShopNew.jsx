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
      <h1 className="uppercase font-bold text-center mt-6 text-2xl font-redHatDisplay">
        New Arrivals
      </h1>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 gap-20 justify-center ">
        {data.map((item) => (
          <ShopNewItems
            key={item.id}
            name={item.name}
            gender={item.gender}
            image={item.image}
            altImage={item.altImage}
            price={item.price}
            description={item.description}
            category={item.category}
            sizes={item.sizes}
          />
        ))}
      </section>
    </>
  );
}

export default ShopNew;
