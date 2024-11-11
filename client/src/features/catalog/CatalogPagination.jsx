function CatalogPagination({
  page,
  data,
  handlePrevPage,
  handleNextPage,
  filteredItems,
}) {
  if (filteredItems.length > 0) {
    return (
      <>
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
        <p className="pb-4 text-center">{`Page ${page} of ${data.totalPages}`}</p>
      </>
    );
  }
}

export default CatalogPagination;
