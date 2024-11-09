import { FaArrowDown } from "react-icons/fa";
import Collab from "@/features/home/Collab";
import Showcase from "@/features/home/Showcase";
import { Link } from "react-router-dom";
import useThemeStore from "@/store/theme-store";

function Landing() {
  const { theme } = useThemeStore((state) => state);

  return (
    <>
      <main className="grid h-[80svh] overflow-hidden lg:grid-cols-2">
        <section
          className="h-full w-full border-b-2 border-stone-950 bg-cover"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dymitbtl3/image/upload/v1730720452/hero1_aqnkys.jpg)`,
          }}
        >
          <section className="flex h-full w-full items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <Link to="/new">
                <button
                  className={`${theme === "lemonade" ? "hover:text-black" : "hover:text-white"} btn mt-16 border-black bg-accent font-redHatDisplay font-bold uppercase text-black lg:text-2xl`}
                >
                  check new arrivals
                </button>
              </Link>
            </div>
          </section>
        </section>
        <section
          className="hidden h-full w-full border-t-2 border-stone-950 bg-cover lg:grid lg:grid-rows-1 lg:border-l-2 lg:border-t-0 lg:border-stone-950"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dymitbtl3/image/upload/v1730720460/hero2_o03fe3.jpg)`,
          }}
        >
          <section className="relative flex h-full w-full items-center bg-black bg-opacity-50">
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
          </section>
          <section className="flex h-20 place-items-center justify-between border-b-2 border-t-2 border-stone-950 bg-accent px-4 font-redHatDisplay font-bold uppercase">
            <span className="text-black">Scroll Down</span>
            <a href="#scroll-down">
              <FaArrowDown className="text-black" />
            </a>
          </section>
        </section>
      </main>
      <Collab />
      <Showcase />
    </>
  );
}
export default Landing;
