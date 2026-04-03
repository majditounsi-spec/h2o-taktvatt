import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", address: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Tack för din förfrågan!", description: "Vi återkommer inom 24 timmar." });
    setFormData({ name: "", email: "", phone: "", address: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Phone, label: "Telefon", value: "070-123 45 67", href: "tel:+46701234567" },
    { icon: Mail, label: "E-post", value: "info@h2otaktvatt.se", href: "mailto:info@h2otaktvatt.se" },
    { icon: MapPin, label: "Verksamma i", value: "Hela södra & mellersta Sverige" },
    { icon: Clock, label: "Öppettider", value: "Mån–Fre: 07–17 | Lör: 08–14" },
  ];

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm font-semibold text-blue-700">Kontakta oss</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
            Begär en{" "}
            <span className="text-gradient-blue">kostnadsfri offert</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Fyll i formuläret så återkommer vi inom 24 timmar.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left - Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-7 shadow-card border border-gray-100 space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-500 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80"
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/95 to-orange-500/80" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-extrabold text-white mb-1">Kostnadsfri besiktning</h3>
                <p className="text-orange-100 text-sm mb-3">Vi kommer ut och besiktigar ditt tak gratis.</p>
                <a
                  href="tel:+46701234567"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-xl px-4 py-2.5 text-sm font-bold text-white w-fit"
                >
                  <Phone className="w-4 h-4" />
                  Ring oss nu
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-gray-700 mb-2 block">Namn *</label>
                    <Input
                      name="name" value={formData.name} onChange={handleChange}
                      placeholder="Ditt namn" required
                      className="rounded-xl border-gray-200 focus:border-blue-500 h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700 mb-2 block">Telefon *</label>
                    <Input
                      name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="070-XXX XX XX" required
                      className="rounded-xl border-gray-200 focus:border-blue-500 h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-gray-700 mb-2 block">E-post</label>
                    <Input
                      name="email" type="email" value={formData.email} onChange={handleChange}
                      placeholder="din@email.se"
                      className="rounded-xl border-gray-200 focus:border-blue-500 h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700 mb-2 block">Adress</label>
                    <Input
                      name="address" value={formData.address} onChange={handleChange}
                      placeholder="Gatuadress, ort"
                      className="rounded-xl border-gray-200 focus:border-blue-500 h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Tjänst</label>
                  <select
                    name="service" value={formData.service} onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-background px-4 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Välj tjänst...</option>
                    <option value="taktvatt">Taktvätt</option>
                    <option value="takmalning">Takmålning</option>
                    <option value="taktvatt-malning">Taktvätt & Takmålning</option>
                    <option value="fasadtvatt">Fasadtvätt</option>
                    <option value="impregnering">Takbehandling & Impregnering</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Meddelande</label>
                  <Textarea
                    name="message" value={formData.message} onChange={handleChange}
                    placeholder="Beskriv ditt tak och vad du behöver hjälp med..."
                    rows={4}
                    className="rounded-xl border-gray-200 focus:border-blue-500 resize-none"
                  />
                </div>

                <Button
                  type="submit" size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white border-0 rounded-2xl py-7 text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Skicka offertförfrågan
                </Button>

                <p className="text-xs text-center text-gray-400">
                  Vi svarar inom 24 timmar. Dina uppgifter behandlas konfidentiellt.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
