import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import About from "@/components/roof/About";
import { Shield, Users, Award, Leaf, MapPin } from "lucide-react";

const stats = [
  { value: "8+", label: "Års erfarenhet", icon: Award },
  { value: "3000+", label: "Nöjda kunder", icon: Users },
  { value: "10 år", label: "Garanti", icon: Shield },
  { value: "100%", label: "Miljövänligt", icon: Leaf },
];

const cities = [
  "Kalmar", "Nybro", "Oskarshamn", "Västervik",
  "Borgholm", "Mörbylånga", "Emmaboda", "Torsås",
  "Malmö", "Lund", "Helsingborg", "Kristianstad",
];

const OmOssPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Svenskt hus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/95 via-[#0c1a2e]/80 to-[#0c1a2e]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Om H2O Taktvätt
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Familjeföretag från Kalmar län med fokus på kvalitet framför kvantitet.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Vår historia</h2>
          <p className="text-gray-500 mb-5 leading-relaxed">
            H2O Taktvätt startade 2018 som ett litet familjeföretag i Kalmar. Tanken var enkel:
            erbjuda hederlig takvård till rimliga priser, utan att tumma på kvaliteten. Vi hade
            sett för många grannar som anlitade billiga firmor som lämnade halva jobbet ogjort.
          </p>
          <p className="text-gray-500 mb-5 leading-relaxed">
            Idag, 8 år senare, har vi tvättat och målat över 3 000 tak i Kalmar län och Skåne.
            Vi är fortfarande samma firma med samma värderingar: vi gör jobbet ordentligt,
            vi håller vad vi lovar, och vi lämnar inte platsen förrän kunden är nöjd.
          </p>
          <p className="text-gray-500 mb-5 leading-relaxed">
            All vår personal är utbildad inom höghöjdsarbete och takvård. Vi använder enbart
            miljömärkta produkter och vi har aldrig fått ett enda klagomål hos
            Konsumentverket. Det är vi stolta över.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Vi verkar främst i Kalmar län – Kalmar, Nybro, Oskarshamn, Västervik och
            omnejd – men tar även uppdrag i Skåne. Hör av dig så berättar vi mer.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#fafaf8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-white border border-gray-100">
                <s.icon className="w-7 h-7 text-orange-500 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />

      {/* Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Vi finns i Kalmar län & Skåne</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">
            Vi är verksamma i Kalmar län och Skåne med omnejd.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {cities.map((city) => (
              <div key={city} className="flex items-center justify-center gap-2 bg-[#fafaf8] rounded-xl p-3 border border-gray-100">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-medium text-gray-600 text-sm">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OmOssPage;
