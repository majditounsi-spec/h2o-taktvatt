import { Shield, Users, Leaf, Award, CheckCircle } from "lucide-react";

const features = [
  { icon: Shield, title: "Certifierade", text: "Utbildad personal inom takvård" },
  { icon: Users, title: "3000+ kunder", text: "Nöjda fastighetsägare i Kalmar län & Skåne" },
  { icon: Leaf, title: "Miljövänligt", text: "Certifierade produkter" },
  { icon: Award, title: "10 års garanti", text: "Bästa garantin i branschen" },
];

const About = () => {
  return (
    <section id="om-oss" className="py-24 md:py-32 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                  alt="Svensk villa med betongpannetak"
                  className="w-full h-80 object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="col-span-5 flex flex-col gap-4">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80"
                  alt="Hus med nytvättat tak"
                  className="w-full h-[calc(50%-8px)] object-cover rounded-2xl"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80"
                  alt="Skandinavisk villa"
                  className="w-full h-[calc(50%-8px)] object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute bottom-4 left-4 bg-white rounded-xl px-5 py-4 shadow-lg border border-gray-100">
              <p className="text-3xl font-bold text-gray-900">8</p>
              <p className="text-sm text-gray-400">Års erfarenhet</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Om oss</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Specialister på takvård sedan 2018
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              H2O Taktvätt grundades med visionen att erbjuda Sveriges bästa takvård.
              Vi behandlar varje tak som om det vore vårt eget.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Vi rekommenderar att du behandlar taket efter cirka 15 år.
              Sand i hängrännan betyder att nedbrytningen har börjat – kontakta oss för en kostnadsfri besiktning.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3 p-3 bg-white rounded-xl border border-gray-100">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{f.title}</p>
                    <p className="text-xs text-gray-400">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["Kostnadsfri besiktning", "Snabb leverans", "Fasta priser"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
