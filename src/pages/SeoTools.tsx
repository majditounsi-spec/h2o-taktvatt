import { motion } from "framer-motion";
import { Search, TrendingUp, Globe, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const keywords = [
  { keyword: "digital marknadsföring stockholm", position: 3, change: 2, volume: 1200 },
  { keyword: "seo byrå", position: 7, change: -1, volume: 880 },
  { keyword: "google ads konsult", position: 2, change: 5, volume: 720 },
  { keyword: "facebook annonsering", position: 12, change: 3, volume: 1400 },
  { keyword: "content marketing byrå", position: 5, change: 0, volume: 540 },
  { keyword: "webanalys tjänster", position: 8, change: 4, volume: 320 },
];

const SeoTools = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">SEO Verktyg</h1>
        <p className="text-muted-foreground mt-1">Rank tracking och SEO-analys</p>
      </div>

      {/* SEO KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: "Spårade sökord", value: "156", icon: Search, color: "bg-accent text-accent-foreground" },
          { label: "Snittposition", value: "8.4", icon: TrendingUp, color: "bg-success/10 text-success" },
          { label: "Domäner", value: "12", icon: Globe, color: "bg-info/10 text-info" },
          { label: "Varningar", value: "3", icon: AlertTriangle, color: "bg-warning/10 text-warning" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-card rounded-xl p-4 shadow-card border border-border">
            <div className={`w-9 h-9 rounded-lg ${kpi.color} flex items-center justify-center mb-3`}>
              <kpi.icon className="w-4 h-4" />
            </div>
            <p className="text-xs text-muted-foreground">{kpi.label}</p>
            <p className="text-xl font-bold text-card-foreground">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Keyword search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Sök sökord..." className="pl-10 h-9 bg-card border-border" />
        </div>
        <Button className="h-9">Lägg till sökord</Button>
      </div>

      {/* Keywords table */}
      <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border bg-secondary/50">
                <th className="px-5 py-3 font-medium">Sökord</th>
                <th className="px-5 py-3 font-medium">Position</th>
                <th className="px-5 py-3 font-medium">Förändring</th>
                <th className="px-5 py-3 font-medium">Sökvolym</th>
              </tr>
            </thead>
            <tbody>
              {keywords.map((kw) => (
                <tr key={kw.keyword} className="border-b border-border last:border-0 hover:bg-secondary/30">
                  <td className="px-5 py-4 font-medium text-card-foreground">{kw.keyword}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">
                      {kw.position}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`text-sm font-medium ${
                        kw.change > 0
                          ? "text-success"
                          : kw.change < 0
                          ? "text-destructive"
                          : "text-muted-foreground"
                      }`}
                    >
                      {kw.change > 0 ? `+${kw.change}` : kw.change === 0 ? "—" : kw.change}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{kw.volume.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default SeoTools;
