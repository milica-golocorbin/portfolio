import type { AppProps } from "next/app";
import Head from "next/head";
// package for toggling light and dark mode
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
