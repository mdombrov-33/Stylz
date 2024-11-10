import useThemeStore from "@/store/theme-store";

function CatalogItemImages({ product }) {
  const baseURL = "https://stylz-shop.onrender.com";
  const { theme } = useThemeStore((state) => state);

  return (
    <>
      <img
        src={`${baseURL}/${product.image}`}
        className={`${theme === "lemonade" ? "brightness-75 saturate-100" : "brightness-50 saturate-100"} h-full w-full shrink-0 object-cover`}
        alt={product.name}
      />
      <img
        src={`${baseURL}/${product.altImage}`}
        className={`${theme === "lemonade" ? "brightness-75 saturate-100" : "brightness-50 saturate-100"} b-r-2 h-full w-full shrink-0 border-l-2 border-r-2 border-stone-950 object-cover`}
        alt={product.name}
      />
      <img
        src={`${baseURL}/${product.altImage2}`}
        className={`${theme === "lemonade" ? "brightness-75 saturate-100" : "brightness-50 saturate-100"} h-full w-full shrink-0 border-b-2 border-t-2 border-stone-950 object-cover saturate-150`}
        alt={product.name}
      />
      <img
        src={`${baseURL}/${product.altImage3}`}
        className={`${theme === "lemonade" ? "brightness-75 saturate-100" : "brightness-50 saturate-100"} h-full w-full shrink-0 border-b-2 border-l-2 border-r-2 border-t-2 border-stone-950 object-cover`}
        alt={product.name}
      />
    </>
  );
}

export default CatalogItemImages;
