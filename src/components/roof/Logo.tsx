const Logo = ({ variant = "dark" }: { variant?: "dark" | "light"; className?: string }) => {
  const textColor = variant === "light" ? "#ffffff" : "#111827";
  const subColor = variant === "light" ? "rgba(255,255,255,0.5)" : "#9CA3AF";

  return (
    <div className="flex items-center gap-3">
      {/* Mark */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <rect width="40" height="40" rx="10" fill="url(#logo-g)" />
        <path d="M20 8C20 8 13 17 13 21.5C13 25.5 16.1 28.8 20 28.8C23.9 28.8 27 25.5 27 21.5C27 17 20 8 20 8Z" fill="white" />
        <path d="M20 14.5L15 19.5H17V24H23V19.5H25L20 14.5Z" fill="#1565C0" fillOpacity="0.8" />
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#1565C0" />
            <stop offset="100%" stopColor="#0D47A1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span style={{ color: textColor, fontSize: "17px", fontWeight: 800, letterSpacing: "-0.5px", fontFamily: "Inter, system-ui, sans-serif" }}>
          H2O <span style={{ color: "#F57C00", fontWeight: 800 }}>Tak</span>
        </span>
        <span style={{ color: subColor, fontSize: "10px", fontWeight: 600, letterSpacing: "1.5px", fontFamily: "Inter, system-ui, sans-serif", textTransform: "uppercase" as const }}>
          Taktvätt & Målning
        </span>
      </div>
    </div>
  );
};

export default Logo;
