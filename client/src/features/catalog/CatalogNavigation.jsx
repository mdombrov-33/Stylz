function CatalogNavigation({
  selectedCategory,
  setSelectedCategory,
  selectedGender,
  setSelectedGender,
  setFetchTrigger,
}) {
  const handleGenderClick = (gender) => {
    // Toggle selection for gender
    setSelectedGender(selectedGender === gender ? null : gender);
    setFetchTrigger(true);
  };

  const handleCategoryClick = (category) => {
    // Toggle selection for category
    setSelectedCategory(selectedCategory === category ? null : category);
    setFetchTrigger(true);
  };

  return (
    <aside className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 text-base-content mt-[105px] w-80 p-4">
        {/* Gender Filter Buttons */}
        <li>
          <button
            onClick={() => handleGenderClick("men")}
            className={`uppercase text-2xl font-semibold btn ${
              selectedGender === "men" ? "btn-neutral" : "btn-outline"
            }`}
          >
            men
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleGenderClick("women")}
            className={`uppercase text-2xl font-semibold btn ${
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
            className={`uppercase text-2xl font-semibold btn ${
              selectedCategory === "shirts" ? "btn-neutral" : "btn-outline"
            }`}
          >
            shirts
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategoryClick("jackets")}
            className={`uppercase text-2xl font-semibold btn ${
              selectedCategory === "jackets" ? "btn-neutral" : "btn-outline"
            }`}
          >
            jackets
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategoryClick("pants")}
            className={`uppercase text-2xl font-semibold btn ${
              selectedCategory === "pants" ? "btn-neutral" : "btn-outline"
            }`}
          >
            pants
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategoryClick("sweaters")}
            className={`uppercase text-2xl font-semibold btn ${
              selectedCategory === "sweaters" ? "btn-neutral" : "btn-outline"
            }`}
          >
            sweaters
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategoryClick("coats")}
            className={`uppercase text-2xl font-semibold btn ${
              selectedCategory === "coats" ? "btn-neutral" : "btn-outline"
            }`}
          >
            coats
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => handleCategoryClick("shoes")}
            className={`uppercase text-2xl font-semibold btn ${
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
