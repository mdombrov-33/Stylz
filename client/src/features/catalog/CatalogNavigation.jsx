function CatalogNavigation({ setSelectedCategory, setSelectedGender }) {
  return (
    <aside className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 text-base-content mt-[105px] w-80 p-4">
        {/* Sidebar content*/}
        <li>
          <button
            onClick={() => setSelectedGender("men")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            men
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => setSelectedGender("women")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            women
          </button>
        </li>
        <div className="divider divider-neutral mt-8"></div>
        <li className="mt-4">
          <button
            onClick={() => setSelectedCategory("shirts")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            shirts
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => setSelectedCategory("jackets")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            jackets
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => setSelectedCategory("pants")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            pants
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => setSelectedCategory("sweaters")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            sweaters
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => setSelectedCategory("shoes")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            shoes
          </button>
        </li>
        <li className="mt-4">
          <button
            onClick={() => setSelectedCategory("coats")}
            className="uppercase text-2xl font-semibold btn btn-outline"
          >
            coats
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default CatalogNavigation;
