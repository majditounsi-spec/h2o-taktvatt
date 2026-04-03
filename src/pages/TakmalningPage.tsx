import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Paintbrush, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TakmalningPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80" alt="Takmålning" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Paintbrush className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">Takmålning med 10 års garanti</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Takmålning som <span className="text-gradient-blue">skyddar & förnyar</span>
            </h1>
            <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
              Högkvalitativ UV-beständig takfärg som ger ett vackert resultat och skyddar
              dina betongpannor mot väder och vind i minst 10 år.
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-8 py-7 shadow-lg shadow-orange-500/25">
              <Link to="/kontakt">Begär offert – från 30 000 kr <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Varför måla taket?</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Efter cirka 15 år börjar betongpannor brytas ner. Sand i hängrännan är ett tidigt tecken.
                Genom att måla taket förlänger du livslängden avsevärt och ger huset ett helt nytt utseende.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Vi använder marknadens bästa UV-beständiga takfärg som tål Sveriges tuffa klimat.
                Färgen ger ett jämnt, professionellt resultat och skyddas av vår 10-årsgaranti.
              </p>

              <div className="space-y-4">
                {[
                  "UV-beständig takfärg av högsta kvalitet",
                  "10 års garanti på färgen",
                  "Brett urval av kulörer",
                  "Tvätt ingår alltid före målning",
                  "Professionellt och jämnt resultat",
                  "Förlänger takets livslängd med 15-20 år",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80" alt="Takmålning resultat" className="w-full rounded-3xl shadow-lg" />
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-2xl p-6 text-center">
                  <Shield className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-gray-900">10 år</p>
                  <p className="text-sm text-gray-500">Garanti</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-gray-900">2-4 dagar</p>
                  <p className="text-sm text-gray-500">Genomförande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Före & efter takmålning</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80" alt="Före takmålning" className="w-full h-72 object-cover" />
              <div className="absolute bottom-4 left-4 bg-red-500 text-white font-bold text-sm px-4 py-2 rounded-xl">FÖRE</div>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=800&q=80" alt="Efter takmålning" className="w-full h-72 object-cover" />
              <div className="absolute bottom-4 left-4 bg-green-500 text-white font-bold text-sm px-4 py-2 rounded-xl">EFTER</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ge ditt tak en ny färg</h2>
          <p className="text-orange-100/80 mb-8">Boka en kostnadsfri besiktning och få offert inom 24 timmar.</p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 rounded-2xl px-10 py-7 font-bold shadow-lg">
            <Link to="/kontakt">Kontakta oss <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TakmalningPage;
