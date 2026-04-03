import { ClipboardCheck, Search, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Kontakt & Offert",
    description:
      "Du kontaktar oss för en kostnadsfri offert. Vi ställer några frågor om ditt tak och din fastighet för att kunna ge dig ett rättvist pris.",
  },
  {
    icon: Search,
    step: "02",
    title: "Besiktning",
    description:
      "Vi kommer ut och besiktigar taket på plats. Vi bedömer takets skick, mäter ytan och rekommenderar den bästa behandlingen för just ditt tak.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Utförande",
    description:
      "Vi skyddar din fastighet med plastövertäckning, monterar slangar vid stuprören och utför taktvätt och/eller takmålning med professionell utrustning.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Slutbesiktning & Garanti",
    description:
      "Efter avslutat arbete gör vi en slutbesiktning tillsammans med dig. Du får 10 års garanti på takmålning och 2 års garanti på taktvätt.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Så fungerar det
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Från offert till färdigt tak i 4 steg
          </h2>
          <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
            En enkel och trygg process från start till mål. Vi håller dig informerad genom hela projektet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[hsl(199,89%,38%)]/10 to-[hsl(152,60%,42%)]/10 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(199,89%,38%)] to-[hsl(152,60%,42%)] text-white text-sm font-bold flex items-center justify-center"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
