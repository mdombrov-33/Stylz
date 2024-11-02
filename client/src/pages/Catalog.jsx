import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import CatalogItem from "@/features/catalog/CatalogItem";

function Catalog() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await axios(
          "https://stylz-shop.onrender.com/api/catalog"
        );
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCatalog();
  }, []);

  console.log(data);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section>
      <h1 className="uppercase font-bold text-center mt-6 text-2xl">Catalog</h1>
      {data.data.map((item) => {
        return (
          <CatalogItem
            key={item.id}
            name={item.name}
            gender={item.gender}
            image={item.image}
            altImage={item.altImage}
            price={item.price}
            description={item.description}
          />
        );
      })}
    </section>
  );
}

export default Catalog;
