import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";

import { FaArrowDown } from "react-icons/fa";
import Collab from "@/features/home/Collab";
import Showcase from "@/features/home/Showcase";

function Landing() {
  return (
    <>
      <section className="grid h-[80svh] overflow-hidden lg:grid-cols-2">
        <div
          className="h-full w-full border-b-2 border-stone-950 bg-cover"
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <button className="btn mt-16 border-black bg-accent font-redHatDisplay font-bold uppercase lg:text-2xl">
                check new arrivals
              </button>
            </div>
          </div>
        </div>
        <div
          className="hidden h-full w-full border-t-2 border-stone-950 bg-cover lg:grid lg:grid-rows-1 lg:border-l-2 lg:border-t-0 lg:border-stone-950"
          style={{ backgroundImage: `url(${hero2})` }}
        >
          <div className="relative flex h-full w-full items-center bg-black bg-opacity-50">
            <div className="text-white">
              <span className="ml-4 cursor-default rounded-lg border-2 border-stone-950 bg-white p-2 font-redHatDisplay font-bold uppercase text-black lg:text-3xl">
                - season 2024
              </span>
              <h1 className="absolute top-[26rem] ml-4 font-delaGothicOne text-4xl font-medium capitalize">
                creating unique styles.
              </h1>
              <p className="absolute top-[32rem] ml-4 font-redHatDisplay">
                From concept to execution, we craft timeless identities
              </p>
              <p className="absolute top-[34rem] ml-4 font-redHatDisplay">
                that resonate with your character.
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
      <Collab />
      <Showcase />
    </>
  );
}
export default Landing;
