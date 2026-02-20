import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, TrendingUp, Globe, AlertTriangle, Plus, Trash2, ExternalLink, ArrowUp, ArrowDown, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

type TrackedKeyword = {
  id: string;
  keyword: string;
  position: number | null;
  previousPosition: number | null;
  volume: number;
  url: string;
  lastChecked: string;
};

type Domain = {
  id: string;
  domain: string;
  addedAt: string;
  keywords: TrackedKeyword[];
};

// Simulated ranking data generator
const generateMockRanking = (): { position: number; url: string } => {
  const pos = Math.random() > 0.15 ? Math.floor(Math.random() * 50) + 1 : Math.floor(Math.random() * 50) + 50;
  return { position: pos, url: `https://example.com/page-${Math.floor(Math.random() * 20)}` };
};

const generateMockVolume = (): number => {
  const ranges = [10, 20, 50, 90, 140, 210, 320, 480, 720, 1000, 1600, 2400, 3600, 5400, 8100, 12000];
  return ranges[Math.floor(Math.random() * ranges.length)];
};

const INITIAL_DOMAINS: Domain[] = [
  {
    id: "1",
    domain: "minwebbyrå.se",
    addedAt: "2025-01-15",
    keywords: [
      { id: "k1", keyword: "digital marknadsföring stockholm", position: 3, previousPosition: 5, volume: 1200, url: "/tjanster/digital-marknadsforing", lastChecked: "2026-02-20" },
      { id: "k2", keyword: "seo byrå", position: 7, previousPosition: 6, volume: 880, url: "/seo", lastChecked: "2026-02-20" },
      { id: "k3", keyword: "google ads konsult", position: 2, previousPosition: 7, volume: 720, url: "/google-ads", lastChecked: "2026-02-20" },
      { id: "k4", keyword: "content marketing byrå", position: 5, previousPosition: 5, volume: 540, url: "/content", lastChecked: "2026-02-20" },
      { id: "k5", keyword: "webanalys tjänster", position: 8, previousPosition: 12, volume: 320, url: "/analys", lastChecked: "2026-02-20" },
    ],
  },
];

