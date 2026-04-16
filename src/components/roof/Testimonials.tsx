import { Star, StarHalf } from "lucide-react";
import { useWPTestimonials } from "@/hooks/useWordPress";

const staticTestimonials = [
  {
    name: "Christer Andersson",
    location: "Teknisk Förvaltare, Ekerum",
    text: "Styrelsen i Ekerum BRF 1 gav Er förtroendet våren 2021 att ge våra 85 hus en rejäl \"ansiktslyftning\"! Redan efter taktvätten så anade vi att det var något fantastiskt på gång. När nu målningen är utförd så kan vi med glädje konstatera att området faktiskt blev bättre än vad vi hade vågat hoppas på! Från Ekerum vill vi framföra inte bara ett stort tack för vackra tak utan också på det sättet som Ni har genomfört projektet.",
    service: "Taktvätt & Takmålning",
    initials: "CA",
  },
  {
    name: "Ann Georgsson",
    location: "Fridlevstad, Karlskrona",
    text: "H2O Taktvätt i Sydost AB gjorde att fantastiskt jobb på vårt tak! Blev som ett helt nytt tak, så snyggt! Duktiga killar som utförde jobbet! Först tvätt med ånga och sedan målning. Tack från Ann och Johan i Fridlevstad, Karlskrona.",
    service: "Taktvätt & Takmålning",
    initials: "AG",
  },
  {
    name: "Birgitta Ek",
    location: "Kund",
    text: "Superbra utfört arbete, allt från första besöket, kontakten med H2O Taktvätt under arbetets gång till slutfört arbetet med taktvätt och takmålning. Tack John och Jonathan m fl!",
    service: "Taktvätt & Takmålning",
    initials: "BE",
  },
];

const Testimonials = () => {
  const { data: testimonials } = useWPTestimonials(staticTestimonials);

  return (
    <section id="omdomen" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Omdömen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Vad våra kunder tycker
          </h2>
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
            <div key={i} className="bg-[#fafaf8] rounded-2xl p-7 border border-gray-100">
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
