import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(199,89%,38%)] to-[hsl(152,60%,42%)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">H₂O</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>H2O Taktvätt</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Professionell taktvätt, takmålning och fasadtvätt med garanti. Verksamma i hela södra och mellersta Sverige sedan 2008.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Tjänster
            </h4>
            <ul className="space-y-2.5">
              {["Taktvätt", "Takmålning", "Fasadtvätt", "Takbehandling", "Impregnering", "Mossbehandling"].map((s) => (
                <li key={s}>
                  <a href="#tjanster" className="text-slate-400 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Områden */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Vi finns i
            </h4>
            <ul className="space-y-2.5">
              {["Stockholm", "Göteborg", "Malmö", "Helsingborg", "Lund", "Uppsala", "Linköping", "Norrköping"].map((c) => (
                <li key={c}>
                  <span className="text-slate-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+46701234567" className="text-slate-400 hover:text-white text-sm transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  070-123 45 67
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:info@h2otaktvatt.se" className="text-slate-400 hover:text-white text-sm transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  info@h2otaktvatt.se
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Södra & Mellersta Sverige
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            &copy; {new Date().getFullYear()} H2O Taktvätt. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Integritetspolicy
            </a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Villkor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
