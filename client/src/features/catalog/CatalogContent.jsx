import { useState } from "react";
import { Link } from "react-router-dom";

import useThemeStore from "@/store/theme-store";

function CatalogContent({ id, isAvailable, price, name, image, altImage }) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useThemeStore((state) => state);

  const baseURL = "https://stylz-shop.onrender.com";

  return (
    <main>
      <section className="card h-full w-[350px] shadow-xl">
        <figure>
          <img
            className={`${theme === "lemonade" ? "brightness-75 saturate-100" : "brightness-50 saturate-100"} max-h-96 w-full object-cover`}
            src={`${baseURL}/${isHovered ? altImage : image}`}
            alt={name}
            onMouseLeave={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}
          />
        </figure>
        <section className="card-body">
          <h2 className="card-title font-redHatDisplay">{name}</h2>
          <p className="pt-10 font-redHatDisplay text-2xl font-bold">
            {isAvailable ? price + "$" : "Out of Stock"}
          </p>
          <section className="card-actions items-end justify-end">
            {isAvailable ? (
              <Link to={`/catalog/${id}`}>
                <button className="btn btn-accent font-redHatDisplay text-lg font-bold uppercase">
                  Check Details
                </button>
              </Link>
            ) : (
              <button
                className="btn btn-accent font-redHatDisplay text-lg font-bold uppercase"
                disabled
              >
                Check Details
              </button>
            )}
          </section>
        </section>
      </section>
    </main>
  );
}

export default CatalogContent;
