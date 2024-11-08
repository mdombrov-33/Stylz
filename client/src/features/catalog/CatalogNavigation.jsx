import { useState } from "react";

function CatalogNavigation({ onSearch }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <aside className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 text-base-content mt-[105px] w-80 p-4">
        {/* Sidebar content here */}
        <li>
          <button
            onClick={() => handleCategorySelect("men")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            men
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategorySelect("women")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            women
          </button>
        </li>
        <div className="divider divider-neutral mt-8"></div>
        <li className="mt-4">
          <button
            onClick={() => handleCategorySelect("shirts")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            shirts
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategorySelect("jackets")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            jackets
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategorySelect("pants")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            pants
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategorySelect("sweaters")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            sweaters
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategorySelect("shoes")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            shoes
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategorySelect("coats")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            coats
          </button>
        </li>
        <button
          onClick={() => onSearch(selectedCategory)}
          className="mt-6 uppercase font-extrabold tracking-tight font-redHatDisplay btn  btn-accent text-2xl"
        >
          search
        </button>
      </ul>
    </aside>
  );
}

export default CatalogNavigation;
