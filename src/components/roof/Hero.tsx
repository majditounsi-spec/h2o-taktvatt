import { ArrowRight, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hem" className="relative min-h-screen flex items-center overflow-hidden bg-[#0c1a2e]">
      {/* Background image - professional roof cleaning */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professionell taktvätt med högtryckstvätt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/95 via-[#0c1a2e]/75 to-[#0c1a2e]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/60 to-transparent" />
      </div>

      {/* Subtle accent shapes */}
      <div className="absolute top-32 right-[15%] w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[10%] w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-white/80">10 års garanti · Certifierad personal</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Professionell taktvätt
            <br />
            <span className="text-gradient-orange">&</span>{" "}
            takmålning
          </h1>

          <p className="text-base sm:text-lg text-white/60 max-w-md mb-10 leading-relaxed font-normal">
            Vi förnyar och skyddar ditt tak i Kalmar län och Skåne.
            Kostnadsfri besiktning och 10 års garanti.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white border-0 text-sm px-7 py-6 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
            >
              <Link to="/kontakt">
                Kostnadsfri besiktning
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/15 text-white hover:bg-white/5 text-sm px-7 py-6 rounded-xl bg-transparent font-medium"
            >
              <a href="tel:+46701234567">
                <Phone className="mr-2 w-4 h-4" />
                Ring oss
              </a>
            </Button>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">15+</span>
              <span>års<br />erfarenhet</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">3000+</span>
              <span>nöjda<br />kunder</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-orange-400 fill-orange-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1">4.7 betyg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
