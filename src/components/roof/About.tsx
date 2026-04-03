import { Shield, Users, Leaf, Award, CheckCircle } from "lucide-react";

const features = [
  { icon: Shield, title: "Certifierade", text: "Utbildad personal inom takvård och höghöjdsarbete" },
  { icon: Users, title: "3000+ kunder", text: "Tusentals nöjda fastighetsägare i hela Sverige" },
  { icon: Leaf, title: "Miljövänligt", text: "Miljöcertifierade produkter som är skonsamma mot naturen" },
  { icon: Award, title: "10 års garanti", text: "Marknadens bästa garanti på takmålning" },
];

const About = () => {
  return (
    <section id="om-oss" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=400&q=80"
                  alt="Tak före behandling"
                  className="w-full rounded-2xl object-cover h-48 shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=400&q=80"
                  alt="Taktvätt pågår"
                  className="w-full rounded-2xl object-cover h-64 shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80"
                  alt="Tak efter målning"
                  className="w-full rounded-2xl object-cover h-64 shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
                  alt="Fasad"
                  className="w-full rounded-2xl object-cover h-48 shadow-lg"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-2xl p-5 shadow-xl shadow-orange-500/25 text-center">
              <p className="text-3xl font-extrabold">15+</p>
              <p className="text-sm font-medium text-orange-100">Års erfarenhet</p>
            </div>
          </div>

          {/* Right – Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm font-semibold text-blue-700">Om H2O Taktvätt</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Specialister på takvård{" "}
              <span className="text-gradient-blue">sedan 2008</span>
            </h2>

            <p className="text-lg text-gray-500 mb-4 leading-relaxed">
              Vi grundades med en enkel vision: att erbjuda Sveriges bästa takvård med
              högsta kvalitet och service. Varje tak behandlas som om det vore vårt eget.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Vi rekommenderar att du behandlar ditt tak efter cirka 15 år. När du börjar se sand i hängrännan
              har nedbrytningen av betongpannorna börjat – kontakta oss för en kostnadsfri besiktning.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3 p-4 bg-white rounded-2xl border border-gray-100">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{f.title}</h4>
                    <p className="text-xs text-gray-500">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="flex flex-wrap gap-4">
              {["Kostnadsfri besiktning", "Snabb leverans", "Fasta priser"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-semibold text-gray-700">{item}</span>
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
