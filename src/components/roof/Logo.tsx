const Logo = ({ variant = "dark" }: { variant?: "dark" | "light"; className?: string }) => {
  const textColor = variant === "light" ? "#ffffff" : "#111827";

  return (
    <div className="flex items-center gap-0">
      <svg width="160" height="48" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* --- Integrated logomark: Roof peak flowing into water --- */}

        {/* Roof shape - left side */}
        <path
          d="M6 28L22 12L38 28"
          stroke="url(#roof-stroke)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Water wave under roof */}
        <path
          d="M4 34C8 30 12 33 16 31C20 29 24 32 28 30C32 28 36 31 40 29"
          stroke="#F57C00"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M8 40C12 36 15 39 19 37C23 35 27 38 31 36C35 34 38 37 42 35"
          stroke="#F57C00"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* Water droplet accent on roof peak */}
        <circle cx="22" cy="20" r="3.5" fill="#F57C00" />
        <circle cx="22" cy="19.2" r="1.2" fill="white" opacity="0.6" />

        {/* --- Typography: H2O TAK --- */}

        {/* H */}
        <path d="M52 14V34M52 24H62M62 14V34" stroke={textColor} strokeWidth="3.5" strokeLinecap="round" />

        {/* 2 - stylized */}
        <path d="M68 18C68 16 70 14 73 14C76 14 78 16 78 18C78 20 76 22 68 28H78" stroke={textColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* O */}
        <ellipse cx="87" cy="24" rx="6" ry="10" stroke={textColor} strokeWidth="3" fill="none" />

        {/* Divider dot */}
        <circle cx="100" cy="24" r="2" fill="#F57C00" />

        {/* T */}
        <path d="M106 14H118M112 14V34" stroke={textColor} strokeWidth="3.5" strokeLinecap="round" />

        {/* A */}
        <path d="M122 34L129 14L136 34M124.5 27H133.5" stroke={textColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* K */}
        <path d="M140 14V34M140 24L150 14M140 24L150 34" stroke={textColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        <defs>
          <linearGradient id="roof-stroke" x1="6" y1="20" x2="38" y2="20">
            <stop offset="0%" stopColor="#1565C0" />
            <stop offset="100%" stopColor="#0D47A1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
