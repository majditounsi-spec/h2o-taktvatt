import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Hem", href: "#hem" },
    { label: "Tjänster", href: "#tjanster" },
    { label: "Så fungerar det", href: "#process" },
    { label: "Om oss", href: "#om-oss" },
    { label: "Omdömen", href: "#omdomen" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hem" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-extrabold text-lg">H₂O</span>
            </div>
            <div>
              <span className={`font-extrabold text-lg ${scrolled ? "text-gray-900" : "text-white"}`}>
                H2O Taktvätt
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  scrolled ? "text-gray-600" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+46701234567"
              className={`hidden md:flex items-center gap-2 text-sm font-bold ${
                scrolled ? "text-blue-600" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              070-123 45 67
            </a>
            <Button
              asChild
              className="hidden sm:flex bg-orange-500 hover:bg-orange-600 text-white border-0 rounded-xl px-6 shadow-lg shadow-orange-500/20"
            >
              <a href="#kontakt">Fri offert</a>
            </Button>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Meny"
            >
              {mobileOpen ? (
                <X className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-6 pt-2">
            <div className="flex flex-col gap-1 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors px-4 py-3 rounded-xl"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-gray-100 mt-2 pt-3 px-4">
                <a href="tel:+46701234567" className="flex items-center gap-2 text-base font-bold text-blue-600 py-2">
                  <Phone className="w-4 h-4" />
                  070-123 45 67
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
