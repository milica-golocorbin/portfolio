import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner/Banner";
import AboutMe from "../components/about-me/AboutMe";
import Contact from "../components/contact/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="w-11/12 max-w-screen-2xl h-full mx-auto flex flex-col justify-center items-center py-6 gap-6 xs:py-8 xs:gap-8 s:py-10 s:gap-10 sm:w-10/12 sm:gap-12 sm:py-12 md:py-14 md:gap-14 lg:py-16 lg:gap-16 xl:py-20 xl:gap-20 2xl:py-24 2xl:gap-24">
        <Banner />
        <AboutMe />
        <Contact />
      </section>
    </>
  );
};

export default Home;
