import axios from "axios";
import { useEffect } from "react";

function Catalog() {
  useEffect(() => {
    const fetchCatalog = async () => {
      const response = await axios(
        "https://stylz-shop.onrender.com/api/catalog"
      );
      console.log(response);
    };
    fetchCatalog();
  }, []);

  return <div>aboba</div>;
}

export default Catalog;
