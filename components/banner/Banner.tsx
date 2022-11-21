import BannerImage from "./BannerImage";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <section className="relative text-center">
      <BannerImage />
      <BannerContent />
    </section>
  );
};

export default Banner;
