import type { NextPage } from "next";
import Head from "next/head";
import ButtonSecondary from "../components/buttons/ButtonSecondary";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <section className="w-11/12 max-w-2xl mx-auto text-center">
        <h1 className="font-bold text-9xl">404</h1>
        <h2 className="py-8 text-4xl font-bold md:text-6xl">
          Page can not be found!
        </h2>
        <ButtonSecondary route="/">back home</ButtonSecondary>
      </section>
    </>
  );
};

export default NotFound;
