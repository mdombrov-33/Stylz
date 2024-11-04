import { useState } from "react";

function ShopNewItems({ name, description, price, image, altImage, gender }) {
  const baseURL = "https://stylz-shop.onrender.com";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          className="max-h-96 w-full object-cover"
          onMouseLeave={() => setIsHovered(false)}
          onMouseEnter={() => setIsHovered(true)}
          src={`${baseURL}/${isHovered ? altImage : image}`}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="mt-6">
          <p className="uppercase font-bold">{gender}</p>
          <p className="text-2xl font-bold">{price}$</p>
        </div>
      </div>

      <div className="card-actions justify-end py-6 px-6">
        <button className="btn font-redHatDisplay font-bold text-lg btn-accent">
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default ShopNewItems;
