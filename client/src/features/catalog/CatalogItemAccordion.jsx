import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function CatalogItemAccordion({ product }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleCollapse = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="flex items-center justify-center">
      <section className="mt-12 flex w-96 flex-col items-center justify-center gap-2 p-12">
        {/* Origin Section */}
        <div className="collapse bg-base-200">
          <input
            type="checkbox"
            checked={openSection === "origin"}
            onChange={() => toggleCollapse("origin")}
          />
          <div className="collapse-title flex items-center text-xl font-medium uppercase">
            <p className="font-redHatDisplay">origin</p>
            {openSection === "origin" ? (
              <FaMinus className="ml-auto" />
            ) : (
              <FaPlus className="ml-auto" />
            )}
          </div>
          <div className="collapse-content">
            <p>{product.origin}</p>
          </div>
        </div>

        {/* Fabric Section */}
        <div className="collapse bg-base-200">
          <input
            type="checkbox"
            checked={openSection === "fabric"}
            onChange={() => toggleCollapse("fabric")}
          />
          <div className="collapse-title flex items-center text-xl font-medium uppercase">
            <p className="font-redHatDisplay">fabric</p>
            {openSection === "fabric" ? (
              <FaMinus className="ml-auto" />
            ) : (
              <FaPlus className="ml-auto" />
            )}
          </div>
          <div className="collapse-content">
            <p>{product.fabric}</p>
          </div>
        </div>

        {/* Care Section */}
        <div className="collapse bg-base-200">
          <input
            type="checkbox"
            checked={openSection === "care"}
            onChange={() => toggleCollapse("care")}
          />
          <div className="collapse-title flex items-center text-xl font-medium uppercase">
            <p className="font-redHatDisplay">care</p>
            {openSection === "care" ? (
              <FaMinus className="ml-auto" />
            ) : (
              <FaPlus className="ml-auto" />
            )}
          </div>
          <div className="collapse-content">
            <p>{product.care}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CatalogItemAccordion;
