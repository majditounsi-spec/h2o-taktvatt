const Logo = ({ variant = "dark" }: { variant?: "dark" | "light"; className?: string }) => {
  return (
    <div className="flex items-center">
      <img
        src="/images/h2o-logo.png"
        alt="H2O Taktvätt"
        className="h-[150px] w-auto"
      />
    </div>
  );
};

export default Logo;
