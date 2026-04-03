import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, SprayCan, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TakbehandlingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=2000&q=80" alt="Takbehandling" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <SprayCan className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">Takbehandling & Impregnering</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Skydda ditt tak med <span className="text-gradient-blue">impregnering</span>
            </h1>
            <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
              Förhindra mossbildning och förläng takets livslängd med professionell
              impregnering och takbehandling.
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-8 py-7 shadow-lg shadow-orange-500/25">
              <Link to="/kontakt">Begär offert – från 10 000 kr <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Förebyggande takvård</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Impregnering skapar ett vattenavvisande skydd som förhindrar att mossa, lav
                och alger fäster på takpannorna. Det är den mest kostnadseffektiva
                åtgärden för att förlänga takets livslängd.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Vi rekommenderar impregnering efter cirka 15 år, eller direkt efter en
                taktvätt för maximalt skydd. Vi använder enbart miljöcertifierade produkter.
              </p>
              <div className="space-y-4">
                {[
                  "Vattenavvisande skyddslager",
                  "Förhindrar mossa och algbildning",
                  "Miljöcertifierade produkter",
                  "Förlänger takets livslängd",
                  "Perfekt komplement till taktvätt",
                  "Kostnadseffektiv investering",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" alt="Takbehandling" className="w-full rounded-3xl shadow-lg" />
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-2xl p-6 text-center">
                  <Shield className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-gray-900">5+ år</p>
                  <p className="text-sm text-gray-500">Skyddseffekt</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-gray-900">1 dag</p>
                  <p className="text-sm text-gray-500">Genomförande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Skydda ditt tak idag</h2>
          <p className="text-orange-100/80 mb-8">Kostnadsfri besiktning och offert inom 24 timmar.</p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 rounded-2xl px-10 py-7 font-bold shadow-lg">
            <Link to="/kontakt">Kontakta oss <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TakbehandlingPage;
