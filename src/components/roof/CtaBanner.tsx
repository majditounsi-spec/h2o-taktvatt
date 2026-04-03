import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(199,89%,38%)]/15 to-[hsl(152,60%,42%)]/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
          Redo att ge ditt tak ett nytt liv?
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          Boka en kostnadsfri besiktning idag och få en offert inom 24 timmar.
          Vi hjälper dig att skydda och förnya ditt tak med professionell takvård.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[hsl(199,89%,38%)] to-[hsl(152,60%,42%)] hover:opacity-90 text-white border-0 text-base px-8 py-6 rounded-xl"
          >
            <a href="#kontakt" style={{ fontFamily: 'Inter, sans-serif' }}>
              Begär offert nu
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6 rounded-xl bg-transparent"
          >
            <a href="tel:+46701234567" style={{ fontFamily: 'Inter, sans-serif' }}>
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
