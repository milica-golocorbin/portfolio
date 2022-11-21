import Image from "next/image";
import img from "../../public/images/me.jpg";

export const AboutMeImage = () => {
  return (
    <div className="mx-auto md:ml-0 md:col-span-1">
      <Image
        className="rounded-md"
        width={158}
        height={202}
        priority={true}
        src={img}
        placeholder="blur"
        alt="my image"
      />
      <h4 className="py-6 font-bold uppercase">Milica Goločorbin</h4>
      <h5 className="font-semibold pb-6 md:pb-0">Fullstack Developer</h5>
    </div>
  );
};
