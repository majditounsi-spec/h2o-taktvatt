import { useEffect, useState } from "react";
import { ArrowRight, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ROTATING_WORDS = ["taktvätt", "takmålning", "takbehandlingar"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hem"
      aria-label="Hem – Professionell taktvätt och takmålning"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1530]"
    >
      {/* Layered gradient background using logo blues */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1530] via-[#152a5e] to-[#1e3a7a]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1530]/80 via-transparent to-[#6ba8d0]/20" />
      </div>

      {/* Ambient blur orbs — logo blue palette */}
      <div className="absolute -top-32 -right-20 w-[600px] h-[600px] bg-[#7eb8db]/25 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#4a7fba]/30 rounded-full blur-[100px]" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#1e3a7a]/50 rounded-full blur-[120px]" />
      <div className="absolute top-20 left-1/3 w-64 h-64 bg-[#7eb8db]/15 rounded-full blur-3xl" />

      {/* Fine grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative water droplets on the right */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
        {/* Large drop */}
        <svg
          className="absolute top-[15%] right-[12%] w-64 h-64 animate-float-slow"
          viewBox="0 0 200 200"
          fill="none"
        >
          <defs>
            <linearGradient id="drop1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9ccde5" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#4a7fba" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1e3a7a" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="drop1-highlight" x1="20%" y1="20%" x2="60%" y2="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M100 20 C 100 20, 40 90, 40 130 C 40 165, 67 190, 100 190 C 133 190, 160 165, 160 130 C 160 90, 100 20, 100 20 Z"
            fill="url(#drop1)"
            stroke="#9ccde5"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
          <ellipse cx="80" cy="100" rx="22" ry="30" fill="url(#drop1-highlight)" />
        </svg>

        {/* Medium drop */}
        <svg
          className="absolute bottom-[20%] right-[30%] w-32 h-32 animate-float-medium"
          viewBox="0 0 200 200"
          fill="none"
        >
          <defs>
            <linearGradient id="drop2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7eb8db" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1e3a7a" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <path
            d="M100 20 C 100 20, 40 90, 40 130 C 40 165, 67 190, 100 190 C 133 190, 160 165, 160 130 C 160 90, 100 20, 100 20 Z"
            fill="url(#drop2)"
            stroke="#9ccde5"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
        </svg>

        {/* Small drop */}
        <svg
          className="absolute top-[55%] right-[6%] w-20 h-20 animate-float-fast"
          viewBox="0 0 200 200"
          fill="none"
        >
          <defs>
            <linearGradient id="drop3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9ccde5" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4a7fba" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path
            d="M100 20 C 100 20, 40 90, 40 130 C 40 165, 67 190, 100 190 C 133 190, 160 165, 160 130 C 160 90, 100 20, 100 20 Z"
            fill="url(#drop3)"
          />
        </svg>

        {/* Ripple rings */}
        <div className="absolute top-[40%] right-[20%] w-80 h-80">
          <div className="absolute inset-0 rounded-full border border-[#7eb8db]/20 animate-ripple" />
          <div className="absolute inset-6 rounded-full border border-[#7eb8db]/15 animate-ripple-delayed" />
          <div className="absolute inset-12 rounded-full border border-[#7eb8db]/10 animate-ripple-more-delayed" />
        </div>
      </div>

      {/* Soft wave at bottom */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-24 text-[#0a1530]"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 50 C 240 90, 480 10, 720 50 C 960 90, 1200 10, 1440 50 L 1440 100 L 0 100 Z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          d="M0 70 C 240 100, 480 30, 720 70 C 960 100, 1200 40, 1440 70 L 1440 100 L 0 100 Z"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-white/80">
              10 års garanti · Certifierad personal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Vi utför
            <br />
            <span
              key={wordIndex}
              className="inline-block text-gradient-orange animate-word-rotate"
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-md mb-10 leading-relaxed font-normal">
            Vi förnyar och skyddar ditt tak i Kalmar län och Skåne.
            Kostnadsfri offert och 10 års garanti.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white border-0 text-sm px-7 py-6 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
            >
              <Link to="/kontakt">
                Begär kostnadsfri offert
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 text-sm px-7 py-6 rounded-xl bg-white/5 backdrop-blur-sm font-medium"
            >
              <a href="tel:+46790555130">
                <Phone className="mr-2 w-4 h-4" />
                Ring oss
              </a>
            </Button>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">8+</span>
              <span>
                års
                <br />
                erfarenhet
              </span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">3000+</span>
              <span>
                nöjda
                <br />
                kunder
              </span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-orange-400 fill-orange-400"
                    viewBox="0 0 20 20"
                  >
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
