import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-sm font-semibold text-orange-300">Boka din kostnadsfria besiktning</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Redo att ge ditt tak
          <br />
          <span className="text-gradient-orange">ett nytt liv?</span>
        </h2>

        <p className="text-xl text-blue-100/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Få en offert inom 24 timmar. Professionell takvård med garanti.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white border-0 text-lg px-10 py-7 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
          >
            <a href="#kontakt">
              Begär offert nu
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 text-lg px-10 py-7 rounded-2xl bg-white/5 backdrop-blur-sm"
          >
            <a href="tel:+46701234567">
              <Phone className="mr-2 w-5 h-5" />
              070-123 45 67
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
