import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { RoofShieldIcon } from "@/components/roof/ServiceIcons";

const TakbehandlingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/5401232/pexels-photo-5401232.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Takbehandling" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/95 via-[#0c1a2e]/80 to-[#0c1a2e]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25 rounded-full px-4 py-2 mb-6">
              <RoofShieldIcon className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">Takbehandling & Impregnering</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Förläng takets livslängd med impregnering
            </h1>
            <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
              En impregnering gör taket vattenavvisande och förhindrar att mossa och
              alger fäster. Det billigaste sättet att skydda ditt tak på lång sikt.
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-7 py-6">
              <Link to="/kontakt">Begär offert – från 10 000 kr <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Vad gör en impregnering?</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Impregnering skapar ett osynligt, vattenavvisande skikt på takpannorna. Vatten
                pärlar av istället för att sugas in i betongen. Det gör att mossa och alger
                inte kan fästa lika lätt, och att pannorna inte frostspricker på vintern.
              </p>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Vi rekommenderar impregnering som komplement till taktvätt. Du har precis
                fått taket rent – då vill du att det ska hålla sig rent så länge som möjligt.
                Med impregnering håller resultatet upp till dubbelt så länge.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Alla produkter vi använder är miljömärkta och godkända för svenska tak.
                Behandlingen påverkar inte pannornas utseende – de ser likadana ut,
                bara skyddade.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Fördelar med impregnering</h3>
              <div className="space-y-3">
                {[
                  "Taket blir vattenavvisande",
                  "Mossa och alger fäster inte lika lätt",
                  "Skyddar mot frostsprängning",
                  "Förlänger tiden mellan tvättar med 50–100%",
                  "Miljömärkta produkter",
                  "Kan göras direkt efter taktvätt",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <img src="https://images.pexels.com/photos/16208002/pexels-photo-16208002.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Takpannor" className="w-full rounded-2xl" />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gray-900">5+ år</p>
                  <p className="text-sm text-gray-500">Skyddseffekt</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gray-900">½ dag</p>
                  <p className="text-sm text-gray-500">Genomförande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fafaf8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bäst tillsammans med taktvätt</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Beställer du impregnering samtidigt som taktvätt slipper du ett extra besök.
            Vi applicerar impregneringen direkt efter att taket torkat – enklare blir det inte.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-6">
            <Link to="/kontakt">Begär offert <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TakbehandlingPage;
