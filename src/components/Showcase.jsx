import { memo } from "react";
import showcase1 from "../assets/showcase/showcase1.jpg";
import showcase2 from "../assets/showcase/showcase2.jpg";
import showcase3 from "../assets/showcase/showcase3.jpg";
import showcase4 from "../assets/showcase/showcase4.jpg";
import showcase5 from "../assets/showcase/showcase5.jpg";
import showcase6 from "../assets/showcase/showcase6.jpg";
import showcase7 from "../assets/showcase/showcase7.jpg";
import showcase8 from "../assets/showcase/showcase8.jpg";
import showcase1_small from "../assets/showcase/showcase1-small.jpg";
import showcase2_small from "../assets/showcase/showcase2-small.jpg";
import showcase3_small from "../assets/showcase/showcase3-small.jpg";
import showcase4_small from "../assets/showcase/showcase4-small.jpg";
import showcase5_small from "../assets/showcase/showcase5-small.jpg";
import showcase6_small from "../assets/showcase/showcase6-small.jpg";
import showcase7_small from "../assets/showcase/showcase7-small.jpg";
import showcase8_small from "../assets/showcase/showcase8-small.jpg";

function Showcase() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-4">
      <img
        src={showcase1}
        className="h-full min-h-96 border-b-2 border-r-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
      <img
        src={showcase2}
        className="h-full min-h-96 border-b-2 border-r-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
      <img
        src={showcase3}
        className="h-full min-h-96 border-b-2 border-r-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
      <img
        src={showcase4}
        className="posit h-full min-h-96 border-b-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
      <img
        src={showcase5}
        className="h-full min-h-96 border-b-2 border-r-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
      <img
        src={showcase6}
        className="h-full min-h-96 border-b-2 border-r-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
      <img
        src={showcase7}
        className="h-full min-h-96 border-b-2 border-r-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
      <img
        src={showcase8}
        className="h-full min-h-96 border-b-2 border-stone-950 object-cover object-center brightness-75"
        loading="lazy"
        alt=""
      />
    </div>
  );
}

export default memo(Showcase);
