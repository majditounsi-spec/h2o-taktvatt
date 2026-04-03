import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown, Droplets, Paintbrush, Building2, SprayCan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const serviceLinks = [
  { label: "Taktvätt", href: "/taktvatt", icon: Droplets, desc: "Högtryckstvätt av tak" },
  { label: "Takmålning", href: "/takmalning", icon: Paintbrush, desc: "10 års garanti på färg" },
  { label: "Fasadtvätt", href: "/fasadtvatt", icon: Building2, desc: "Alla fasadtyper" },
  { label: "Takbehandling", href: "/takbehandling", icon: SprayCan, desc: "Impregnering & skydd" },
];

const navLinks = [
  { label: "Hem", href: "/" },
  { label: "Tjänster", href: "/taktvatt", dropdown: true },
  { label: "Om oss", href: "/om-oss" },
  { label: "Omdömen", href: "/omdomen" },
  { label: "Kontakt", href: "/kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = location.pathname === "/";
  const headerBg = scrolled || !isHome
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
    : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-gray-600" : "text-white/80";
  const titleColor = scrolled || !isHome ? "text-gray-900" : "text-white";
  const iconColor = scrolled || !isHome ? "text-gray-900" : "text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-extrabold text-lg">H₂O</span>
            </div>
            <span className={`font-extrabold text-lg ${titleColor}`}>H2O Taktvätt</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500 ${textColor}`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                            <s.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{s.label}</p>
                            <p className="text-xs text-gray-400">{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                    location.pathname === link.href ? "text-orange-500" : textColor
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="tel:+46701234567" className={`hidden md:flex items-center gap-2 text-sm font-bold ${scrolled || !isHome ? "text-blue-600" : "text-white"}`}>
              <Phone className="w-4 h-4" />
              070-123 45 67
            </a>
            <Button asChild className="hidden sm:flex bg-orange-500 hover:bg-orange-600 text-white border-0 rounded-xl px-6 shadow-lg shadow-orange-500/20">
              <Link to="/kontakt">Fri offert</Link>
            </Button>
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Meny">
              {mobileOpen ? <X className={`w-6 h-6 ${iconColor}`} /> : <Menu className={`w-6 h-6 ${iconColor}`} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-6 pt-2">
            <div className="flex flex-col gap-1 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <Link to="/" className="text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl">
                Hem
              </Link>

              {/* Mobile services */}
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 pt-3 pb-1">Tjänster</p>
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 transition-colors"
                >
                  <s.icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{s.label}</p>
                    <p className="text-xs text-gray-400">{s.desc}</p>
                  </div>
                </Link>
              ))}

              <div className="border-t border-gray-100 mt-2 pt-2">
                <Link to="/om-oss" className="block text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl">Om oss</Link>
                <Link to="/omdomen" className="block text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl">Omdömen</Link>
                <Link to="/kontakt" className="block text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl">Kontakt</Link>
              </div>

              <div className="border-t border-gray-100 mt-2 pt-3 px-4">
                <a href="tel:+46701234567" className="flex items-center gap-2 text-base font-bold text-blue-600 py-2">
                  <Phone className="w-4 h-4" /> 070-123 45 67
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
