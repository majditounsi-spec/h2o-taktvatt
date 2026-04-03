import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import Contact from "@/components/roof/Contact";

const KontaktPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2000&q=80" alt="Kontakt" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Kontakta <span className="text-gradient-orange">oss</span>
          </h1>
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
            Begär en kostnadsfri offert eller boka en besiktning. Vi svarar inom 24 timmar.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default KontaktPage;
