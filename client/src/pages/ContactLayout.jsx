import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <>
      <main className="grid h-full md:grid-cols-3">
        <section className="mt-12 flex flex-col items-center md:col-span-1 md:ml-12 md:items-stretch md:justify-start">
          <h1 className="text-3xl font-bold uppercase tracking-wider">
            contact us
          </h1>
          <h3 className="py-6 font-bold uppercase"> customer care</h3>
          <nav className="w-max">
            <ul className="grid grid-cols-3 gap-x-20 sm:grid-cols-4 md:grid-cols-1">
              {[
                { to: "contactinfo", label: "Contact us" },
                { to: "payment", label: "Payment" },
                { to: "ordering", label: "Ordering" },
                { to: "shipping", label: "Shipping" },
                { to: "returns", label: "Returns" },
                { to: "sizeguide", label: "Size Guide" },
                { to: "whystylz", label: "Why Stylz" },
                { to: "feedback", label: "Feedback" },
                { to: "faqs", label: "FAQs" },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `mt-2 w-max font-redHatDisplay transition-all duration-150 ${
                      isActive ? "text-accent" : "hover:text-accent"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </nav>
        </section>
        <div className="md:col-span-2">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default ContactLayout;
