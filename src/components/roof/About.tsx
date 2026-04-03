import { Shield, Users, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Certifierade proffs",
    text: "All vår personal är utbildad och certifierad inom takvård och höghöjdsarbete.",
  },
  {
    icon: Users,
    title: "3000+ nöjda kunder",
    text: "Vi har hjälpt tusentals fastighetsägare runt om i Sverige att förnya sina tak.",
  },
  {
    icon: Leaf,
    title: "Miljövänligt",
    text: "Vi använder miljöcertifierade produkter och metoder som är skonsamma mot naturen.",
  },
  {
    icon: Award,
    title: "10 års garanti",
    text: "Vi står för kvalitet och erbjuder upp till 10 års garanti på takmålning.",
  },
];

const About = () => {
  return (
    <section id="om-oss" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden relative">
              {/* Roof illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[hsl(199,89%,38%)] to-[hsl(152,60%,42%)] flex items-center justify-center">
                    <span className="text-5xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>H₂O</span>
                  </div>
                  <p className="text-slate-500 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Sedan 2008</p>
                </div>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-5 max-w-[220px]">
              <div className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>15+</div>
              <div className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                års erfarenhet av professionell takvård
              </div>
            </div>
          </div>

          {/* Right – Text */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
              Om oss
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-5">
              Specialister på taktvätt och takmålning sedan 2008
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              H2O Taktvätt grundades med en enkel vision: att erbjuda Sveriges bästa takvård med
              högsta kvalitet och service. Vi behandlar varje tak som om det vore vårt eget.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Vi rekommenderar att du behandlar ditt tak efter cirka 15 år för att behålla skyddet av
              takpannorna. När du börjar se sand i hängrännan är det ett tecken på att nedbrytningen
              av betongpannorna har börjat. Kontakta oss för en kostnadsfri besiktning!
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{f.title}</h4>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
