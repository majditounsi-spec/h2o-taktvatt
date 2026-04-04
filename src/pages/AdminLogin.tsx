import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/roof/Logo";
import { Lock, Mail, AlertCircle } from "lucide-react";

const DEMO_EMAIL = "demo@h2otaktvatt.se";
const DEMO_PASS = "demo1234";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect if already logged in (real or demo)
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/admin");
    });
    if (localStorage.getItem("h2o_demo_auth") === "true") {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Demo login
    if (email === DEMO_EMAIL && password === DEMO_PASS) {
      localStorage.setItem("h2o_demo_auth", "true");
      navigate("/admin");
      return;
    }

    // Real Supabase login
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError("Fel e-post eller lösenord.");
    } else {
      navigate("/admin");
    }
    setLoading(false);
  };

  const handleDemoLogin = () => {
    localStorage.setItem("h2o_demo_auth", "true");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-[#0c1a2e] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Logo variant="light" />
        </div>

        <div className="bg-white rounded-2xl p-7 shadow-xl">
          <h1 className="text-xl font-bold text-gray-900 mb-1 text-center">Admin</h1>
          <p className="text-sm text-gray-400 mb-6 text-center">Logga in för att hantera förfrågningar</p>

          {error && (
            <div className="flex items-center gap-2 bg-red-50 text-red-700 text-sm p-3 rounded-xl mb-4">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          {/* Demo button */}
          <Button
            onClick={handleDemoLogin}
            className="w-full h-11 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold mb-4"
          >
            Öppna demo-panelen
          </Button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-300">eller logga in</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">E-post</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@h2otaktvatt.se"
                  required
                  className="rounded-xl border-gray-200 h-11 pl-10"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Lösenord</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="rounded-xl border-gray-200 h-11 pl-10"
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-11 font-semibold disabled:opacity-50"
            >
              {loading ? "Loggar in..." : "Logga in"}
            </Button>
          </form>
        </div>

        <p className="text-center text-blue-200/30 text-xs mt-6">
          H2O Taktvätt – Adminpanel
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
