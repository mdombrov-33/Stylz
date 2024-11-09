import { useState } from "react";
import { Link } from "react-router-dom";

function ShopNewContent({
  name,
  price,
  image,
  altImage,
  gender,
  category,
  id,
}) {
  const baseURL = "https://stylz-shop.onrender.com";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="card w-96 bg-base-100 shadow-xl">
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
          <p className="font-bold uppercase">{category}</p>
          <p className="font-bold uppercase">{gender}</p>
          <p className="pt-6 text-2xl font-bold uppercase"></p>
          <p className="pt-10 text-2xl font-bold">{price}$</p>
        </section>
      </section>

      <section className="card-actions justify-end px-6 py-6">
        <Link to={`/catalog/${id}`}>
          <button className="btn btn-accent font-redHatDisplay text-lg font-bold uppercase">
            Check Details
          </button>
        </Link>
      </section>
    </main>
  );
}

export default ShopNewContent;
