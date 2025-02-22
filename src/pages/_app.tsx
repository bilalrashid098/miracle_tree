import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Aldrich } from "next/font/google";

const geistSans = Aldrich({
  variable: "--font-aldrich-sans",
  subsets: ["latin"],
  weight: "400",
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`relative main ${geistSans.variable}`}
    >
      <CustomCursor />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
