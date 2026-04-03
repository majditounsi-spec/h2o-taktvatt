import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import Testimonials from "@/components/roof/Testimonials";
import { Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OmdomenPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Omdömen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/95 via-[#0c1a2e]/80 to-[#0c1a2e]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4].map((i) => (
              <Star key={i} className="w-7 h-7 fill-orange-400 text-orange-400" />
            ))}
            <StarHalf className="w-7 h-7 fill-orange-400 text-orange-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            4.7 av 5 i betyg
          </h1>
          <p className="text-lg text-white/60 max-w-lg mx-auto">
            Vi lägger ner stor omsorg i varje jobb. Här är vad några av våra
            kunder i Kalmar län tycker.
          </p>
        </div>
      </section>

      <Testimonials />

      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Vill du bli vår nästa nöjda kund?</h2>
          <p className="text-blue-100/60 mb-8">Ring oss eller fyll i formuläret – besiktningen är alltid kostnadsfri.</p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-6">
            <Link to="/kontakt">Kontakta oss</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OmdomenPage;
