import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FasadtvattPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/8134820/pexels-photo-8134820.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Husfasad" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/95 via-[#0c1a2e]/80 to-[#0c1a2e]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Fasadtvätt som förnyar hela huset
            </h1>
            <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
              Alger, smuts och mögel gör att huset ser slitet ut i förtid. En fasadtvätt
              gör enorm skillnad – huset ser nymålat ut igen.
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-7 py-6">
              <Link to="/kontakt">Begär offert – från 12 900 kr <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Skonsam tvätt för alla fasadtyper</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Oavsett om ditt hus har puts, trä, tegel eller plåt anpassar vi metod och tryck
                efter materialet. Vi vill aldrig riskera att skada fasaden – bara göra den ren.
              </p>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Gröna alger och svarta mögelfläckar på fasaden handlar sällan om att färgen är
                dålig. Det beror oftast på fukt och väderstreck. Norrfasader och skuggiga sidor
                drabbas mest. En fasadtvätt tar bort allt och efterbehandlingen gör att det
                dröjer betydligt längre innan det kommer tillbaka.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Många av våra kunder i Kalmar län kombinerar fasadtvätt med taktvätt. Då gör
                vi allt på samma gång och du får paketpris.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Vi tvättar alla material</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Putsfasad",
                  "Träpanel",
                  "Tegelfasad",
                  "Plåtfasad",
                  "Eternit",
                  "Fibercementskivor",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <img src="https://images.pexels.com/photos/7937079/pexels-photo-7937079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Ren fasad" className="w-full rounded-2xl" />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gray-900">Garanti</p>
                  <p className="text-sm text-gray-500">På allt arbete</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-gray-900">1 dag</p>
                  <p className="text-sm text-gray-500">Normalt genomförande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fafaf8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kombinera med taktvätt – spara pengar</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Beställer du fasadtvätt och taktvätt samtidigt behöver vi bara komma ut en gång.
            Det sparar tid för oss och pengar för dig. Be om paketpris när du kontaktar oss.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-6">
            <Link to="/kontakt">Fråga om paketpris <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FasadtvattPage;
