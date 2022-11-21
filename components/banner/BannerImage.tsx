import Image from "next/image";
import img from "../../public/images/main.jpg";

const BannerImage = () => {
  return (
    <Image
      src={img}
      placeholder="blur"
      alt="people sitting around table"
      priority={true}
      width={1280}
      height={853}
    />
  );
};

export default BannerImage;
