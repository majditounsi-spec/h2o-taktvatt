import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import About from "@/components/roof/About";
import Process from "@/components/roof/Process";
import { Shield, Users, Award, Leaf, MapPin } from "lucide-react";

const stats = [
  { value: "15+", label: "Års erfarenhet", icon: Award },
  { value: "3000+", label: "Nöjda kunder", icon: Users },
  { value: "10 år", label: "Garanti", icon: Shield },
  { value: "100%", label: "Miljövänligt", icon: Leaf },
];

const cities = [
  "Stockholm", "Göteborg", "Malmö", "Helsingborg",
  "Lund", "Uppsala", "Linköping", "Norrköping",
  "Västerås", "Örebro", "Jönköping", "Växjö",
];

const OmOssPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80" alt="Om oss" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Om <span className="text-gradient-blue">H2O Taktvätt</span>
          </h1>
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
            Sedan 2008 har vi hjälpt tusentals fastighetsägare att skydda och
            förnya sina tak med professionell takvård.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-3xl bg-gray-50">
                <s.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <p className="text-3xl font-extrabold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Process />

      {/* Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Vi finns i hela Sverige</h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Vi är verksamma i södra och mellersta Sverige och expanderar kontinuerligt.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {cities.map((city) => (
              <div key={city} className="flex items-center justify-center gap-2 bg-white rounded-2xl p-4 border border-gray-100">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="font-semibold text-gray-700 text-sm">{city}</span>
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
