import { useState } from "react";

function CatalogItem({ isAvailable, price, name, image, altImage }) {
  const baseURL = "https://stylz-shop.onrender.com";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main>
      <section className="card  shadow-xl h-full w-full ">
        <figure>
          <img
            className="max-h-96 w-full object-cover"
            src={`${baseURL}/${isHovered ? altImage : image}`}
            alt={name}
            onMouseLeave={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}
          />
        </figure>
        <section className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-2xl pt-10 font-bold">
            {isAvailable ? price + "$" : "Out of Stock"}
          </p>
          <section className="card-actions items-end justify-end ">
            <button
              className="uppercase btn btn-accent font-bold font-redHatDisplay text-lg "
              disabled={isAvailable ? false : true}
            >
              Check Details
            </button>
          </section>
        </section>
      </section>
    </main>
  );
}

export default CatalogItem;
