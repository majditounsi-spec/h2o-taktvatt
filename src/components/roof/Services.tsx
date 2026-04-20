import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Taktvätt",
    tagline: "Mest populär",
    description:
      "Professionell högtryckstvätt som tar bort mossa, lav och alger. Skyddande plastning under hela processen – inga skador på hus eller trädgård.",
    features: ["Högtryckstvätt", "Mossbehandling", "Algborttagning"],
    price: "Från 14 900 kr",
    image: "/images/taktvatt-service.jpg",
    link: "/taktvatt",
    size: "large",
  },
  {
    title: "Takmålning",
    tagline: "10 års garanti",
    description:
      "UV-beständig takfärg som skyddar betongpannor i minst 10 år. Vackert, hållbart resultat.",
    features: ["UV-beständig", "Valfri kulör"],
    price: "Från 24 900 kr",
    image: "/images/takmalning-hero.jpg",
    link: "/takmalning",
    size: "wide",
  },
  {
    title: "Fasadtvätt",
    description: "Skonsam rengöring av alla fasadtyper – puts, trä, tegel och plåt.",
    price: "Från 12 900 kr",
    image:
      "https://images.pexels.com/photos/5652626/pexels-photo-5652626.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/fasadtvatt",
    size: "small",
  },
  {
    title: "Anti-alg behandling",
    description: "Impregnering som förhindrar mossbildning och förlänger livslängden.",
    price: "Från 5 900 kr",
    image:
      "https://images.pexels.com/photos/5401232/pexels-photo-5401232.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/takbehandling",
    size: "small",
  },
  {
    title: "Marktvätt",
    description: "Rengöring av uppfart, altan och stenplattor – som nya igen.",
    price: "Från 3 900 kr",
    image:
      "/images/marktvatt.webp",
    link: "/kontakt",
    size: "small",
  },
];

const Services = () => {
  const large = services[0];
  const wide = services[1];
  const smalls = services.slice(2);

  return (
    <section id="tjanster" className="py-24 md:py-32 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
              Våra tjänster
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Komplett takvård
              <br />
              <span className="text-gray-400">under ett tak</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs leading-relaxed">
            Fem specialiserade tjänster – alla med samma höga kvalitet och 10 års garanti.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 md:gap-5 md:h-[640px]">
          {/* Large tile — Taktvätt */}
          <Link
            to={large.link}
            className="group relative md:col-span-3 md:row-span-2 rounded-3xl overflow-hidden bg-gray-900 min-h-[440px] md:min-h-0"
          >
            <img
              src={large.image}
              alt={large.title}
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    {large.tagline}
                  </span>
                </span>
                <span className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-gray-900 transition-colors" />
                </span>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  {large.title}
                </h3>
                <p className="text-white/80 max-w-md mb-6 leading-relaxed">
                  {large.description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {large.features?.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90"
                    >
                      {f}
                    </span>
                  ))}
                  <span className="ml-auto text-white font-semibold">{large.price}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Wide tile — Takmålning */}
          <Link
            to={wide.link}
            className="group relative md:col-span-3 rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 min-h-[260px]"
          >
            <div className="h-full flex flex-col md:flex-row">
              <div className="relative md:w-2/5 h-40 md:h-full overflow-hidden shrink-0">
                <img
                  src={wide.image}
                  alt={wide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {wide.tagline}
                </span>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                      {wide.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {wide.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {wide.features?.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] font-medium px-2 py-1 rounded-md bg-blue-50 text-blue-700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-100">
                  <span className="font-semibold text-gray-900 text-sm">{wide.price}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Small tiles */}
          {smalls.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 min-h-[260px]"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">
                  {service.description}
                </p>
                <span className="text-xs font-semibold text-gray-900">{service.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
