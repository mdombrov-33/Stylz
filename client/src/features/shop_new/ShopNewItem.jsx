import { useState } from "react";

function ShopNewItems({ name, price, image, altImage, gender, category }) {
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
        <section className="mt-6">
          <p className="uppercase font-bold">{category}</p>
          <p className="uppercase font-bold">{gender}</p>
          <p className="uppercase font-bold text-2xl pt-6"></p>
          <p className="text-2xl pt-10 font-bold">{price}$</p>
        </section>
      </section>

      <section className="card-actions justify-end py-6 px-6">
        <button className="uppercase btn btn-accent font-bold font-redHatDisplay text-lg ">
          Check Details
        </button>
      </section>
    </main>
  );
}

export default ShopNewItems;
