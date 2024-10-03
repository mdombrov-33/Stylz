function ContactUs() {
  return (
    <section className="grid h-screen py-10 pl-12 md:grid-cols-3 md:gap-60">
      <section>
        <h2 className="text-3xl font-bold uppercase">contact us</h2>
        <h3 className="py-6 font-bold uppercase"> customer care</h3>
        <nav className="w-max">
          <ul className="grid grid-cols-3 gap-x-20 sm:grid-cols-4 md:grid-cols-1">
            <li className="link-hover mt-2 w-max transition-all duration-150 hover:text-accent">
              Contact us
            </li>
            <li className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline">
              Payment
            </li>
            <li className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline">
              Ordering
            </li>
            <li className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline">
              Shipping
            </li>
            <li className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline">
              Returns
            </li>
            <li className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline">
              Size Guide
            </li>
            <li className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline">
              Why Stylz
            </li>
            <li className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline">
              Feedback
            </li>
            <li className="mt-2 w-max transition-all duration-150 hover:text-accent hover:underline">
              FAQs
            </li>
          </ul>
        </nav>
      </section>
      <section className="text-2xl font-bold uppercase">Live support</section>
      <div className="text-2xl font-bold uppercase">main office</div>
    </section>
  );
}

export default ContactUs;
