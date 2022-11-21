import type { NextPage } from "next";
import Head from "next/head";

const Project: NextPage = () => {
  return (
    <>
      <Head>
        <title>Single Project</title>
      </Head>
      <section className="w-11/12 max-w-screen-2xl h-full mx-auto flex flex-col justify-center items-center py-6 gap-6 xs:py-8 xs:gap-8 s:py-10 s:gap-10 sm:w-10/12 sm:gap-12 sm:py-12 md:py-14 md:gap-14 lg:py-16 lg:gap-16 xl:py-20 xl:gap-20 2xl:py-24 2xl:gap-24">
        <h1>Single Project Page</h1>
      </section>
    </>
  );
};

export default Project;
