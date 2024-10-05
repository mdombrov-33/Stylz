import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import { FaArrowDown } from "react-icons/fa";
import Collab from "@/features/home/Collab";
import Showcase from "@/features/home/Showcase";

function Landing() {
  return (
    <>
      <section className="grid h-[80svh] grid-cols-2">
        <div
          style={{ backgroundImage: `url(${hero1})` }}
          className="h-full w-full bg-cover"
        >
          aboba
        </div>
        <div
          style={{ backgroundImage: `url(${hero2})` }}
          className="h-full w-full bg-cover"
        >
          aboba
        </div>
      </section>
      <Collab />
      <Showcase />
    </>
  );
}

export default Landing;
