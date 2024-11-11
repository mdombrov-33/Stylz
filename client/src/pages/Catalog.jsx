import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import CatalogContent from "@/features/catalog/CatalogContent";
import Loader from "@/components/Loader";
import CatalogNavigation from "@/features/catalog/CatalogNavigation";

function Catalog() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);

  // Fetch catalog items based on the current page and filters
  const fetchCatalogItems = async ({ queryKey }) => {
    const [, { page, category, gender }] = queryKey;
    try {
      const response = await axios.get(
        "https://stylz-shop.onrender.com/api/catalog",
        {
          params: { page, category, gender },
        }
      );
      return response.data;
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  // Query setup to fetch catalog items with pagination and filters
  const { data, isLoading, error } = useQuery({
    queryKey: [
      "catalogItems",
      { page, category: selectedCategory, gender: selectedGender },
    ],
    queryFn: fetchCatalogItems,
    staleTime: 1000 * 60 * 10, // 10 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: true,
    refetchInterval: 1000 * 60 * 15, // 15 minutes
    retry: 3,
    enabled: true, // Always enabled for continuous fetching
    keepPreviousData: true, // Keeps previous page data while fetching the new page
  });

  // Reset page to 1 when filters change
  useEffect(() => {
    setPage(1); // Reset page when filters change
  }, [selectedCategory, selectedGender]);

  // Scroll to top when page or filters changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory, selectedGender, page]);

  // Handle pagination controls
  const handleNextPage = () => {
    if (data && page < data.totalPages) setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  // Handle loader and errors
  if (isLoading) {
    return <Loader />;
  }

  if (error)
    return (
      <p className="flex items-center justify-center text-2xl font-bold">
        Something went wrong...
      </p>
    );

  // Filter items based on selected filters
  const filteredItems =
    data?.items?.filter((item) => {
      const isCategoryMatch = selectedCategory
        ? item.category === selectedCategory
        : true;
      const isGenderMatch = selectedGender
        ? item.gender === selectedGender
        : true;

      return isCategoryMatch && isGenderMatch;
    }) || [];

  return (
    <main className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <section className="drawer-content">
        {/* Drawer for category selection */}
        <section className="-mr-7 flex justify-end">
          <label
            htmlFor="my-drawer-2"
            className="top-26 btn btn-ghost btn-primary drawer-button fixed z-10 font-delaGothicOne text-2xl uppercase lg:hidden"
          >
            <BiSolidCategory className="mr-4 inline-block text-4xl" />
          </label>
        </section>

        {/* Catalog Items */}
        {/* <section className="flex flex-col items-center justify-start py-6">
          <section className="mt-6 grid gap-4 px-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filteredItems.map((item) => (
              <CatalogContent
                key={item.id}
                id={item.id}
                isAvailable={item.isAvailable}
                price={item.price}
                name={item.name}
                image={item.image}
                altImage={item.altImage}
                filteredItems={filteredItems}
              />
            ))}
          </section>
        </section> */}

        {/* No items found  */}
        {filteredItems.length === 0 && (
          <section className="flex h-96 items-center justify-center">
            <h1 className="mt-10 text-2xl font-bold xl:text-3xl">
              No items found for current filters
            </h1>
          </section>
        )}

        {/* Pagination */}
        {filteredItems.length > 0 && (
          <section className="join mt-4 flex h-40 w-full grid-cols-2 items-end justify-center p-6">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="btn btn-outline join-item w-44"
            >
              Previous page
            </button>
            <button
              onClick={handleNextPage}
              disabled={page === data.totalPages}
              className="btn btn-outline join-item w-44"
            >
              Next page
            </button>
          </section>
        )}
        {/* Track Pages */}
        {filteredItems.length > 0 && (
          <p className="pb-4 text-center">{`Page ${page} of ${data.totalPages}`}</p>
        )}
      </section>

      {/* Sidebar Navigation */}
      <CatalogNavigation
        setSelectedCategory={setSelectedCategory}
        setSelectedGender={setSelectedGender}
        selectedGender={selectedGender}
        selectedCategory={selectedCategory}
      />
    </main>
  );
}

export default Catalog;
