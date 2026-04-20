import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Hur lång tid tar en taktvätt?",
    answer:
      "En taktvätt på en normalvilla tar vanligtvis 1–2 dagar beroende på takets storlek och hur mycket påväxt det finns. Vi planerar alltid ett tidsuppskattat arbete i samband med offerten.",
  },
  {
    question: "Vad kostar en taktvätt?",
    answer:
      "Priset beror på takets storlek och skick. För en normalvilla startar taktvätt från 14 900 kr. Vi ger alltid ett fast pris efter kostnadsfri besiktning – inga dolda avgifter.",
  },
  {
    question: "Hur länge håller takmålningen?",
    answer:
      "Vi garanterar vår takmålning i 10 år. Med rätt förberedelse – inklusive taktvätt och grundning – kan en god takmålning hålla 15–20 år i det svenska klimatet.",
  },
  {
    question: "Behöver taket tvättas innan målning?",
    answer:
      "Ja, alltid. Färg fäster inte på ett smutsigt tak. Taktvätten ingår alltid i vår takmålning – du betalar ett pris och vi sköter hela processen från rengöring till sista penseldrag.",
  },
  {
    question: "Vilka tak kan ni tvätta och måla?",
    answer:
      "Vi arbetar med betongpannor, tegelpannor, plåttak och fibercementtak. Tveksam på vilket tak du har? Skicka en bild i offertformuläret så berättar vi vad som passar bäst.",
  },
  {
    question: "Kan jag få ROT-avdrag?",
    answer:
      "Ja! Takmålning och taktvätt berättigar till ROT-avdrag om du äger din villa. Vi hanterar ansökan åt dig och drar automatiskt av 30 % av arbetskostnaden på fakturan.",
  },
  {
    question: "Vilka områden utför ni arbete i?",
    answer:
      "Vi är verksamma i Kalmar län, Öland, Blekinge, Skåne och Halland. Osäker på om vi täcker ditt område? Ring oss eller fyll i offertformuläret så återkommer vi snabbt.",
  },
];

const FaqItem = ({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) => (
  <div
    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
      open
        ? "bg-white border-white/30 shadow-xl shadow-black/10"
        : "bg-white/8 border-white/10 hover:bg-white/12"
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      aria-expanded={open}
    >
      <span
        className={`text-base font-semibold leading-snug transition-colors ${
          open ? "text-gray-900" : "text-white"
        }`}
      >
        {question}
      </span>
      <span
        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          open ? "bg-orange-500 text-white" : "bg-white/10 text-white/70"
        }`}
      >
        {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
      </span>
    </button>

    <div
      className={`grid transition-all duration-300 ease-in-out ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-[#0a1530] pb-32">
      {/* Top wave continues from Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">
            Vanliga frågor
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Allt du vill veta
          </h2>
          <p className="text-white/50 mt-3 max-w-md mx-auto text-sm">
            Hittar du inte svaret du söker? Ring oss direkt på 079-055 51 30.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 max-w-5xl mx-auto items-start">
          <div className="space-y-3">
            {faqs.filter((_, i) => i % 2 === 0).map((faq, i) => {
              const realIndex = i * 2;
              return (
                <FaqItem
                  key={realIndex}
                  question={faq.question}
                  answer={faq.answer}
                  open={openIndex === realIndex}
                  onToggle={() => toggle(realIndex)}
                />
              );
            })}
          </div>
          <div className="space-y-3">
            {faqs.filter((_, i) => i % 2 === 1).map((faq, i) => {
              const realIndex = i * 2 + 1;
              return (
                <FaqItem
                  key={realIndex}
                  question={faq.question}
                  answer={faq.answer}
                  open={openIndex === realIndex}
                  onToggle={() => toggle(realIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom wave into Services (light bg) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-20 text-[#fafaf8]"
          fill="currentColor"
        >
          <path d="M0 40 C 360 80, 720 0, 1080 40 C 1260 60, 1380 50, 1440 40 L1440 80 L0 80 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Faq;
