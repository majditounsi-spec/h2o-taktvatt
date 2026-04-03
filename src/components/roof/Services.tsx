import { Droplets, Paintbrush, Building2, SprayCan, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Droplets,
    title: "Taktvätt",
    description:
      "Professionell högtryckstvätt av tak som tar bort mossa, lav, alger och smuts. Vi skyddar din fastighet med plastövertäckning och monterar slangar vid stuprör för att förhindra stopp i avloppet.",
    features: ["Högtryckstvätt", "Mossbehandling", "Algborttagning", "Skyddande plastning"],
    price: "Från 15 000 kr",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Paintbrush,
    title: "Takmålning",
    description:
      "Vi målar ditt tak med högkvalitativ takfärg som ger ett vackert resultat och skyddar betongpannorna mot väder och vind. 10 års garanti på takfärgen.",
    features: ["10 års garanti", "UV-beständig färg", "Professionellt resultat", "Förlänger takets livslängd"],
    price: "Från 30 000 kr",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Building2,
    title: "Fasadtvätt",
    description:
      "Rengöring av fasader med skonsam teknik som tar bort smuts, alger och missfärgningar. Passar alla typer av fasadmaterial – puts, trä, tegel och plåt.",
    features: ["Skonsam rengöring", "Alla fasadtyper", "Algbehandling", "Fräscht utseende"],
    price: "Från 12 000 kr",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: SprayCan,
    title: "Takbehandling & Impregnering",
    description:
      "Skydda ditt tak med professionell impregnering som förhindrar mossbildning och förlänger takets livslängd avsevärt. Rekommenderas efter ca 15 år.",
    features: ["Förhindrar mossa", "Vattenavvisande", "Förlänger livslängden", "Miljövänliga produkter"],
    price: "Från 10 000 kr",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Våra tjänster
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Komplett takvård för din fastighet
          </h2>
          <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
            Vi erbjuder allt inom takvård – från tvätt och behandling till målning och impregnering.
            Alla tjänster utförs av certifierad personal med kvalitetsgaranti.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-0 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className={`${service.bgColor} p-3 rounded-xl shrink-0`}>
                    <service.icon className="w-7 h-7 text-foreground/80" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {service.price}
                      </span>
                      <a
                        href="#kontakt"
                        className="inline-flex items-center text-sm font-semibold text-primary hover:gap-3 gap-1 transition-all"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Begär offert <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
