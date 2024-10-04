import showcase1 from "../assets/showcase/showcase1.jpg";
import showcase2 from "../assets/showcase/showcase2.jpg";
import showcase3 from "../assets/showcase/showcase3.jpg";
import showcase4 from "../assets/showcase/showcase4.jpg";
import showcase5 from "../assets/showcase/showcase5.jpg";
import showcase6 from "../assets/showcase/showcase6.jpg";
import showcase7 from "../assets/showcase/showcase7.jpg";
import showcase8 from "../assets/showcase/showcase8.jpg";




  // <div className="grid">
  //     <div className="grid grid-cols-4 sm:grid-cols-4 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2">
  //       <div
  //         ref={ref1}
  //         className="h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-center"
  //         style={{
  //           backgroundImage: isIntersecting1
  //             ? `url(${showcase1})`
  //             : `url(${showcase1small})`,
  //           filter: "brightness(70%)",
  //         }}
  //       ></div>
  //       <div
  //         ref={ref2}
  //         className="h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover bg-center sm:bg-center md:bg-center 2xl:bg-[center_-3rem]"
  //         style={{
  //           backgroundImage: isIntersecting2
  //             ? `url(${showcase2})`
  //             : `url(${showcase2small})`,
  //           filter: "brightness(70%)",
  //         }}
  //       ></div>
  //       <div
  //         ref={ref3}
  //         className="h-[50dvh] border-b-2 border-r-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-top"
  //         style={{
  //           backgroundImage: isIntersecting3
  //             ? `url(${showcase3})`
  //             : `url(${showcase3small})`,
  //           filter: "brightness(70%)",
  //         }}
  //       ></div>
  //       <div
  //         ref={ref4}
  //         className="h-[50dvh] border-b-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-top"
  //         style={{
  //           backgroundImage: isIntersecting4
  //             ? `url(${showcase4})`
  //             : `url(${showcase4small})`,
  //           filter: "brightness(70%)",
  //         }}
  //       ></div>
  //       <div
  //         ref={ref5}
  //         className="md-block h-[50dvh] border-r-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-top"
  //         style={{
  //           backgroundImage: isIntersecting5
  //             ? `url(${showcase5})`
  //             : `url(${showcase5small})`,
  //           filter: "brightness(70%)",
  //         }}
  //       ></div>
  //       <div
  //         ref={ref6}
  //         className="md-block h-[50dvh] border-r-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-top"
  //         style={{
  //           backgroundImage: isIntersecting6
  //             ? `url(${showcase6})`
  //             : `url(${showcase6small})`,
  //           filter: "brightness(70%)",
  //         }}
  //       ></div>
  //       <div
  //         ref={ref7}
  //         className="md-block h-[50dvh] border-r-2 border-stone-950 bg-cover bg-center sm:bg-center lg:bg-top"
  //         style={{
  //           backgroundImage: isIntersecting7
  //             ? `url(${showcase7})`
  //             : `url(${showcase7small})`,
  //           filter: "brightness(70%)",
  //         }}
  //       ></div>
  //       <div
  //         ref={ref8}
  //         className="md-block h-[50dvh] border-r-2 border-stone-950 bg-cover bg-top sm:bg-center 2xl:bg-[center_-5rem]"
  //         style={{
  //           backgroundImage: isIntersecting8
  //             ? `url(${showcase8})`
  //             : `url(${showcase8small})`,
  //           filter: "brightness(70%)",
  //         }}
  //       ></div>
  //     </div>
  //   </div>





function Showcase() {

  return (
    <div className="grid grid-cols-4 md:grid-cols-4">

    <img src={showcase1} className="brightness-75 object-cover  h-full" loading="lazy" alt="" />
    <img src={showcase2}  className="brightness-75 object-cover h-full" loading="lazy" alt="" />
    <img src={showcase3}  className="brightness-75 object-cover h-full" loading="lazy" alt="" />
    <img src={showcase4}  className="brightness-75 object-cover h-full" loading="lazy" alt="" />
    <img src={showcase5}  className="brightness-75 object-cover h-full" loading="lazy" alt="" />
    <img src={showcase6}  className="brightness-75 object-cover h-full" loading="lazy" alt="" />
    <img src={showcase7}  className="brightness-75 object-cover h-full" loading="lazy" alt="" />
    <img src={showcase8}  className="brightness-75 object-cover h-full" loading="lazy" alt="" />
   
    </div>
  );
}

export default Showcase;
