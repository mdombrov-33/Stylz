import { useEffect, useState } from "react";
import CatalogItem from "@/features/catalog/CatalogItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/components/Loader";
import CatalogNavigation from "@/features/catalog/CatalogNavigation";

function Catalog() {
  const [page, setPage] = useState(1);

  const fetchCatalogItems = async ({ queryKey }) => {
    const [, { page }] = queryKey;
    const response = await axios.get(
      "https://stylz-shop.onrender.com/api/catalog",
      {
        params: { page },
      }
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["catalogItems", { page }],
    queryFn: fetchCatalogItems,
    staleTime: 1000 * 60 * 10, // 10 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: true,
    refetchInterval: 1000 * 60 * 15, // 15 minutes
    retry: 3,
    keepPreviousData: true, // Keeps previous page data while fetching the new page
  });

  console.log(data);

  // Scroll to the top of the page when the page number changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const handleNextPage = () => {
    if (page < data.totalPages) setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-start py-6">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden uppercase btn-ghost text-2xl font-delaGothicOne"
        >
          filters
        </label>

        {/* Catalog Items */}
        <section className="grid 2xl:grid-cols-4 gap-4 px-4">
          {data.items.map((item) => (
            <CatalogItem
              key={item.id}
              isAvailable={item.isAvailable}
              price={item.price}
              name={item.name}
              image={item.image}
              altImage={item.altImage}
            />
          ))}
        </section>

        {/* Pagination Controls */}
        <div className="join grid grid-cols-2 mt-4">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="join-item btn btn-outline"
          >
            Previous page
          </button>
          <button
            onClick={handleNextPage}
            disabled={page === data.totalPages}
            className="join-item btn btn-outline"
          >
            Next page
          </button>
        </div>
        <p className="mt-2">
          Page {page} of {data.totalPages}
        </p>
      </div>

      {/* Sidebar Navigation */}
      <CatalogNavigation />
    </main>
  );
}

export default Catalog;
