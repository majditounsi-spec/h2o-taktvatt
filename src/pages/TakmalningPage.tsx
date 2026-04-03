import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { RoofPaintIcon } from "@/components/roof/ServiceIcons";

const TakmalningPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Takmålning" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/95 via-[#0c1a2e]/80 to-[#0c1a2e]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25 rounded-full px-4 py-2 mb-6">
              <RoofPaintIcon className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">Takmålning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Takmålning med 10 års garanti
            </h1>
            <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
              Ge ditt tak ett helt nytt utseende och förläng livslängden med 15–20 år.
              Vi använder UV-beständig takfärg som tål det småländska klimatet.
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-7 py-6">
              <Link to="/kontakt">Begär offert – från 30 000 kr <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">När är det dags att måla om taket?</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Betongpannor har en ytbehandling som skyddar mot fukt och UV-strålning. Med tiden
                slits den bort – vanligtvis efter 15–20 år. Då börjar pannorna suga åt sig vatten,
                och i värsta fall kan de frostsprängas under vintern.
              </p>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Att måla taket är den mest kostnadseffektiva åtgärden för att skydda det. Alternativet
                – att lägga om hela taket – kostar mångdubbelt mer. En takmålning ger dessutom
                huset ett helt nytt utseende.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Vi tvättar alltid taket innan målning. Färgen fäster inte ordentligt på ett smutsigt
                tak, och vi vill att resultatet ska hålla i minst 10 år – det garanterar vi.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Det här ingår</h3>
              <div className="space-y-3">
                {[
                  "Taktvätt före målning (ingår alltid)",
                  "Grundning av takpannor vid behov",
                  "Två lager UV-beständig takfärg",
                  "Valfri kulör – vi hjälper dig välja",
                  "10 års garanti på färgen",
                  "Slutbesiktning med fotodokumentation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <img src="https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Takmålning resultat" className="w-full rounded-2xl" />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gray-900">10 år</p>
                  <p className="text-sm text-gray-500">Garanti på färg</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gray-900">2–4 dagar</p>
                  <p className="text-sm text-gray-500">Genomförande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colours */}
      <section className="py-16 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Populära kulörer</h2>
          <p className="text-gray-400 text-center mb-10 max-w-lg mx-auto">
            De flesta väljer en kulör nära originalfärgen, men ett byte kan göra stor skillnad.
            Vi har alla NCS-kulörer tillgängliga.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Tegelröd", color: "#8B4513" },
              { name: "Svart", color: "#2C2C2C" },
              { name: "Mörkgrå", color: "#555555" },
              { name: "Brun", color: "#6B4226" },
              { name: "Grön", color: "#3B5E3B" },
              { name: "Skiffer", color: "#708090" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-5 py-3">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: c.color }} />
                <span className="text-sm font-medium text-gray-700">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vad kostar takmålning?</h2>
          <p className="text-gray-500 mb-3 leading-relaxed">
            En takmålning på en normalvilla kostar vanligtvis 30 000–50 000 kr inklusive
            tvätt. Priset beror på takyta, skick och kulörval. Vi ger alltid fast pris efter besiktning.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Taktvätt ingår alltid i priset. Behöver du ROT-avdrag? Vi hjälper dig med det.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-6">
            <Link to="/kontakt">Boka kostnadsfri besiktning <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TakmalningPage;
