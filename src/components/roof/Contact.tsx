import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const inquiry = {
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      email: (data.get("email") as string) || null,
      address: (data.get("address") as string) || null,
      service: (data.get("service") as string) || null,
      message: (data.get("message") as string) || null,
    };

    try {
      // 1. Send to Netlify Forms (triggers email notification)
      const netlifyBody = new URLSearchParams();
      netlifyBody.append("form-name", "offertforfragan");
      data.forEach((value, key) => netlifyBody.append(key, value as string));

      const netlifyRes = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyBody.toString(),
      });

      // 2. Also save to Supabase (backup / DB record)
      const { error: dbError } = await supabase.from("inquiries").insert(inquiry);

      if (!netlifyRes.ok && dbError) {
        console.error("Submit failed:", { netlifyRes, dbError });
        setError("Något gick fel. Ring oss istället på 070-123 45 67.");
      } else {
        setSent(true);
        form.reset();
      }
    } catch (err) {
      console.error(err);
      setError("Kunde inte skicka. Kontrollera din internetanslutning eller ring oss.");
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Telefon", value: "070-123 45 67", href: "tel:+46701234567" },
    { icon: Mail, label: "E-post", value: "info@h2otaktvatt.se", href: "mailto:info@h2otaktvatt.se" },
    { icon: MapPin, label: "Verksamma i", value: "Kalmar län & Skåne" },
    { icon: Clock, label: "Öppettider", value: "Mån–Fre: 07–17 | Lör: 08–14" },
  ];

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Kontakt</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Begär en kostnadsfri offert
          </h2>
          <p className="text-gray-400">Fyll i formuläret så återkommer vi inom 24 timmar.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-400 hover:text-blue-600 transition-colors text-sm">{item.value}</a>
                    ) : (
                      <p className="text-gray-400 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-1">Kostnadsfri besiktning</h3>
              <p className="text-orange-100/80 text-sm mb-4">Vi åker ut och tittar på ditt tak utan kostnad.</p>
              <a href="tel:+46701234567" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors">
                <Phone className="w-4 h-4" /> Ring oss direkt
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3" ref={formRef}>
            <div
              className={`bg-white rounded-2xl p-7 border border-gray-100 transition-all duration-700 ease-out ${
                visible
                  ? "opacity-100 translate-y-0 scale-100 shadow-xl"
                  : "opacity-0 translate-y-8 scale-95 shadow-none"
              }`}
            >
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tack för din förfrågan!</h3>
                  <p className="text-gray-400 mb-6">Vi återkommer inom 24 timmar med en offert.</p>
                  <button onClick={() => setSent(false)} className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Skicka en till förfrågan
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="offertforfragan"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="offertforfragan" />
                  <p className="hidden">
                    <label>
                      Lämna detta fält tomt: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Namn *</label>
                      <Input name="name" placeholder="Ditt namn" required className="rounded-xl border-gray-200 h-11" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Telefon *</label>
                      <Input name="phone" placeholder="070-XXX XX XX" required className="rounded-xl border-gray-200 h-11" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">E-post</label>
                      <Input name="email" type="email" placeholder="din@email.se" className="rounded-xl border-gray-200 h-11" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Adress</label>
                      <Input name="address" placeholder="Gatuadress, ort" className="rounded-xl border-gray-200 h-11" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Tjänst</label>
                    <select name="service" className="w-full rounded-xl border border-gray-200 bg-white px-4 h-11 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Välj tjänst...</option>
                      <option value="Taktvätt">Taktvätt</option>
                      <option value="Takmålning">Takmålning</option>
                      <option value="Taktvätt & Takmålning">Taktvätt & Takmålning</option>
                      <option value="Fasadtvätt">Fasadtvätt</option>
                      <option value="Takbehandling & Impregnering">Takbehandling & Impregnering</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Meddelande</label>
                    <Textarea name="message" placeholder="Beskriv ditt tak och vad du behöver hjälp med..." rows={4} className="rounded-xl border-gray-200 resize-none" />
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-700 text-sm p-3 rounded-xl">{error}</div>
                  )}

                  <Button type="submit" size="lg" disabled={sending} className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-6 text-sm font-semibold disabled:opacity-50">
                    <Send className="w-4 h-4 mr-2" />
                    {sending ? "Skickar..." : "Skicka offertförfrågan"}
                  </Button>

                  <p className="text-xs text-center text-gray-300">
                    Vi svarar inom 24 timmar. Dina uppgifter behandlas konfidentiellt.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
