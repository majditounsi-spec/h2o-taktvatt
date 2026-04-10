const Logo = ({ variant = "dark" }: { variant?: "dark" | "light"; className?: string }) => {
  const textColor = variant === "light" ? "#ffffff" : "#1a2744";

  return (
    <div className="flex items-center gap-0">
      <svg width="180" height="48" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Water drop icon */}
        <g transform="translate(0, 2)">
          {/* Drop shape - darkest layer (bottom) */}
          <path
            d="M22 6C22 6 8 22 8 30C8 37.7 14.3 44 22 44C29.7 44 36 37.7 36 30C36 22 22 6 22 6Z"
            fill="#1a3a6b"
          />
          {/* Drop shape - medium layer */}
          <path
            d="M22 6C22 6 10 20 10 29C10 34.5 14 40 22 40C26 40 29.5 37 31 33C32 30 32 26 29 21C26 16 22 6 22 6Z"
            fill="#2d6cb5"
          />
          {/* Drop shape - light layer (top area) */}
          <path
            d="M22 6C22 6 13 18 13 26C13 30 15.5 34 20 35C23 35.5 25.5 33 26.5 30C28 26 26 20 22 6Z"
            fill="#5ba3d9"
          />
          {/* Drop shape - lightest accent at top */}
          <path
            d="M22 10C22 10 16 19 16 25C16 28 18 30 20 30C22 30 23.5 28 23.5 25.5C23.5 22 22 10 22 10Z"
            fill="#8ec8f0"
          />
          {/* White wave/swirl inside drop */}
          <path
            d="M14 34C16 31 19 33 22 31C25 29 28 32 30 30"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
        </g>

        {/* H2O text */}
        <text x="44" y="24" fontFamily="system-ui, -apple-system, Arial, sans-serif" fontWeight="800" fontSize="18" fill={textColor} letterSpacing="-0.5">
          H2O
        </text>
        {/* TAKTVÄTT text */}
        <text x="44" y="42" fontFamily="system-ui, -apple-system, Arial, sans-serif" fontWeight="700" fontSize="13" fill={textColor} letterSpacing="1.5">
          TAKTVÄTT
        </text>
      </svg>
    </div>
  );
};

export default Logo;
