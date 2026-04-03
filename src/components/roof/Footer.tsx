import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">H₂O</span>
              </div>
              <span className="font-extrabold text-lg">H2O Taktvätt</span>
            </div>
            <p className="text-blue-200/50 text-sm leading-relaxed">
              Professionell taktvätt, takmålning och fasadtvätt med garanti.
              Verksamma i hela södra och mellersta Sverige sedan 2008.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-5">Tjänster</h4>
            <ul className="space-y-3">
              {["Taktvätt", "Takmålning", "Fasadtvätt", "Takbehandling", "Impregnering", "Mossbehandling"].map((s) => (
                <li key={s}>
                  <a href="#tjanster" className="text-blue-200/50 hover:text-orange-400 transition-colors text-sm">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Områden */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-5">Vi finns i</h4>
            <ul className="space-y-3">
              {["Stockholm", "Göteborg", "Malmö", "Helsingborg", "Lund", "Uppsala"].map((c) => (
                <li key={c}><span className="text-blue-200/50 text-sm">{c}</span></li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-5">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <a href="tel:+46701234567" className="text-blue-200/50 hover:text-white text-sm transition-colors">070-123 45 67</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <a href="mailto:info@h2otaktvatt.se" className="text-blue-200/50 hover:text-white text-sm transition-colors">info@h2otaktvatt.se</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <span className="text-blue-200/50 text-sm">Södra & Mellersta Sverige</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/30 text-sm">
            &copy; {new Date().getFullYear()} H2O Taktvätt. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-200/30 hover:text-white text-sm transition-colors">Integritetspolicy</a>
            <a href="#" className="text-blue-200/30 hover:text-white text-sm transition-colors">Villkor</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
