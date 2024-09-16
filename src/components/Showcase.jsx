import showcase1 from "../assets/showcase/showcase1.jpg";
import showcase1small from "../assets/showcase/showcase1small.jpg";
import showcase2 from "../assets/showcase/showcase2.jpg";
import showcase2small from "../assets/showcase/showcase2small.jpg";
import showcase3 from "../assets/showcase/showcase3.jpg";
import showcase3small from "../assets/showcase/showcase3small.jpg";
import showcase4 from "../assets/showcase/showcase4.jpg";
import showcase4small from "../assets/showcase/showcase4small.jpg";
import showcase5 from "../assets/showcase/showcase5.jpg";
import showcase5small from "../assets/showcase/showcase5small.jpg";
import showcase6 from "../assets/showcase/showcase6.jpg";
import showcase6small from "../assets/showcase/showcase6small.jpg";
import showcase7 from "../assets/showcase/showcase7.jpg";
import showcase7small from "../assets/showcase/showcase7small.jpg";
import showcase8 from "../assets/showcase/showcase8.jpg";
import showcase8small from "../assets/showcase/showcase8small.jpg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Showcase() {
  const [ref1, isIntersecting1] = useIntersectionObserver();
  const [ref2, isIntersecting2] = useIntersectionObserver();
  const [ref3, isIntersecting3] = useIntersectionObserver();
  const [ref4, isIntersecting4] = useIntersectionObserver();
  const [ref5, isIntersecting5] = useIntersectionObserver();
  const [ref6, isIntersecting6] = useIntersectionObserver();
  const [ref7, isIntersecting7] = useIntersectionObserver();
  const [ref8, isIntersecting8] = useIntersectionObserver();

  return (
    <div className="grid">
      <div className="grid grid-cols-4 sm:grid-cols-4 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2">
        <div
          ref={ref1}
          className="h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-center"
          style={{
            backgroundImage: isIntersecting1
              ? `url(${showcase1})`
              : `url(${showcase1small})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          ref={ref2}
          className="h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover bg-center sm:bg-center md:bg-center xl:bg-[center_-3rem]"
          style={{
            backgroundImage: isIntersecting2
              ? `url(${showcase2})`
              : `url(${showcase2small})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          ref={ref3}
          className="h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-top"
          style={{
            backgroundImage: isIntersecting3
              ? `url(${showcase3})`
              : `url(${showcase3small})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          ref={ref4}
          className="h-[50dvh] border-b-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-top"
          style={{
            backgroundImage: isIntersecting4
              ? `url(${showcase4})`
              : `url(${showcase4small})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          ref={ref5}
          className="md-block h-[50dvh] border-r-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-top"
          style={{
            backgroundImage: isIntersecting5
              ? `url(${showcase5})`
              : `url(${showcase5small})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          ref={ref6}
          className="md-block h-[50dvh] border-r-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-top"
          style={{
            backgroundImage: isIntersecting6
              ? `url(${showcase6})`
              : `url(${showcase6small})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          ref={ref7}
          className="md-block h-[50dvh] border-r-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-top"
          style={{
            backgroundImage: isIntersecting7
              ? `url(${showcase7})`
              : `url(${showcase7small})`,
            filter: "brightness(70%)",
          }}
        ></div>
        <div
          ref={ref8}
          className="md-block h-[50dvh] border-r-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-top"
          style={{
            backgroundImage: isIntersecting8
              ? `url(${showcase8})`
              : `url(${showcase8small})`,
            filter: "brightness(70%)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Showcase;
