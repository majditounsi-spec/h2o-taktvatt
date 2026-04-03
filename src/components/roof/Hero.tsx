import { ArrowRight, Shield, Phone, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="hem" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2000&q=80"
          alt="Tak som tvättas professionellt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent" />
      </div>

      {/* Orange accent glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-full px-5 py-2.5 mb-8">
              <Shield className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">
                Certifierad takvård sedan 2008
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
              Professionell{" "}
              <span className="text-gradient-orange">taktvätt</span> &{" "}
              <span className="text-gradient-blue">takmålning</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/70 max-w-lg mb-10 leading-relaxed">
              Vi förnyar och skyddar ditt tak med marknadens bästa produkter.
              Kostnadsfri besiktning, 10 års garanti och professionellt resultat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white border-0 text-base px-8 py-7 rounded-2xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                <a href="#kontakt">
                  Kostnadsfri offert
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-7 rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <a href="tel:+46701234567">
                  <Phone className="mr-2 w-5 h-5" />
                  070-123 45 67
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 text-white/50">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-[#0a1628] flex items-center justify-center text-[10px] font-bold text-white">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm"><strong className="text-white">3000+</strong> nöjda kunder</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-orange-400 fill-orange-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm ml-1"><strong className="text-white">4.9</strong> betyg</span>
              </div>
            </div>
          </div>

          {/* Right side - Video/Image card */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80"
                alt="Professionell taktvätt"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Play button overlay */}
              <button
                onClick={() => setShowVideo(!showVideo)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 rounded-full bg-orange-500/90 flex items-center justify-center group-hover:bg-orange-500 transition-all group-hover:scale-110 shadow-lg shadow-orange-500/30">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </button>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-lg">Se hur vi arbetar</p>
                <p className="text-white/60 text-sm">2 min video om vår process</p>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-gray-900">10 år</p>
                  <p className="text-sm text-gray-500">Garanti på målning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
