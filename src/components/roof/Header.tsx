import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown, Droplets, Paintbrush, Building2, SprayCan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const serviceLinks = [
  { label: "Taktvätt", href: "/taktvatt", icon: Droplets, desc: "Högtryckstvätt av tak" },
  { label: "Takmålning", href: "/takmalning", icon: Paintbrush, desc: "Målning med 10 års garanti" },
  { label: "Fasadtvätt", href: "/fasadtvatt", icon: Building2, desc: "Alla fasadtyper" },
  { label: "Takbehandling", href: "/takbehandling", icon: SprayCan, desc: "Impregnering & skydd" },
];

const navLinks = [
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
  const solid = scrolled || !isHome;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      solid ? "bg-[#0c1a2e]/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <Logo variant="light" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500 ${
                      solid ? "text-white/80" : "text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white rounded-2xl shadow-xl border border-gray-100/80 p-2 z-50">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                            <s.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{s.label}</p>
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
                    location.pathname === link.href
                      ? "text-orange-500"
                      : solid ? "text-white/80" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+46701234567" className={`hidden md:flex items-center gap-2 text-sm font-semibold ${solid ? "text-white/80" : "text-white"}`}>
              <Phone className="w-4 h-4" />
              070-123 45 67
            </a>
            <Button asChild className="hidden sm:flex bg-orange-500 hover:bg-orange-600 text-white border-0 rounded-xl px-5 h-10 text-sm font-semibold">
              <Link to="/kontakt">Fri offert</Link>
            </Button>
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X className={`w-6 h-6 text-white`} />
              ) : (
                <Menu className={`w-6 h-6 text-white`} />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-6 pt-2">
            <div className="bg-white rounded-2xl p-3 shadow-xl border border-gray-100">
              <p className="text-[11px] font-semibold text-gray-300 uppercase tracking-widest px-4 pt-3 pb-1">Tjänster</p>
              {serviceLinks.map((s) => (
                <Link key={s.href} to={s.href} className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-blue-50/60">
                  <s.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{s.label}</span>
                </Link>
              ))}
              <div className="border-t border-gray-100 mt-2 pt-2">
                <Link to="/om-oss" className="block text-sm font-medium text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-xl">Om oss</Link>
                <Link to="/omdomen" className="block text-sm font-medium text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-xl">Omdömen</Link>
                <Link to="/kontakt" className="block text-sm font-medium text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-xl">Kontakt</Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
