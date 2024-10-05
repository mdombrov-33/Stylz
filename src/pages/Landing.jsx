import { useEffect, useRef } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import { FaArrowDown } from "react-icons/fa";
import Collab from "@/features/home/Collab";
import Showcase from "@/features/home/Showcase";

function Landing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (sectionRef.current) {
        sectionRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      <section className="grid h-[80dvh] grid-cols-2">
        <div
          style={{ backgroundImage: `url(${hero1})` }}
          className="h-[80dvh] w-full bg-cover"
        >
          aboba
        </div>
        <div
          style={{ backgroundImage: `url(${hero2})` }}
          className="h-[80dvh] w-full bg-cover"
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
