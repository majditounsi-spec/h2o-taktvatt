import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { BarChart3, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-sidebar items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sidebar via-sidebar to-sidebar-accent opacity-90" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-12 max-w-lg"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-sidebar-primary flex items-center justify-center">
              <BarChart3 className="w-7 h-7 text-sidebar-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-sidebar-accent-foreground tracking-tight">
              ReportHub
            </span>
          </div>
          <h1 className="text-3xl font-bold text-sidebar-accent-foreground mb-4">
            White-Label Reporting Platform
          </h1>
          <p className="text-sidebar-foreground text-lg leading-relaxed">
            Automatisera dina kundrapporter. Alla marknadsföringskanaler på ett ställe.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {["Google Ads", "Facebook", "Analytics"].map((label) => (
              <div
                key={label}
                className="bg-sidebar-accent rounded-lg py-3 px-4 text-sm text-sidebar-accent-foreground font-medium"
              >
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right side - login form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-background">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-sm"
        >
          <div className="lg:hidden flex items-center gap-3 mb-8 justify-center">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ReportHub</span>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-1">Logga in</h2>
          <p className="text-muted-foreground mb-8">
            Ange dina uppgifter för att komma åt din dashboard
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">E-postadress</Label>
              <Input
                id="email"
                type="email"
                placeholder="namn@foretag.se"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Lösenord</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(c) => setRememberMe(c === true)}
                />
                <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                  Kom ihåg mig
                </Label>
              </div>
              <button type="button" className="text-sm text-primary hover:underline font-medium">
                Glömt lösenord?
              </button>
            </div>

            <Button type="submit" className="w-full h-11 font-semibold">
              Logga in
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Har du inget konto?{" "}
            <button className="text-primary hover:underline font-medium">
              Starta gratis trial
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
