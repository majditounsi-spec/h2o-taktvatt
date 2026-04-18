import Header from "@/components/roof/Header";
import Footer from "@/components/roof/Footer";
import Contact from "@/components/roof/Contact";
import { useSeo } from "@/hooks/useSeo";

const KontaktPage = () => {
  useSeo({
    title: "Kontakt – Begär kostnadsfri offert",
    description:
      "Kontakta H2O Taktvätt för kostnadsfri offert på taktvätt, takmålning, fasadtvätt eller anti-alg behandling. Ring 070-123 45 67 eller fyll i formuläret.",
  });

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/35172803/pexels-photo-35172803.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Nordiskt hus med tegeltak" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/95 via-[#0c1a2e]/80 to-[#0c1a2e]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Kontakta oss
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Fyll i formuläret eller ring oss direkt. Vi återkommer med offert
            inom 24 timmar – besiktningen är alltid gratis.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default KontaktPage;
