import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import Loader from "@/components/Loader";
import ReturnBtn from "@/components/ReturnBtn";
import CatalogItemImages from "@/features/catalog/SingleItem/CatalogItemImages";
import CatalogItemInfo from "@/features/catalog/SingleItem/CatalogItemInfo";
import CatalogItemBtns from "@/features/catalog/SingleItem/CatalogItemBtns";
import CatalogItemRating from "@/features/catalog/SingleItem/CatalogItemRating";
import CatalogItemAccordion from "@/features/catalog/SingleItem/CatalogItemAccordion";

function CatalogItem() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://stylz-shop.onrender.com/api/catalog/${id}`,
      );
      return response.data;
    } catch (err) {
      toast.error(err.response.data);
    }
  };

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

  if (error)
    return (
      <p className="flex items-center justify-center text-2xl font-bold">
        Something went wrong...
      </p>
    );

  return (
    <main className="grid xl:grid-cols-2">
      <section className="grid grid-cols-2">
        <CatalogItemImages product={product} />
      </section>
      <section className="flex flex-col items-center justify-evenly">
        <CatalogItemInfo
          product={product}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <CatalogItemBtns product={product} selectedSize={selectedSize} />
        <CatalogItemRating />
        <CatalogItemAccordion product={product} />
        <div className="flex items-center justify-center py-8">
          <ReturnBtn to={-1} />
        </div>
      </section>
    </main>
  );
}

export default CatalogItem;
