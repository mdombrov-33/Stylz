import { Link } from "react-router-dom";

function CatalogItemInfo({ product, selectedSize, setSelectedSize }) {
  return (
    <section className="mt-6 flex flex-col items-center">
      <h2 className="px-6 font-redHatDisplay text-3xl font-bold">
        {product.name}
      </h2>
      <p className="mt-2 text-2xl">{product.price}$</p>
      <p className="mt-2 text-pretty p-6 font-redHatDisplay text-xl">
        {product.description}
      </p>

      <div className="mt-8 pb-6">
        <select
          className="select select-bordered w-full max-w-xs font-redHatDisplay"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option disabled={selectedSize !== ""}>AVAILABLE SIZES</option>
          {product?.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <Link to="/contact/sizeguide">
          <p className="mt-2 font-redHatDisplay font-bold underline">
            What size should i buy?
          </p>
        </Link>
      </div>
    </section>
  );
}

export default CatalogItemInfo;