const SeoTools = () => {
  const [domains, setDomains] = useState<Domain[]>(INITIAL_DOMAINS);
  const [selectedDomainId, setSelectedDomainId] = useState<string>(INITIAL_DOMAINS[0]?.id || "");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddDomain, setShowAddDomain] = useState(false);
  const [showAddKeyword, setShowAddKeyword] = useState(false);
  const [newDomain, setNewDomain] = useState("");
  const [newKeyword, setNewKeyword] = useState("");

  const selectedDomain = domains.find((d) => d.id === selectedDomainId);

  const filteredKeywords = useMemo(() => {
    if (!selectedDomain) return [];
    return selectedDomain.keywords.filter((kw) =>
      kw.keyword.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedDomain, searchQuery]);

  const stats = useMemo(() => {
    if (!selectedDomain) return { total: 0, avgPos: 0, top10: 0, improved: 0 };
    const kws = selectedDomain.keywords;
    const withPosition = kws.filter((k) => k.position !== null);
    const avgPos = withPosition.length > 0
      ? (withPosition.reduce((s, k) => s + (k.position || 0), 0) / withPosition.length).toFixed(1)
      : "—";
    const top10 = withPosition.filter((k) => (k.position || 999) <= 10).length;
    const improved = kws.filter((k) => k.previousPosition !== null && k.position !== null && k.position < k.previousPosition).length;
    return { total: kws.length, avgPos, top10, improved };
  }, [selectedDomain]);

  const handleAddDomain = () => {
    if (!newDomain.trim()) return;
    let cleaned = newDomain.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/+$/, "");
    if (domains.some((d) => d.domain === cleaned)) {
      toast({ title: "Domänen finns redan", variant: "destructive" });
      return;
    }
    const domain: Domain = {
      id: crypto.randomUUID(),
      domain: cleaned,
      addedAt: new Date().toISOString().slice(0, 10),
      keywords: [],
    };
    setDomains((prev) => [...prev, domain]);
    setSelectedDomainId(domain.id);
    setNewDomain("");
    setShowAddDomain(false);
    toast({ title: "Domän tillagd", description: cleaned });
  };

  const handleRemoveDomain = (id: string) => {
    setDomains((prev) => prev.filter((d) => d.id !== id));
    if (selectedDomainId === id) {
      setSelectedDomainId(domains.find((d) => d.id !== id)?.id || "");
    }
    toast({ title: "Domän borttagen" });
  };

  const handleAddKeyword = () => {
    if (!newKeyword.trim() || !selectedDomain) return;
    if (selectedDomain.keywords.some((k) => k.keyword.toLowerCase() === newKeyword.trim().toLowerCase())) {
      toast({ title: "Sökordet finns redan", variant: "destructive" });
      return;
    }
    const mock = generateMockRanking();
    const kw: TrackedKeyword = {
      id: crypto.randomUUID(),
      keyword: newKeyword.trim().toLowerCase(),
      position: mock.position,
      previousPosition: null,
      volume: generateMockVolume(),
      url: mock.url,
      lastChecked: new Date().toISOString().slice(0, 10),
    };
    setDomains((prev) =>
      prev.map((d) => (d.id === selectedDomainId ? { ...d, keywords: [...d.keywords, kw] } : d))
    );
    setNewKeyword("");
    setShowAddKeyword(false);
    toast({ title: "Sökord tillagt", description: `"${kw.keyword}" – Position ${kw.position}` });
  };

  const handleRemoveKeyword = (kwId: string) => {
    setDomains((prev) =>
      prev.map((d) =>
        d.id === selectedDomainId
          ? { ...d, keywords: d.keywords.filter((k) => k.id !== kwId) }
          : d
      )
    );
  };

  const handleRefreshRankings = () => {
    setDomains((prev) =>
      prev.map((d) =>
        d.id === selectedDomainId
          ? {
              ...d,
              keywords: d.keywords.map((k) => {
                const mock = generateMockRanking();
                return {
                  ...k,
                  previousPosition: k.position,
                  position: mock.position,
                  url: mock.url,
                  lastChecked: new Date().toISOString().slice(0, 10),
                };
              }),
            }
          : d
      )
    );
    toast({ title: "Rankningar uppdaterade", description: "Simulerad data har uppdaterats" });
  };

  const getChange = (kw: TrackedKeyword) => {
    if (kw.previousPosition === null || kw.position === null) return null;
    return kw.previousPosition - kw.position; // positive = improved
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">SEO Verktyg</h1>
          <p className="text-muted-foreground mt-1">Rank tracking och sökordsanalys</p>
        </div>
        <Button onClick={() => setShowAddDomain(true)} className="gap-2">
          <Plus className="w-4 h-4" /> Lägg till domän
        </Button>
      </div>

      {/* Domain selector */}
      {domains.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {domains.map((d) => (
            <div key={d.id} className="flex items-center gap-1">
              <button
                onClick={() => setSelectedDomainId(d.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedDomainId === d.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-card-foreground hover:bg-secondary"
                }`}
              >
                <Globe className="w-3.5 h-3.5 inline mr-1.5" />
                {d.domain}
              </button>
              <button
                onClick={() => handleRemoveDomain(d.id)}
                className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedDomain && (
        <>
          {/* KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { label: "Spårade sökord", value: stats.total, icon: Search, color: "bg-accent text-accent-foreground" },
              { label: "Snittposition", value: stats.avgPos, icon: TrendingUp, color: "bg-success/10 text-success" },
              { label: "Topp 10", value: stats.top10, icon: Globe, color: "bg-info/10 text-info" },
              { label: "Förbättrade", value: stats.improved, icon: ArrowUp, color: "bg-warning/10 text-warning" },
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

          {/* Actions bar */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Sök bland sökord..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-9 bg-card border-border"
              />
            </div>
            <Button onClick={() => setShowAddKeyword(true)} className="h-9 gap-1.5">
              <Plus className="w-4 h-4" /> Lägg till sökord
            </Button>
            <Button variant="outline" onClick={handleRefreshRankings} className="h-9 gap-1.5">
              <TrendingUp className="w-4 h-4" /> Uppdatera rankningar
            </Button>
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
                    <th className="px-5 py-3 font-medium">URL</th>
                    <th className="px-5 py-3 font-medium">Senast kontrollerad</th>
                    <th className="px-5 py-3 font-medium w-10"></th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {filteredKeywords.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-5 py-12 text-center text-muted-foreground">
                          {selectedDomain.keywords.length === 0
                            ? "Inga sökord tillagda. Klicka \"Lägg till sökord\" för att börja."
                            : "Inga sökord matchar din sökning."}
                        </td>
                      </tr>
                    ) : (
                      filteredKeywords.map((kw) => {
                        const change = getChange(kw);
                        return (
                          <motion.tr
                            key={kw.id}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="border-b border-border last:border-0 hover:bg-secondary/30"
                          >
                            <td className="px-5 py-4 font-medium text-card-foreground">{kw.keyword}</td>
                            <td className="px-5 py-4">
                              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm ${
                                (kw.position || 999) <= 3
                                  ? "bg-success/15 text-success"
                                  : (kw.position || 999) <= 10
                                  ? "bg-primary/10 text-primary"
                                  : (kw.position || 999) <= 30
                                  ? "bg-warning/10 text-warning"
                                  : "bg-destructive/10 text-destructive"
                              }`}>
                                {kw.position ?? "—"}
                              </span>
                            </td>
                            <td className="px-5 py-4">
                              {change !== null ? (
                                <span className={`inline-flex items-center gap-1 text-sm font-medium ${
                                  change > 0 ? "text-success" : change < 0 ? "text-destructive" : "text-muted-foreground"
                                }`}>
                                  {change > 0 ? <ArrowUp className="w-3.5 h-3.5" /> : change < 0 ? <ArrowDown className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                                  {change !== 0 ? Math.abs(change) : "0"}
                                </span>
                              ) : (
                                <span className="text-muted-foreground text-sm">—</span>
                              )}
                            </td>
                            <td className="px-5 py-4 text-muted-foreground">{kw.volume.toLocaleString("sv-SE")}</td>
                            <td className="px-5 py-4">
                              <span className="text-xs text-muted-foreground font-mono truncate max-w-[200px] block">{kw.url}</span>
                            </td>
                            <td className="px-5 py-4 text-muted-foreground text-xs">{kw.lastChecked}</td>
                            <td className="px-5 py-4">
                              <button
                                onClick={() => handleRemoveKeyword(kw.id)}
                                className="p-1 rounded text-muted-foreground hover:text-destructive transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </motion.tr>
                        );
                      })
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {domains.length === 0 && (
        <div className="bg-card rounded-xl shadow-card border border-border p-12 text-center">
          <Globe className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-card-foreground mb-2">Ingen domän tillagd</h3>
          <p className="text-muted-foreground mb-4">Lägg till din första domän för att börja spåra sökord</p>
          <Button onClick={() => setShowAddDomain(true)} className="gap-2">
            <Plus className="w-4 h-4" /> Lägg till domän
          </Button>
        </div>
      )}

      {/* Add Domain Dialog */}
      <Dialog open={showAddDomain} onOpenChange={setShowAddDomain}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Lägg till domän</DialogTitle>
            <DialogDescription>Ange domännamnet du vill spåra rankningar för.</DialogDescription>
          </DialogHeader>
          <Input
            placeholder="exempel.se"
            value={newDomain}
            onChange={(e) => setNewDomain(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddDomain()}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDomain(false)}>Avbryt</Button>
            <Button onClick={handleAddDomain}>Lägg till</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Keyword Dialog */}
      <Dialog open={showAddKeyword} onOpenChange={setShowAddKeyword}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Lägg till sökord</DialogTitle>
            <DialogDescription>Ange ett sökord att spåra för {selectedDomain?.domain}.</DialogDescription>
          </DialogHeader>
          <Input
            placeholder="t.ex. seo byrå stockholm"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddKeyword()}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddKeyword(false)}>Avbryt</Button>
            <Button onClick={handleAddKeyword}>Lägg till</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default SeoTools;
