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
        <li>
          <button
            onClick={() => handleCategorySelect("men")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            men
          </button>
        </li>
        <li>
          <button
            onClick={() => handleCategorySelect("shirts")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            shirts
          </button>
        </li>
        {/* Other category buttons */}
        <button
          onClick={() => onSearch(selectedCategory)}
          className="mt-6 uppercase font-extrabold tracking-tight font-redHatDisplay btn btn-accent text-2xl"
        >
          search
        </button>
      </ul>
    </aside>
  );
}

export default CatalogNavigation;
