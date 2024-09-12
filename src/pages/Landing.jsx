import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";

function Landing() {
  return (
    <section className="grid h-screen overflow-hidden lg:grid-cols-2">
      <div className="relative">
        <img src={hero1} alt="hero1" className="h-full w-full object-contain" />
      </div>
      <div className="relative">
        <img src={hero2} alt="hero2" className="h-full w-full object-contain" />
      </div>
    </section>
  );
}

export default Landing;
