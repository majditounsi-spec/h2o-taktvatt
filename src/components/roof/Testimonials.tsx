import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    name: "Lars Nilsson",
    location: "Kalmar",
    text: "Anlitade H2O för taktvätt och impregnering av vår villa i Kalmar. Riktigt bra jobb – taket ser ut som nytt och de städade fint efter sig. Fick fast pris som stämde.",
    service: "Taktvätt & Impregnering",
    initials: "LN",
  },
  {
    name: "Karin Svensson",
    location: "Nybro",
    text: "Vi hade mossa på hela taket och grön beväxning på fasaden. H2O fixade allt på två dagar. Grannarna trodde vi målat om hela huset. Rekommenderar dem varmt.",
    service: "Taktvätt & Fasadtvätt",
    initials: "KS",
  },
  {
    name: "Per Johansson",
    location: "Oskarshamn",
    text: "Fick taket målat i somras. Bra kommunikation, de förklarade vad de skulle göra och höll tidplanen. Garantin på 10 år känns trygg. Nöjd med resultatet.",
    service: "Takmålning",
    initials: "PJ",
  },
];

const Testimonials = () => {
  return (
    <section id="omdomen" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Omdömen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Vad våra kunder tycker
          </h2>

          {/* Rating display */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {[1,2,3,4].map((i) => (
                <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
              ))}
              <StarHalf className="w-5 h-5 fill-orange-400 text-orange-400" />
            </div>
            <span className="text-lg font-bold text-gray-900">4.7</span>
            <span className="text-sm text-gray-400">av 5</span>
          </div>
          <p className="text-sm text-gray-400">
            Baserat på kundrecensioner i Kalmar län och Skåne.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#fafaf8] rounded-2xl p-7 border border-gray-100"
            >
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map((j) => (
                  <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">"{t.text}"</p>

              <div className="flex items-center justify-between pt-5 border-t border-gray-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
                <span className="text-[11px] bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-md">
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
