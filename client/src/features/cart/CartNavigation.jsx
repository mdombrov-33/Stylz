import ReturnBtn from "@/components/ReturnBtn";
import { Link } from "react-router-dom";

function CartNavigation() {
  return (
    <section className="flex h-full items-end justify-center gap-12 pb-4 pt-6">
      <ReturnBtn to={-1} />

      <Link to="/checkout">
        <button className="btn btn-success font-redHatDisplay text-3xl font-bold">
          Checkout
        </button>
      </Link>
    </section>
  );
}

export default CartNavigation;
