import { ClipboardCheck, Search, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Kontakt & Offert",
    description: "Kontakta oss för en kostnadsfri offert. Vi ställer frågor om ditt tak för att ge dig ett rättvist pris.",
    color: "blue",
  },
  {
    icon: Search,
    step: "02",
    title: "Besiktning",
    description: "Vi besiktigar taket på plats, bedömer skicket och rekommenderar den bästa behandlingen.",
    color: "orange",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Utförande",
    description: "Vi skyddar fastigheten, monterar utrustning och utför arbetet med professionell precision.",
    color: "blue",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Garanti",
    description: "Slutbesiktning med dig. 10 års garanti på takmålning och 2 års garanti på taktvätt.",
    color: "orange",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
            Från offert till{" "}
            <span className="text-gradient-blue">färdigt tak</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            En trygg och transparent process. Vi håller dig informerad genom hela projektet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-[2px]">
                  <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-100" />
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-300 to-blue-300 w-0 group-hover:w-full transition-all duration-700" />
                </div>
              )}

              <div className="text-center p-6 rounded-3xl hover:bg-gray-50 transition-all duration-300">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className={`w-28 h-28 rounded-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                    step.color === "orange"
                      ? "bg-gradient-to-br from-orange-50 to-orange-100"
                      : "bg-gradient-to-br from-blue-50 to-blue-100"
                  }`}>
                    <step.icon className={`w-12 h-12 ${
                      step.color === "orange" ? "text-orange-500" : "text-blue-600"
                    }`} />
                  </div>
                  <span className={`absolute -top-2 -right-2 w-9 h-9 rounded-xl text-white text-sm font-extrabold flex items-center justify-center shadow-lg ${
                    step.color === "orange"
                      ? "bg-orange-500 shadow-orange-500/25"
                      : "bg-blue-600 shadow-blue-600/25"
                  }`}>
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
