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
          <img src="https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Taktvätt med högtryck" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/95 via-[#0c1a2e]/80 to-[#0c1a2e]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Professionell taktvätt i Kalmar län
            </h1>
            <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
              Mossa, lav och alger bryter ner ditt tak snabbare än du tror. Vi tvättar bort allt
              och ger dina takpannor nytt liv – skonsamt men grundligt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-7 py-6">
                <Link to="/kontakt">Boka besiktning – helt gratis <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Varför behöver taket tvättas?</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                I Kalmar läns fuktiga kustklimat är mossa och alger ett vanligt problem. De håller kvar
                fukt mot takpannorna, vilket gör att betongen bryts ner snabbare. Du märker det oftast
                genom att det samlas sand i hängrännorna – ett tidigt tecken på att pannorna börjar vittra.
              </p>
              <p className="text-gray-500 mb-5 leading-relaxed">
                En professionell taktvätt tar bort all beväxning och smuts, och efterbehandling med
                mossmedel håller taket rent betydligt längre. De flesta tak behöver tvättas ungefär
                vart 10–15 år beroende på läge och omgivning.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Vi använder anpassat tryck för att inte skada pannorna. Hela huset plastas in
                med skyddsplast och stuprören täcks så att inget skräp hamnar i avloppet.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Det här ingår</h3>
              <div className="space-y-3">
                {[
                  "Högtryckstvätt med anpassat tryck för din taktyp",
                  "Skyddsplastning av fasad, fönster och altan",
                  "Slangar monterade vid stuprör för att skydda avlopp",
                  "Mossbehandling som förhindrar återväxt",
                  "Slutbesiktning tillsammans med dig",
                  "2 års garanti på utfört arbete",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <img src="https://images.pexels.com/photos/5652626/pexels-photo-5652626.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Högtryckstvätt av husfasad" className="w-full rounded-2xl" />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gray-900">2 år</p>
                  <p className="text-sm text-gray-500">Garanti</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gray-900">1–2 dagar</p>
                  <p className="text-sm text-gray-500">Genomförande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Så här går det till</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Vi kommer ut", text: "Du ringer eller fyller i formuläret. Vi åker ut och tittar på taket utan kostnad." },
              { step: "2", title: "Offert samma dag", text: "Du får ett fast pris baserat på takyta och skick. Inga dolda kostnader." },
              { step: "3", title: "Tvätt & behandling", text: "Vi plastar in huset, tvättar taket och behandlar mot mossa. Tar 1–2 dagar." },
              { step: "4", title: "Klart & garanti", text: "Vi går igenom resultatet med dig. Du får 2 års garanti på arbetet." },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vad kostar taktvätt?</h2>
          <p className="text-gray-500 mb-3 leading-relaxed">
            Priset beror på takets storlek och skick. En vanlig villa med ca 150 kvm takyta
            kostar normalt mellan 15 000–25 000 kr. Vill du kombinera med takmålning eller
            impregnering ger vi paketpris.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Vi lämnar alltid fast pris efter besiktning – inga överraskningar.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-6">
            <Link to="/kontakt">Få en kostnadsfri offert <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaktvattPage;
