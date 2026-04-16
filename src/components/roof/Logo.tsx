const Logo = ({ variant = "dark" }: { variant?: "dark" | "light"; className?: string }) => {
  return (
    <div className="flex items-center">
      <img
        src="/images/logo-h2o.png"
        alt="H2O Taktvätt"
        className={`h-12 w-auto ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
};

export default Logo;
