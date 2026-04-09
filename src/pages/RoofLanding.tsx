import Header from "@/components/roof/Header";
import Hero from "@/components/roof/Hero";
import Services from "@/components/roof/Services";
import Process from "@/components/roof/Process";
import BeforeAfterSlider from "@/components/roof/BeforeAfterSlider";
import About from "@/components/roof/About";
import Testimonials from "@/components/roof/Testimonials";
import CtaBanner from "@/components/roof/CtaBanner";
import Contact from "@/components/roof/Contact";
import Footer from "@/components/roof/Footer";

const RoofLanding = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
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
