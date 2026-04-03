import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tack för din förfrågan!",
      description: "Vi återkommer inom 24 timmar med en offert.",
    });
    setFormData({ name: "", email: "", phone: "", address: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Kontakta oss
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Begär en kostnadsfri offert
          </h2>
          <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
            Fyll i formuläret nedan så återkommer vi inom 24 timmar med en offert.
            Du kan även ringa oss direkt.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6 space-y-5">
                <div className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Telefon</h4>
                    <a href="tel:+46701234567" className="text-muted-foreground hover:text-primary transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      070-123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>E-post</h4>
                    <a href="mailto:info@h2otaktvatt.se" className="text-muted-foreground hover:text-primary transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      info@h2otaktvatt.se
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Verksamma i</h4>
                    <p className="text-muted-foreground text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Hela södra och mellersta Sverige
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Öppettider</h4>
                    <p className="text-muted-foreground text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Mån–Fre: 07:00–17:00<br />
                      Lör: 08:00–14:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA card */}
            <div className="bg-gradient-to-br from-[hsl(199,89%,38%)] to-[hsl(152,60%,42%)] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Kostnadsfri besiktning</h3>
              <p className="text-white/80 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Vi kommer ut och besiktigar ditt tak helt kostnadsfritt och lämnar en offert på plats.
              </p>
              <a
                href="tel:+46701234567"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-4 py-2.5 text-sm font-semibold"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Phone className="w-4 h-4" />
                Ring oss nu
              </a>
            </div>
          </div>

          {/* Contact form */}
          <Card className="lg:col-span-3 border-0 shadow-card">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Namn *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ditt namn"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Telefon *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="070-XXX XX XX"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                      E-post
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="din@email.se"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Adress
                    </label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Gatuadress, ort"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Tjänst
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="">Välj tjänst...</option>
                    <option value="taktvatt">Taktvätt</option>
                    <option value="takmalning">Takmålning</option>
                    <option value="taktvatt-malning">Taktvätt & Takmålning</option>
                    <option value="fasadtvatt">Fasadtvätt</option>
                    <option value="impregnering">Takbehandling & Impregnering</option>
                    <option value="annat">Annat</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Meddelande
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beskriv ditt tak och vad du behöver hjälp med..."
                    rows={4}
                    className="rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[hsl(199,89%,38%)] to-[hsl(152,60%,42%)] hover:opacity-90 text-white border-0 rounded-xl py-6"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Skicka offertförfrågan</span>
                </Button>

                <p className="text-xs text-center text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Vi svarar inom 24 timmar. Dina uppgifter behandlas konfidentiellt.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
