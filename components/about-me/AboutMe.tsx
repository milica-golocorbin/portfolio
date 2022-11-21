import AboutMeContent from "./AboutMeContent";
import { AboutMeImage } from "./AboutMeImage";

const AboutMe = () => {
  return (
    <section className="w-full max-w-screen-xl text-center s:text-left">
      <h2 className="pb-6 text-5xl font-bold text-transparent s:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl s:pb-7 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14 sm:text-left bg-clip-text bg-gradient-to-r from-teal-600 to-slate-800">
        About Me
      </h2>

      <div className="text-center mx-auto grid md:grid-cols-3 md:gap-4">
        <AboutMeImage />
        <AboutMeContent />
      </div>
    </section>
  );
};

export default AboutMe;
