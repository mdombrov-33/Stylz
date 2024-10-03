import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <section className="grid h-screen border-b-2 py-10 pl-6 md:grid-cols-3 md:gap-60">
      <section>
        <h1 className="text-3xl font-bold uppercase">contact us</h1>
        <h3 className="py-6 font-bold uppercase"> customer care</h3>
        <nav className="w-max">
          <ul className="grid grid-cols-3 gap-x-20 sm:grid-cols-4 md:grid-cols-1">
            <NavLink
              to="/contact"
              className="link-hover mt-2 w-max transition-all duration-150 hover:text-accent"
            >
              Contact us
            </NavLink>

            <NavLink
              to="payment"
              className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline"
            >
              Payment
            </NavLink>

            <NavLink
              to="ordering"
              className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline"
            >
              Ordering
            </NavLink>

            <NavLink
              to="shipping"
              className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline"
            >
              Shipping
            </NavLink>

            <NavLink
              to="returns"
              className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline"
            >
              Returns
            </NavLink>

            <NavLink
              to="sizeguide"
              className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline"
            >
              Size Guide
            </NavLink>

            <NavLink
              to="whystylz"
              className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline"
            >
              Why Stylz
            </NavLink>

            <NavLink
              to="feedback"
              className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline"
            >
              Feedback
            </NavLink>

            <NavLink
              to="faqs"
              className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline"
            >
              FAQs
            </NavLink>
          </ul>
        </nav>
      </section>
      <section>
        <Outlet />
      </section>
    </section>
  );
}

export default ContactLayout;
