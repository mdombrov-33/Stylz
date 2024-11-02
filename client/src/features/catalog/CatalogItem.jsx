function CatalogItems({ name, description, price, image, altImage, gender }) {
  const baseURL = "https://stylz-shop.onrender.com";

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={`${baseURL}/${image}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default CatalogItems;
