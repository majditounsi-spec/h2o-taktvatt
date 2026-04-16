import { Star, StarHalf } from "lucide-react";
import { useWPTestimonials } from "@/hooks/useWordPress";

const GoogleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

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
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm mb-3">
            <GoogleIcon className="w-5 h-5" />
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
                <StarHalf className="w-4 h-4 fill-orange-400 text-orange-400" />
              </div>
              <span className="text-sm font-bold text-gray-900">4.7</span>
              <span className="text-xs text-gray-400">av 5</span>
            </div>
            <span className="text-xs text-gray-500 font-medium border-l border-gray-200 pl-3">
              Google-recensioner
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Baserat på verifierade Google-recensioner från kunder i Kalmar län och Skåne.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#fafaf8] rounded-2xl p-7 border border-gray-100 relative">
              <GoogleIcon className="absolute top-6 right-6 w-5 h-5" />
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
