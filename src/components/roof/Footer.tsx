import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const serviceFooterLinks = [
  { label: "Taktvätt", to: "/taktvatt" },
  { label: "Takmålning", to: "/takmalning" },
  { label: "Fasadtvätt", to: "/fasadtvatt" },
  { label: "Takbehandling", to: "/takbehandling" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0c1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo className="mb-5 [&_span]:text-white [&_.text-gray-400]:text-blue-200/40 [&_.text-blue-600]:text-blue-400" />
            <p className="text-blue-200/40 text-sm leading-relaxed">
              Professionell taktvätt, takmålning och fasadtvätt. Verksamma i Kalmar län och Skåne sedan 2018.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Tjänster</h4>
            <ul className="space-y-2.5">
              {serviceFooterLinks.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="text-blue-200/40 hover:text-orange-400 transition-colors text-sm">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Vi utför jobb i</h4>
            <ul className="space-y-2.5">
              {["Kalmar län", "Öland", "Blekinge", "Skåne", "Halland"].map((c) => (
                <li key={c}><span className="text-blue-200/40 text-sm">{c}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <a href="tel:+46790555130" className="text-blue-200/40 hover:text-white text-sm transition-colors">079-055 51 30</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <a href="mailto:kontakt@h2otaktvatt.se" className="text-blue-200/40 hover:text-white text-sm transition-colors">kontakt@h2otaktvatt.se</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <span className="text-blue-200/40 text-sm">Kalmar län & Skåne</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/25 text-sm">
            &copy; {new Date().getFullYear()} H2O Taktvätt. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-200/25 hover:text-white text-sm transition-colors">Integritetspolicy</a>
            <a href="#" className="text-blue-200/25 hover:text-white text-sm transition-colors">Villkor</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
