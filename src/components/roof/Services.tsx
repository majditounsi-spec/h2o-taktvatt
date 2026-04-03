import { Droplets, Paintbrush, Building2, SprayCan, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Taktvätt",
    description:
      "Professionell högtryckstvätt som tar bort mossa, lav, alger och smuts. Vi skyddar din fastighet med plastövertäckning under hela processen.",
    features: ["Högtryckstvätt", "Mossbehandling", "Algborttagning", "Skyddande plastning"],
    price: "Från 15 000 kr",
    image: "https://images.unsplash.com/photo-1625766763788-95ed44a1e7b4?auto=format&fit=crop&w=600&q=80",
    accent: "blue",
  },
  {
    icon: Paintbrush,
    title: "Takmålning",
    description:
      "Högkvalitativ takfärg som ger ett vackert resultat och skyddar pannorna mot väder och vind. 10 års garanti på takfärgen.",
    features: ["10 års garanti", "UV-beständig färg", "Professionellt resultat", "Förlänger livslängden"],
    price: "Från 30 000 kr",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    accent: "orange",
  },
  {
    icon: Building2,
    title: "Fasadtvätt",
    description:
      "Skonsam rengöring av alla fasadtyper – puts, trä, tegel och plåt. Tar bort smuts, alger och missfärgningar effektivt.",
    features: ["Skonsam rengöring", "Alla fasadtyper", "Algbehandling", "Fräscht utseende"],
    price: "Från 12 000 kr",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    accent: "blue",
  },
  {
    icon: SprayCan,
    title: "Takbehandling",
    description:
      "Professionell impregnering som förhindrar mossbildning och förlänger takets livslängd avsevärt. Rekommenderas efter ca 15 år.",
    features: ["Förhindrar mossa", "Vattenavvisande", "Miljövänligt", "Lång hållbarhet"],
    price: "Från 10 000 kr",
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=600&q=80",
    accent: "orange",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm font-semibold text-blue-700">Våra tjänster</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
            Komplett takvård för{" "}
            <span className="text-gradient-orange">din fastighet</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Allt inom takvård – från tvätt och behandling till målning och impregnering.
            Certifierad personal och kvalitetsgaranti.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100 hover:border-gray-200"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center ${
                  service.accent === "orange" ? "bg-orange-500" : "bg-blue-600"
                } shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-sm px-4 py-2 rounded-xl">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 mb-5 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${
                        service.accent === "orange"
                          ? "bg-orange-50 text-orange-700"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="#kontakt"
                  className={`inline-flex items-center text-sm font-bold gap-2 hover:gap-3 transition-all ${
                    service.accent === "orange" ? "text-orange-500 hover:text-orange-600" : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  Begär offert <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
