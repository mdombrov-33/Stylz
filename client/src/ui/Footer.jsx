import toast from "react-hot-toast";

function Footer() {
  const handleToastSubscribe = (event) => {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    toast.promise(
      new Promise((resolve) => {
        // Simulate async operation
        setTimeout(() => resolve("Subscribed!"), 2000);
      }),
      {
        loading: "Subscribing...",
        success: "Subscribed!",
        error: "Error! Please try again.",
      },
    );
  };
  return (
    <footer id="footer" className="bg-info-content">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-center gap-4 text-accent">
            <svg
              id="logo-15"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              {" "}
              <path
                d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                className="text-accent"
              ></path>{" "}
              <path
                d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                className="text-accent"
              ></path>{" "}
              <path
                d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                className="text-accent"
              ></path>{" "}
              <path
                d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                className="text-accent"
              ></path>{" "}
            </svg>
            <h4 className="font-redHatDisplay text-2xl font-bold">Stylz</h4>
          </div>

          <p className="mt-4 max-w-md text-center leading-relaxed text-gray-300 sm:text-left lg:mt-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-300">About Us</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Company History
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Meet the Team
                </a>
              </li>

              <li>
                <a
                  className="hover:accent text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Employee Handbook
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-300">Our Services</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Branding
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Design
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Marketing
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Advertisement
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-300">Resources</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Online Guides
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Conference Notes
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Forum
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Upcoming Events
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-300">Helpful Links</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-accent"
                  href="#"
                >
                  Support
                </a>
              </li>

              <li>
                <a
                  className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="#"
                >
                  <span className="text-gray-300 transition group-hover:text-accent">
                    Live Chat
                  </span>

                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-accent"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
            <p className="text-lg font-medium text-gray-300">Stay in Touch</p>

            <div className="mx-auto mt-8 max-w-md sm:ms-0">
              <p className="text-center leading-relaxed text-gray-300 ltr:sm:text-left rtl:sm:text-right">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                id, iure consectetur et error hic!
              </p>

              <form className="mt-4">
                <div className="flex flex-col gap-4 text-black sm:flex-row lg:flex-col lg:items-start">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    className="w-full rounded-full border-gray-200 bg-white px-6 py-3 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    type="email"
                    placeholder="Enter your email"
                  />

                  <button
                    className="block rounded-full bg-accent px-8 py-3 font-medium text-black transition hover:bg-neutral-content"
                    type="submit"
                    onClick={handleToastSubscribe}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-6 dark:border-gray-800 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-gray-300">
            Copyright &copy; 2024. All rights reserved.
          </p>

          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-accent transition hover:text-gray-300"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-accent transition hover:text-gray-300"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-accent transition hover:text-gray-300"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
