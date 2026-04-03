import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Hem", href: "#hem" },
    { label: "Tjänster", href: "#tjanster" },
    { label: "Så fungerar det", href: "#process" },
    { label: "Om oss", href: "#om-oss" },
    { label: "Omdömen", href: "#omdomen" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hem" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(199,89%,38%)] to-[hsl(152,60%,42%)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">H₂O</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                H2O Taktvätt
              </span>
              <span className="block text-xs text-muted-foreground -mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                Taktvätt & Takmålning
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a href="tel:+46701234567" className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Phone className="w-4 h-4" />
              070-123 45 67
            </a>
            <Button asChild className="hidden sm:flex bg-gradient-to-r from-[hsl(199,89%,38%)] to-[hsl(152,60%,42%)] hover:opacity-90 text-white border-0">
              <a href="#kontakt" style={{ fontFamily: 'Inter, sans-serif' }}>Fri offert</a>
            </Button>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Meny"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+46701234567" className="flex items-center gap-2 text-base font-semibold text-primary px-2 py-1">
                <Phone className="w-4 h-4" />
                070-123 45 67
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
