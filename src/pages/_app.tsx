import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-orbitron",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${orbitron.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
