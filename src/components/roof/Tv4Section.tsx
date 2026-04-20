import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Tv4Section = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <div>
            {/* TV4 logo badge */}
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Som sett på</span>
              {/* TV4 logotype */}
              <svg viewBox="0 0 80 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="32" rx="4" fill="#1560BD"/>
                <text x="8" y="23" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="18" fill="white" letterSpacing="1">TV4</text>
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 tracking-tight leading-tight">
              Vi syntes på TV4 –<br />
              <span className="text-orange-500">Carina Bergs hus</span>
            </h2>

            <p className="text-gray-500 leading-relaxed mb-5">
              H2O Taktvätt fick förtroendet att ta hand om det välkända profilen Carina Bergs hus.
              Jobbet sändes i TV4 och visade hur en professionell taktvätt kan förvandla ett hus
              till något helt nytt.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              Det är precis det vi gör varje dag – oavsett om det är ett hus som syns i
              rutan eller en vanlig villa i Kalmar. Samma noggrannhet, samma höga standard.
            </p>

            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Begär offert <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/tv4-hus.webp"
                alt="Carina Bergs hus – taktvätt av H2O Taktvätt som syntes på TV4"
                className="w-full object-cover"
              />
            </div>

            {/* TV4 floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 flex items-center gap-3">
              <svg viewBox="0 0 80 32" className="h-7 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="32" rx="4" fill="#1560BD"/>
                <text x="8" y="23" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="18" fill="white" letterSpacing="1">TV4</text>
              </svg>
              <div>
                <p className="text-sm font-bold text-gray-900">Carina Bergs hus</p>
                <p className="text-xs text-gray-400">Sett på TV4</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tv4Section;
