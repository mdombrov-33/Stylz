function CatalogNavigation({
  selectedCategory,
  setSelectedCategory,
  selectedGender,
  setSelectedGender,
}) {
  const handleGenderClick = (gender) => {
    // Toggle selection for gender
    setSelectedGender(selectedGender === gender ? null : gender);
  };

  const handleCategoryClick = (category) => {
    // Toggle selection for category
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <aside className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu mt-[105px] w-80 bg-base-200 p-4 text-base-content">
        {/* Gender Filter Buttons */}
        <li>
          <button
            onClick={() => handleGenderClick("men")}
            className={`btn text-2xl font-semibold uppercase ${
              selectedGender === "men" ? "btn-neutral" : "btn-outline"
            }`}
          >
            men
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleGenderClick("women")}
            className={`btn text-2xl font-semibold uppercase ${
              selectedGender === "women" ? "btn-neutral" : "btn-outline"
            }`}
          >
            women
          </button>
        </li>
        <div className="divider divider-neutral mt-8"></div>

        {/* Category Filter Buttons */}
        <li className="mt-4">
          <button
            onClick={() => handleCategoryClick("shirts")}
            className={`btn text-2xl font-semibold uppercase ${
              selectedCategory === "shirts" ? "btn-neutral" : "btn-outline"
            }`}
          >
            shirts
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategoryClick("jackets")}
            className={`btn text-2xl font-semibold uppercase ${
              selectedCategory === "jackets" ? "btn-neutral" : "btn-outline"
            }`}
          >
            jackets
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategoryClick("pants")}
            className={`btn text-2xl font-semibold uppercase ${
              selectedCategory === "pants" ? "btn-neutral" : "btn-outline"
            }`}
          >
            pants
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategoryClick("sweaters")}
            className={`btn text-2xl font-semibold uppercase ${
              selectedCategory === "sweaters" ? "btn-neutral" : "btn-outline"
            }`}
          >
            sweaters
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategoryClick("coats")}
            className={`btn text-2xl font-semibold uppercase ${
              selectedCategory === "coats" ? "btn-neutral" : "btn-outline"
            }`}
          >
            coats
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategoryClick("shoes")}
            className={`btn text-2xl font-semibold uppercase ${
              selectedCategory === "shoes" ? "btn-neutral" : "btn-outline"
            }`}
          >
            shoes
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default CatalogNavigation;
