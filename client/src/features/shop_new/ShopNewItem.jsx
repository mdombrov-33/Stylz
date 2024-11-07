import { useState } from "react";

function ShopNewItems({
  name,
  description,
  price,
  image,
  altImage,
  gender,
  category,
  sizes,
}) {
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
      <section className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <section className="mt-6">
          <p className="uppercase font-bold">{category}</p>
          <p className="uppercase font-bold">{gender}</p>
          <p className="uppercase font-bold text-2xl pt-6">
            {sizes.map((size, index) => (
              <span key={index} className="mr-4">
                {size}
              </span>
            ))}
          </p>
          <p className="text-2xl pt-10 font-bold">{price}$</p>
        </section>
      </section>

      <section className="card-actions justify-end py-6 px-6">
        <button className="btn font-redHatDisplay font-bold text-lg btn-accent uppercase">
          Add to Cart
        </button>
      </section>
    </main>
  );
}

export default ShopNewItems;
