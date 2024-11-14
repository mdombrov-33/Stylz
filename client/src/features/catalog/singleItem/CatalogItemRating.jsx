function CatalogItemRating() {
  return (
    <>
      <section className="rating flex flex-col items-center justify-center">
        <div>
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
        </div>

        <p className="text-pretty text-center text-sm">Based on 5 reviews</p>
      </section>
    </>
  );
}

export default CatalogItemRating;
