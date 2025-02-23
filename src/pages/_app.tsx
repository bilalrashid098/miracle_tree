import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Aldrich } from "next/font/google";
import Head from "next/head";

const geistSans = Aldrich({
  variable: "--font-aldrich-sans",
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  const pageTitle = pageProps.title
    ? `${pageProps.title} - Miracle Tree`
    : "Miracle Tree";
  const pageDescription =
    pageProps.description ||
    "Welcome to Miracle Tree, your source for amazing blog posts and insights.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`relative main ${geistSans.variable}`}>
        <CustomCursor />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
