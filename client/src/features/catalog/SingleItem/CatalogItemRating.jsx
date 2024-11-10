function CatalogItemRating() {
  return (
    <>
      <section className="justify- rating flex items-center">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          disabled={true}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          disabled={true}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          disabled={true}
          defaultChecked
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          disabled={true}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          disabled={true}
        />
      </section>
      <p className="mt-2 text-pretty text-center text-sm">Based on 5 reviews</p>
    </>
  );
}

export default CatalogItemRating;
