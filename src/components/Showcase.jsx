import {
  showcase1,
  showcase2,
  showcase3,
  showcase4,
  showcase5,
  showcase6,
  showcase7,
  showcase8,
} from "../assets/showcase";

function Showcase() {
  return (
    <div className="grid">
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2">
        <div
          className="hidden h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover md:block"
          style={{
            backgroundImage: `url(${showcase1})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          className="hidden h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover md:block"
          style={{
            backgroundImage: `url(${showcase2})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          className="hidden h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover md:block"
          style={{
            backgroundImage: `url(${showcase3})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          className="hidden h-[50dvh] border-b-2 border-stone-950 bg-cover md:block"
          style={{
            backgroundImage: `url(${showcase4})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          className="md-block hidden h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover md:block"
          style={{
            backgroundImage: `url(${showcase5})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          className="hidden h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover bg-center md:block"
          style={{
            backgroundImage: `url(${showcase6})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          className="hidden h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover bg-center md:block"
          style={{
            backgroundImage: `url(${showcase7})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          className="hidden h-[50dvh] border-b-2 border-stone-950 bg-cover bg-center md:block"
          style={{
            backgroundImage: `url(${showcase8})`,
            filter: "brightness(70%)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Showcase;
