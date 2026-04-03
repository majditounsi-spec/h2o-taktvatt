import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anna Lindström",
    location: "Helsingborg",
    text: "Fantastiskt resultat! Vårt tak ser ut som nytt efter tvätt och målning. Professionellt bemötande från start till slut.",
    rating: 5,
    service: "Taktvätt & Takmålning",
    avatar: "AL",
  },
  {
    name: "Erik Johansson",
    location: "Malmö",
    text: "Massa mossa och alger försvann helt efter behandlingen. Teamet var noggranna och städade fint efter sig.",
    rating: 5,
    service: "Taktvätt",
    avatar: "EJ",
  },
  {
    name: "Maria Svensson",
    location: "Nybro",
    text: "Bra pris, proffsig personal och taket ser helt förnyat ut. 10 års garanti på färgen ger trygghet.",
    rating: 5,
    service: "Takmålning",
    avatar: "MS",
  },
  {
    name: "Karl Pettersson",
    location: "Oskarshamn",
    text: "Fasadtvätt och taktvätt samtidigt. Huset ser ut som nybyggt! Snabbt och professionellt.",
    rating: 5,
    service: "Fasadtvätt & Taktvätt",
    avatar: "KP",
  },
  {
    name: "Lisa Andersson",
    location: "Lund",
    text: "Fick rekommendation av en granne och blev inte besviken. Taket hade inte tvättats på 20 år – enorm skillnad!",
    rating: 5,
    service: "Taktvätt",
    avatar: "LA",
  },
  {
    name: "Johan Bergström",
    location: "Västervik",
    text: "Professionellt från offert till slutbesiktning. De förklarade processen tydligt och levererade som utlovat.",
    rating: 5,
    service: "Taktvätt & Takmålning",
    avatar: "JB",
  },
];

const avatarColors = [
  "from-blue-500 to-blue-600",
  "from-orange-500 to-orange-600",
  "from-blue-600 to-blue-700",
  "from-orange-400 to-orange-500",
  "from-blue-400 to-blue-500",
  "from-orange-600 to-orange-700",
];

const Testimonials = () => {
  return (
    <section id="omdomen" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-semibold text-orange-700">Kundrecensioner</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
            Vad våra kunder{" "}
            <span className="text-gradient-orange">säger</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Vi är stolta över att ha tusentals nöjda kunder i Kalmar län och Skåne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100 hover:border-gray-200 group"
            >
              <div className="flex items-start justify-between mb-5">
                <Quote className="w-10 h-10 text-blue-100 group-hover:text-blue-200 transition-colors" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">"{t.text}"</p>

              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center text-white text-xs font-bold`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
                <span className="text-[11px] bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-lg">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
