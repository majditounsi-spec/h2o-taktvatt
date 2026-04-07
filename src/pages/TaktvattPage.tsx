import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TaktvattPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Taktv\u00e4tt med h\u00f6gtryck" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/95 via-[#0c1a2e]/80 to-[#0c1a2e]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Professionell taktv\u00e4tt i Kalmar l\u00e4n
            </h1>
            <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
              Mossa, lav och alger bryter ner ditt tak snabbare \u00e4n du tror. Vi tv\u00e4ttar bort allt
              och ger dina takpannor nytt liv \u2013 skonsamt men grundligt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-7 py-6">
                <Link to="/kontakt">Boka besiktning \u2013 helt gratis <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Varf\u00f6r beh\u00f6ver taket tv\u00e4ttas?</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                I Kalmar l\u00e4ns fuktiga kustklimat \u00e4r mossa och alger ett vanligt problem. De h\u00e5ller kvar
                fukt mot takpannorna, vilket g\u00f6r att betongen bryts ner snabbare. Du m\u00e4rker det oftast
                genom att det samlas sand i h\u00e4ngr\u00e4nnorna \u2013 ett tidigt tecken p\u00e5 att pannorna b\u00f6rjar vittra.
              </p>
              <p className="text-gray-500 mb-5 leading-relaxed">
                En professionell taktv\u00e4tt tar bort all bev\u00e4xning och smuts, och efterbehandling med
                mossmedel h\u00e5ller taket rent betydligt l\u00e4ngre. De flesta tak beh\u00f6ver tv\u00e4ttas ungef\u00e4r
                vart 10\u201315 \u00e5r beroende p\u00e5 l\u00e4ge och omgivning.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Vi anv\u00e4nder anpassat tryck f\u00f6r att inte skada pannorna. Hela huset plastas in
                med skyddsplast och stupr\u00f6ren t\u00e4cks s\u00e5 att inget skr\u00e4p hamnar i avloppet.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Det h\u00e4r ing\u00e5r</h3>
              <div className="space-y-3">
                {[
                  "H\u00f6gtryckstv\u00e4tt med anpassat tryck f\u00f6r din taktyp",
                  "Skyddsplastning av fasad, f\u00f6nster och altan",
                  "Slangar monterade vid stupr\u00f6r f\u00f6r att skydda avlopp",
                  "Mossbehandling som f\u00f6rhindrar \u00e5terv\u00e4xt",
                  "Slutbesiktning tillsammans med dig",
                  "2 \u00e5rs garanti p\u00e5 utf\u00f6rt arbete",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <img src="https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Taktv\u00e4tt p\u00e5g\u00e5r" className="w-full rounded-2xl" />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gray-900">2 \u00e5r</p>
                  <p className="text-sm text-gray-500">Garanti</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gray-900">1\u20132 dagar</p>
                  <p className="text-sm text-gray-500">Genomf\u00f6rande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">S\u00e5 h\u00e4r g\u00e5r det till</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Vi kommer ut", text: "Du ringer eller fyller i formul\u00e4ret. Vi \u00e5ker ut och tittar p\u00e5 taket utan kostnad." },
              { step: "2", title: "Offert samma dag", text: "Du f\u00e5r ett fast pris baserat p\u00e5 takyta och skick. Inga dolda kostnader." },
              { step: "3", title: "Tv\u00e4tt & behandling", text: "Vi plastar in huset, tv\u00e4ttar taket och behandlar mot mossa. Tar 1\u20132 dagar." },
              { step: "4", title: "Klart & garanti", text: "Vi g\u00e5r igenom resultatet med dig. Du f\u00e5r 2 \u00e5rs garanti p\u00e5 arbetet." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-6 border border-gray-100">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-bold mb-4">{s.step}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vad kostar taktv\u00e4tt?</h2>
          <p className="text-gray-500 mb-3 leading-relaxed">
            Priset beror p\u00e5 takets storlek och skick. En vanlig villa med ca 150 kvm takyta
            kostar normalt mellan 15 000\u201325 000 kr. Vill du kombinera med takm\u00e5lning eller
            impregnering ger vi paketpris.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Vi l\u00e4mnar alltid fast pris efter besiktning \u2013 inga \u00f6verraskningar.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-6">
            <Link to="/kontakt">F\u00e5 en kostnadsfri offert <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaktvattPage;
