import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Droplets, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TaktvattPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1625766763788-95ed44a1e7b4?auto=format&fit=crop&w=2000&q=80" alt="Taktvätt" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Droplets className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">Professionell taktvätt</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Taktvätt som ger ditt tak <span className="text-gradient-orange">nytt liv</span>
            </h1>
            <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
              Vi tar bort mossa, lav, alger och smuts med professionell högtryckstvätt.
              Ditt tak skyddas och din fastighet plastas in under hela processen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-8 py-7 shadow-lg shadow-orange-500/25">
                <Link to="/kontakt">Begär offert – från 15 000 kr <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Så fungerar vår taktvätt</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Vi börjar med att täcka in din fastighet med skyddande plast för att undvika stänk och skador.
                Stuprör skyddas med slangar för att förhindra stopp i avloppet. Sedan tvättar vi taket
                systematiskt med professionell högtrycksutrustning.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Efter tvätten behandlar vi taket med mossmedel som förhindrar ny tillväxt.
                Resultatet är ett rent, fräscht tak som ser ut som nytt och håller längre.
              </p>

              <div className="space-y-4">
                {[
                  "Högtryckstvätt med professionell utrustning",
                  "Skyddande plastning av fasad och mark",
                  "Slangar vid stuprör mot avloppsstopp",
                  "Mossbehandling efter tvätt",
                  "Slutbesiktning tillsammans med kund",
                  "2 års garanti på taktvätt",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80" alt="Taktvätt process" className="w-full rounded-3xl shadow-lg" />
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-gray-900">2 år</p>
                  <p className="text-sm text-gray-500">Garanti</p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-gray-900">1-2 dagar</p>
                  <p className="text-sm text-gray-500">Genomförande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Redo att tvätta ditt tak?</h2>
          <p className="text-blue-100/70 mb-8">Kontakta oss för en kostnadsfri besiktning och offert.</p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-10 py-7 shadow-lg">
            <Link to="/kontakt">Kontakta oss <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaktvattPage;
