import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Anna Lindström",
    location: "Helsingborg",
    text: "Fantastiskt resultat! Vårt tak ser ut som nytt efter tvätt och målning. Professionellt bemötande från start till slut. Rekommenderar varmt!",
    rating: 5,
    service: "Taktvätt & Takmålning",
  },
  {
    name: "Erik Johansson",
    location: "Malmö",
    text: "Vi hade massa mossa och alger på taket som försvann helt efter behandlingen. Teamet var noggranna och städade fint efter sig. Mycket nöjd!",
    rating: 5,
    service: "Taktvätt",
  },
  {
    name: "Maria Svensson",
    location: "Göteborg",
    text: "Bra pris, proffsig personal och ett tak som ser helt förnyat ut. De gav oss bra råd om underhåll framöver. 10 års garanti på färgen ger trygghet.",
    rating: 5,
    service: "Takmålning",
  },
  {
    name: "Karl Pettersson",
    location: "Stockholm",
    text: "Beställde fasadtvätt och taktvätt samtidigt. Huset ser ut som nybyggt! Snabbt och professionellt utfört. Kommer definitivt använda dem igen.",
    rating: 5,
    service: "Fasadtvätt & Taktvätt",
  },
  {
    name: "Lisa Andersson",
    location: "Lund",
    text: "Fick rekommendation av en granne och blev inte besviken. Taket hade inte tvättats på 20 år och skillnaden är enorm. Fantastiskt jobb!",
    rating: 5,
    service: "Taktvätt",
  },
  {
    name: "Johan Bergström",
    location: "Uppsala",
    text: "Professionellt från offert till slutbesiktning. De förklarade hela processen tydligt och levererade exakt som utlovat. Toppbetyg!",
    rating: 5,
    service: "Taktvätt & Takmålning",
  },
];

const Testimonials = () => {
  return (
    <section id="omdomen" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Omdömen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Vad våra kunder säger
          </h2>
          <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
            Vi är stolta över att ha tusentals nöjda kunder runt om i Sverige.
            Här är några av deras berättelser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-5 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "{t.text}"
                </p>

                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{t.name}</div>
                    <div className="text-xs text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>{t.location}</div>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t.service}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
