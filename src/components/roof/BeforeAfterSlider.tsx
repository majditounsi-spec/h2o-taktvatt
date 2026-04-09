import { useState, useRef, useCallback } from "react";

const BeforeAfterSlider = () => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    update(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) update(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Slider */}
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            {/* After (clean roof) — full background */}
            <img
              src="https://images.pexels.com/photos/15321060/pexels-photo-15321060.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Tak efter tvätt – rena röda tegelpannor"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Before (old roof) — clipped from right */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src="https://images.pexels.com/photos/3621348/pexels-photo-3621348.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tak före tvätt – slitna och missfärgade pannor"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-auto">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 5l-5 7 5 7" />
                  <path d="M16 5l5 7-5 7" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-20">Före</span>
            <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-lg z-20">Efter</span>
          </div>

          {/* Text content */}
          <div>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Resultat</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Äldre pannor har oftast bättre kvalité än nya pannor.
            </h2>
            <p className="text-gray-500 mb-4 leading-relaxed">
              Efter många år försvinner ytskiktet på takpannan, vilket gör pannan
              mottaglig för fukt. Detta skapar en miljö där mossa, lav och smuts
              trivs och risk finns att pannan spricker.
            </p>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Takpannorna har potential för en betydligt längre livslängd. Vår
              rekommendation är att vårda ditt äldre tak – de flesta äldre tak
              behöver inte bytas ut utan kan tvättas, behandlas och målas.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 rounded-xl px-5 py-3">
                <p className="text-lg font-bold text-gray-900">15–20 år</p>
                <p className="text-xs text-gray-500">Extra livslängd med behandling</p>
              </div>
              <div className="bg-orange-50 rounded-xl px-5 py-3">
                <p className="text-lg font-bold text-gray-900">70%</p>
                <p className="text-xs text-gray-500">Billigare än nytt tak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
