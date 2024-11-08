import { useEffect, useState } from "react";
import CatalogItem from "@/features/catalog/CatalogItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/components/Loader";
import CatalogNavigation from "@/features/catalog/CatalogNavigation";
import { BiSolidCategory } from "react-icons/bi";

function Catalog() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);

  // Fetch catalog items based on the current page and filters
  const fetchCatalogItems = async ({ queryKey }) => {
    const [, { page, category, gender }] = queryKey;
    const response = await axios.get(
      "https://stylz-shop.onrender.com/api/catalog",
      {
        params: { page, category, gender },
      }
    );
    return response.data;
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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
        <section className="flex justify-end -mr-7">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden uppercase btn-ghost text-2xl font-delaGothicOne fixed top-26 z-10"
          >
            <BiSolidCategory className="inline-block mr-2 text-3xl" />
          </label>
        </section>

        {/* Catalog Items */}
        <section className="flex flex-col items-center justify-start py-6">
          <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-4 px-4 mt-6">
            {filteredItems.map((item) => (
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
        </section>

        {/* //No items found  */}
        {filteredItems.length === 0 && (
          <section className="flex items-center justify-center h-96">
            <h1 className="text-4xl font-bold mt-10">
              No items found for current filters
            </h1>
          </section>
        )}

        {/* Pagination */}
        {filteredItems.length > 0 && (
          <section className="join grid grid-cols-2 mt-4 items-center justify-center p-6 w-full">
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
          </section>
        )}

        {/* Track Pages */}
        {filteredItems.length > 0 && (
          <p className="text-center">{`Page ${page} of ${data.totalPages}`}</p>
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
