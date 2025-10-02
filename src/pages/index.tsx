import Navbar from "@/components/common/navbar";
import {
  About,
  Contact,
  Footer,
  Hero,
  Services,
} from "@/components/landing/_sections";
import BackgroundWrapper from "@/components/landing/BackgroundWrapper";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <BackgroundWrapper>
        <About />
        <Services />
        {/* <Portfolio />
        <Team />
        <Testimonials /> */}
        <Contact />
      </BackgroundWrapper>
      <Footer />
    </main>
  );
}
