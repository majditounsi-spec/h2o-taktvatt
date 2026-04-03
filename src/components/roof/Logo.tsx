const Logo = ({ className = "", size = "default" }: { className?: string; size?: "default" | "large" }) => {
  const w = size === "large" ? 56 : 44;
  const h = size === "large" ? 56 : 44;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width={w} height={h} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        {/* Background */}
        <rect width="56" height="56" rx="14" fill="url(#logo-gradient)" />

        {/* Roof / house shape */}
        <path d="M28 12L12 26H18V40H38V26H44L28 12Z" fill="white" fillOpacity="0.15" />

        {/* Water droplet */}
        <path
          d="M28 18C28 18 21 27 21 31.5C21 35.36 24.13 38.5 28 38.5C31.87 38.5 35 35.36 35 31.5C35 27 28 18 28 18Z"
          fill="white"
          fillOpacity="0.95"
        />

        {/* Water wave lines inside droplet */}
        <path
          d="M23.5 32C24.5 30.5 26 31.5 28 30.5C30 29.5 31.5 30.5 32.5 32"
          stroke="url(#logo-gradient)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M24 34.5C25 33 26.5 34 28.5 33C30.5 32 32 33 33 34.5"
          stroke="url(#logo-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="56" y2="56">
            <stop offset="0%" stopColor="#1565C0" />
            <stop offset="100%" stopColor="#0D47A1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col">
        <span className="font-extrabold text-lg leading-tight tracking-tight">
          H2O <span className="font-bold text-blue-600">Tak</span>
        </span>
        <span className="text-[11px] font-medium text-gray-400 tracking-wide uppercase">
          Taktvätt & Takmålning
        </span>
      </div>
    </div>
  );
};

export default Logo;
