import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function CheckoutNavigation() {
  const navigate = useNavigate();

  return (
    <section className="items flex h-full items-center justify-center gap-2 px-4 pb-2 pt-6 md:gap-12">
      <button
        onClick={() => navigate(-1)}
        className="group btn h-12 w-36 text-xl font-bold uppercase"
      >
        <IoArrowBackCircle className="inline transform transition-transform group-hover:-translate-x-1" />
        Return
      </button>

      <Link to="/checkout">
        <button className="btn btn-success h-12 w-36 font-redHatDisplay text-xl font-bold uppercase lg:w-44">
          Next
        </button>
      </Link>
    </section>
  );
}

export default CheckoutNavigation;
