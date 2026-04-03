import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import Testimonials from "@/components/roof/Testimonials";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OmdomenPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=2000&q=80" alt="Omdömen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-8 h-8 fill-orange-400 text-orange-400" />
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            <span className="text-gradient-orange">4.9</span> av 5 i betyg
          </h1>
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
            Läs vad våra 3000+ nöjda kunder tycker om vår takvård.
          </p>
        </div>
      </section>

      <Testimonials />

      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Bli vår nästa nöjda kund</h2>
          <p className="text-blue-100/70 mb-8">Kontakta oss för en kostnadsfri offert idag.</p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-10 py-7 shadow-lg">
            <Link to="/kontakt">Kontakta oss</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OmdomenPage;
