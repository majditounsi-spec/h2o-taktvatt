import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0c1a2e]">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="absolute top-10 right-[20%] w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-4">Redo?</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
          Ge ditt tak nytt liv
        </h2>
        <p className="text-white/50 mb-10 max-w-lg mx-auto">
          Boka en kostnadsfri besiktning. Vi återkommer med offert inom 24 timmar.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-0 text-sm px-8 py-6 rounded-xl font-semibold">
            <Link to="/kontakt">
              Begär offert <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/15 text-white hover:bg-white/5 text-sm px-8 py-6 rounded-xl bg-transparent">
            <a href="tel:+46701234567">
              <Phone className="mr-2 w-4 h-4" /> 070-123 45 67
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
