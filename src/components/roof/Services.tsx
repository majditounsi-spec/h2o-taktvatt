import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RoofWashIcon, RoofPaintIcon, FacadeWashIcon, RoofShieldIcon } from "./ServiceIcons";

const services = [
  {
    icon: RoofWashIcon,
    title: "Taktvätt",
    description: "Professionell högtryckstvätt som tar bort mossa, lav och alger. Skyddande plastning under hela processen.",
    features: ["Högtryckstvätt", "Mossbehandling", "Algborttagning"],
    price: "Från 15 000 kr",
    image: "https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg?auto=compress&cs=tinysrgb&w=600",
    accent: "blue",
    link: "/taktvatt",
  },
  {
    icon: RoofPaintIcon,
    title: "Takmålning",
    description: "UV-beständig takfärg som skyddar betongpannor i minst 10 år. Vackert, hållbart resultat.",
    features: ["10 års garanti", "UV-beständig", "Valfri kulör"],
    price: "Från 30 000 kr",
    image: "https://images.pexels.com/photos/1917849/pexels-photo-1917849.jpeg?auto=compress&cs=tinysrgb&w=600",
    accent: "orange",
    link: "/takmalning",
  },
  {
    icon: FacadeWashIcon,
    title: "Fasadtvätt",
    description: "Skonsam rengöring av alla fasadtyper. Puts, trä, tegel och plåt – anpassad teknik per material.",
    features: ["Alla fasadtyper", "Skonsam teknik", "Algbehandling"],
    price: "Från 12 000 kr",
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
    accent: "blue",
    link: "/fasadtvatt",
  },
  {
    icon: RoofShieldIcon,
    title: "Takbehandling",
    description: "Professionell impregnering som förhindrar mossbildning och vatteninträngning. Förlänger takets livslängd.",
    features: ["Vattenavvisande", "Miljövänligt", "Lång hållbarhet"],
    price: "Från 10 000 kr",
    image: "https://images.pexels.com/photos/16208002/pexels-photo-16208002.jpeg?auto=compress&cs=tinysrgb&w=600",
    accent: "orange",
    link: "/takbehandling",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-24 md:py-32 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Våra tjänster</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Komplett takvård
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Tvätt, målning, impregnering och fasadtvätt – allt under ett tak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center ${
                  service.accent === "orange" ? "bg-orange-500" : "bg-blue-600"
                }`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-4 right-4 bg-white/95 text-gray-900 font-semibold text-sm px-3 py-1.5 rounded-lg">
                  {service.price}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-500">
                      {f}
                    </span>
                  ))}
                </div>

                <span className={`inline-flex items-center text-sm font-semibold gap-2 group-hover:gap-3 transition-all ${
                  service.accent === "orange" ? "text-orange-500" : "text-blue-600"
                }`}>
                  Läs mer <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
