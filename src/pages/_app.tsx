import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Aldrich, Playfair_Display } from "next/font/google";

const geistSans = Aldrich({
  variable: "--font-aldrich-sans",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["cyrillic"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`relative main ${geistSans.variable} ${geistMono.variable}`}
    >
      <CustomCursor />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
