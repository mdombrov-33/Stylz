function CatalogItemAccordion({ product }) {
  return (
    <section className="flex flex-col gap-4 pt-6">
      <div
        tabIndex={0}
        className="collapse collapse-arrow w-96 border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          <p className="font-redHatDisplay font-bold uppercase">fabric</p>
        </div>
        <div className="collapse-content">
          <p className="font-redHatDisplay">{product.fabric}</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow w-96 border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          <p className="font-redHatDisplay font-bold uppercase">care</p>
        </div>
        <div className="collapse-content">
          <p className="font-redHatDisplay">{product.care}</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow w-96 border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          <p className="font-redHatDisplay font-bold uppercase">origin</p>
        </div>
        <div className="collapse-content">
          <p className="font-redHatDisplay">{product.origin}</p>
        </div>
      </div>
    </section>
  );
}

export default CatalogItemAccordion;
