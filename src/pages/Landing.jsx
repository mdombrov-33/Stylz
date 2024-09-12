import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";

import { FaArrowDown } from "react-icons/fa";
import { LandingFooter } from "../components";

function Landing() {
  return (
    <>
      <section className="grid h-[80dvh] lg:grid-cols-2">
        <div
          className="h-full bg-cover"
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <button className="btn border-black bg-accent uppercase">
                check new arrivals
              </button>
            </div>
          </div>
        </div>
        <div
          className="hidden h-full border-t-2 border-stone-950 bg-cover lg:grid lg:grid-rows-1 lg:border-l-2 lg:border-t-0 lg:border-stone-950"
          style={{ backgroundImage: `url(${hero2})` }}
        >
          <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold capitalize">
                creating unique styles
              </h1>
              <p className="capitalize">from concept to execution</p>
            </div>
          </div>
          <div className="flex h-20 place-items-center justify-between border-b-2 border-t-2 border-stone-950 bg-accent px-4 font-redHatDisplay font-bold uppercase">
            <span>Scroll Down</span>
            <span>
              <FaArrowDown />
            </span>
          </div>
        </div>
      </section>
      <LandingFooter />
    </>
  );
}
export default Landing;
