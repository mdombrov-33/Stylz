import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";

import { FaArrowDown } from "react-icons/fa";
import { LandingFooter, Showcase } from "../components";

function Landing() {
  return (
    <>
      <section className="grid h-[80dvh] overflow-hidden lg:grid-cols-2">
        <div
          className="h-full bg-cover"
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <button className="btn mt-16 border-black bg-accent font-bold uppercase lg:text-2xl">
                check new arrivals
              </button>
            </div>
          </div>
        </div>
        <div
          className="hidden h-full border-t-2 border-stone-950 bg-cover lg:grid lg:grid-rows-1 lg:border-l-2 lg:border-t-0 lg:border-stone-950"
          style={{ backgroundImage: `url(${hero2})` }}
        >
          <div className="relative flex h-full w-full items-center bg-black bg-opacity-50">
            <div className="text-white">
              <button className="btn ml-4 border-2 border-stone-950 lg:text-3xl">
                - Season 2024
              </button>
              <h1 className="absolute top-[26rem] ml-4 text-4xl font-bold capitalize">
                creating unique styles.
              </h1>
              <p className="absolute top-[32rem] ml-4">
                From concept to execution, we craft timeless identities
              </p>
              <p className="absolute top-[34rem] ml-4">
                that resonate with your audience.
              </p>
            </div>
          </div>
          <div className="flex h-20 place-items-center justify-between border-b-2 border-t-2 border-stone-950 bg-accent px-4 font-redHatDisplay font-bold uppercase">
            <span>Scroll Down</span>
            <a href="#scroll-down">
              <FaArrowDown />
            </a>
          </div>
        </div>
      </section>
      <LandingFooter />
      <Showcase />
    </>
  );
}
export default Landing;
