import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hem" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(199,89%,38%)]/20 to-[hsl(152,60%,42%)]/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
              10 års garanti på takmålning
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Ge ditt tak <br />
            <span className="text-gradient">nytt liv</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Professionell taktvätt och takmålning som skyddar och förnyar ditt tak.
            Vi hjälper fastighetsägare i hela Sverige med certifierad takvård sedan 2008.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[hsl(199,89%,38%)] to-[hsl(152,60%,42%)] hover:opacity-90 text-white border-0 text-base px-8 py-6 rounded-xl"
            >
              <a href="#kontakt" style={{ fontFamily: 'Inter, sans-serif' }}>
                Boka kostnadsfri besiktning
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6 rounded-xl bg-transparent"
            >
              <a href="#tjanster" style={{ fontFamily: 'Inter, sans-serif' }}>Se våra tjänster</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Award className="w-5 h-5 text-emerald-400 mr-1" />
                <span className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>15+</span>
              </div>
              <span className="text-xs sm:text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>Års erfarenhet</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <span className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>3000+</span>
              </div>
              <span className="text-xs sm:text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>Nöjda kunder</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Clock className="w-5 h-5 text-emerald-400 mr-1" />
                <span className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>10 år</span>
              </div>
              <span className="text-xs sm:text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>Garanti</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(210, 20%, 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
