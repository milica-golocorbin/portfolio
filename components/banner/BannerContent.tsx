const BannerContent = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center w-full p-2 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur xs:w-11/12 xs:p-3 s:p-4 sm:w-4/5 sm:p-5 md:p-6 lg:w-8/12 lg:p-10 xl:p-12 2xl:w-1/2 2xl:p-14">
      <h1 className="text-2xl font-bold font-heading xs:leading-10 s:text-3xl s:leading-10 md:text-4xl md:leading-[3rem] xl:text-5xl xl:leading-[3.5rem]">
        I am{" "}
        <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-teal-600">
          <span className="relative">Milica Goločorbin</span>
        </span>{" "}
        and I love building websites and applications!
      </h1>
    </div>
  );
};

export default BannerContent;
