import Header from "@/components/roof/Header";
import Hero from "@/components/roof/Hero";
import Faq from "@/components/roof/Faq";
import Services from "@/components/roof/Services";
import Process from "@/components/roof/Process";
import BeforeAfterSlider from "@/components/roof/BeforeAfterSlider";
import About from "@/components/roof/About";
import Testimonials from "@/components/roof/Testimonials";
import CtaBanner from "@/components/roof/CtaBanner";
import Contact from "@/components/roof/Contact";
import Footer from "@/components/roof/Footer";
import { useSeo } from "@/hooks/useSeo";

const RoofLanding = () => {
  useSeo({
    title: "H2O Taktvätt & Takmålning – Kalmar län, Öland, Blekinge, Skåne & Halland",
    description:
      "Professionell taktvätt, takmålning, fasadtvätt och anti-alg behandling med 10 års garanti. Kostnadsfri offert i Kalmar län, Öland, Blekinge, Skåne och Halland.",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Faq />
        <Services />
        <Process />
        <BeforeAfterSlider />
        <About />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default RoofLanding;
