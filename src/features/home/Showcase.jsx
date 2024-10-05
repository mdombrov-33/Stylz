// import showcase1 from "../../assets/showcase/showcase1.jpg";
import showcase2 from "../../assets/showcase/showcase2.jpg";
import showcase3 from "../../assets/showcase/showcase3.jpg";
// import showcase4 from "../../assets/showcase/showcase4.jpg";
// import showcase5 from "../../assets/showcase/showcase5.jpg";
// import showcase6 from "../../assets/showcase/showcase6.jpg";
import showcase7 from "../../assets/showcase/showcase7.jpg";
import showcase8 from "../../assets/showcase/showcase8.jpg";

function Showcase() {
  return (
    <div className="grid h-full grid-cols-4 md:grid-cols-4">
      <img
        src={showcase2}
        className="h-dvh min-h-96 border-b-2 border-r-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
      <img
        src={showcase7}
        className="h-dvh min-h-96 border-b-2 border-r-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
      <img
        src={showcase3}
        className="h-dvh min-h-96 border-b-2 border-r-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
      <img
        src={showcase8}
        className="h-dvh min-h-96 border-b-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
    </div>
  );
}

export default Showcase;
