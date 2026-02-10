import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ExternalLink, Search, Filter, Link2, Unlink, Settings2, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

interface ClientAccount {
  clientId: string;
  clientName: string;
  accountId: string;
  accountName: string;
  connectedAt: string;
  status: "active" | "error" | "expired";
}

interface Integration {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  connectedAccounts: ClientAccount[];
}

const mockClients = [
  { id: "c1", name: "Nordic Digital AB" },
  { id: "c2", name: "Stockholm Media Group" },
  { id: "c3", name: "E-handel Sverige AB" },
  { id: "c4", name: "Konsult Gruppen" },
  { id: "c5", name: "TechStart Nordic" },
  { id: "c6", name: "Fastighets Byrån Online" },
  { id: "c7", name: "Restaurang Kedjan AB" },
];

const initialIntegrations: Integration[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    category: "Annonsering",
    icon: "🔵",
    description: "Importera kampanjdata, kostnader och konverteringar från Google Ads.",
    connectedAccounts: [
      { clientId: "c1", clientName: "Nordic Digital AB", accountId: "123-456-7890", accountName: "Nordic Digital - Main", connectedAt: "2024-11-15", status: "active" },
      { clientId: "c3", clientName: "E-handel Sverige AB", accountId: "234-567-8901", accountName: "E-handel - Shopping", connectedAt: "2024-10-20", status: "active" },
    ],
  },
  {
    id: "google-analytics",
    name: "Google Analytics 4",
    category: "Web Analytics",
    icon: "📊",
    description: "Hämta webbplatsstatistik, sessioner, konverteringar och användardata.",
    connectedAccounts: [
      { clientId: "c1", clientName: "Nordic Digital AB", accountId: "GA4-001", accountName: "nordicdigital.se", connectedAt: "2024-11-15", status: "active" },
      { clientId: "c2", clientName: "Stockholm Media Group", accountId: "GA4-002", accountName: "stockholmmedia.se", connectedAt: "2024-12-01", status: "active" },
    ],
  },
  {
    id: "google-search-console",
    name: "Google Search Console",
    category: "SEO",
    icon: "🔍",
    description: "Spåra sökpositioner, klick, visningar och indexeringsstatus.",
    connectedAccounts: [
      { clientId: "c1", clientName: "Nordic Digital AB", accountId: "SC-001", accountName: "nordicdigital.se", connectedAt: "2024-11-15", status: "active" },
    ],
  },
  { id: "facebook-ads", name: "Facebook Ads", category: "Annonsering", icon: "🔷", description: "Importera annonsdata från Meta Business Suite.", connectedAccounts: [
    { clientId: "c1", clientName: "Nordic Digital AB", accountId: "FB-001", accountName: "Nordic Digital Ad Account", connectedAt: "2024-11-20", status: "active" },
  ]},
  { id: "linkedin-ads", name: "LinkedIn Ads", category: "Annonsering", icon: "🟦", description: "Hämta kampanjdata från LinkedIn Campaign Manager.", connectedAccounts: [] },
  { id: "tiktok-ads", name: "TikTok Ads", category: "Annonsering", icon: "🎵", description: "Importera kampanjdata från TikTok Ads Manager.", connectedAccounts: [] },
  { id: "microsoft-ads", name: "Microsoft Ads", category: "Annonsering", icon: "🟩", description: "Hämta data från Microsoft Advertising (Bing).", connectedAccounts: [] },
  { id: "twitter-ads", name: "Twitter/X Ads", category: "Annonsering", icon: "✖️", description: "Importera annonsdata från X Ads.", connectedAccounts: [] },
  { id: "snapchat-ads", name: "Snapchat Ads", category: "Annonsering", icon: "👻", description: "Hämta kampanjdata från Snapchat Ads Manager.", connectedAccounts: [] },
  { id: "pinterest-ads", name: "Pinterest Ads", category: "Annonsering", icon: "📌", description: "Importera data från Pinterest Ads.", connectedAccounts: [] },
  { id: "amazon-ads", name: "Amazon Ads", category: "Annonsering", icon: "📦", description: "Hämta data från Amazon Advertising.", connectedAccounts: [] },
  { id: "google-my-business", name: "Google My Business", category: "Lokal SEO", icon: "📍", description: "Hämta recensioner, visningar och interaktioner.", connectedAccounts: [] },
  { id: "shopify", name: "Shopify", category: "E-handel", icon: "🛒", description: "Importera orderdata, intäkter och produktstatistik.", connectedAccounts: [] },
  { id: "woocommerce", name: "WooCommerce", category: "E-handel", icon: "🛍️", description: "Hämta orderdata och e-handelsstatistik.", connectedAccounts: [] },
  { id: "matomo", name: "Matomo", category: "Web Analytics", icon: "📈", description: "Alternativ webbanalys med full datakontroll.", connectedAccounts: [] },
  { id: "activecampaign", name: "ActiveCampaign", category: "Email", icon: "📧", description: "E-postmarknadsföring och automation.", connectedAccounts: [] },
  { id: "mailchimp", name: "Mailchimp", category: "Email", icon: "🐵", description: "Hämta kampanjdata och prenumerantstatistik.", connectedAccounts: [] },
  { id: "hubspot", name: "HubSpot", category: "CRM", icon: "🟠", description: "CRM-data, kontakter och pipeline.", connectedAccounts: [] },
  { id: "instagram", name: "Instagram", category: "Sociala Medier", icon: "📷", description: "Hämta inläggsdata, räckvidd och engagemang.", connectedAccounts: [] },
  { id: "facebook-pages", name: "Facebook Pages", category: "Sociala Medier", icon: "👍", description: "Sidstatistik, inlägg och engagemang.", connectedAccounts: [] },
  { id: "linkedin-pages", name: "LinkedIn Pages", category: "Sociala Medier", icon: "💼", description: "Företagssida-statistik och inlägg.", connectedAccounts: [] },
  { id: "youtube", name: "YouTube", category: "Sociala Medier", icon: "▶️", description: "Videostatistik, visningar och prenumeranter.", connectedAccounts: [] },
  { id: "callrail", name: "CallRail", category: "Samtalsspårning", icon: "📞", description: "Samtalsspårning och lead-data.", connectedAccounts: [] },
  { id: "semrush", name: "Semrush", category: "SEO", icon: "🏆", description: "Nyckelords-data, backlinks och konkurrentanalys.", connectedAccounts: [] },
];

const Integrations = () => {
  const [integrations, setIntegrations] = useState<Integration[]>(initialIntegrations);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Detail / manage dialog
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);

  // Connect dialog
  const [connectDialog, setConnectDialog] = useState<{ integration: Integration; step: "select-client" | "oauth" | "select-account" | "done" } | null>(null);
  const [connectClientId, setConnectClientId] = useState("");
  const [oauthLoading, setOauthLoading] = useState(false);

  // Disconnect dialog
  const [disconnectDialog, setDisconnectDialog] = useState<{ integrationId: string; account: ClientAccount } | null>(null);

  const categories = useMemo(() => [...new Set(integrations.map((i) => i.category))], [integrations]);

  const filtered = useMemo(() => {
    return integrations.filter((i) => {
      const matchSearch = i.name.toLowerCase().includes(search.toLowerCase()) || i.category.toLowerCase().includes(search.toLowerCase());
      const matchCategory = categoryFilter === "all" || i.category === categoryFilter;
      const matchStatus =
        statusFilter === "all" ||
        (statusFilter === "connected" && i.connectedAccounts.length > 0) ||
        (statusFilter === "not-connected" && i.connectedAccounts.length === 0);
      return matchSearch && matchCategory && matchStatus;
    });
  }, [integrations, search, categoryFilter, statusFilter]);

  const totalConnected = integrations.filter((i) => i.connectedAccounts.length > 0).length;
  const totalAccounts = integrations.reduce((acc, i) => acc + i.connectedAccounts.length, 0);

  const groupedFiltered = useMemo(() => {
    const groups: Record<string, Integration[]> = {};
    for (const i of filtered) {
      if (!groups[i.category]) groups[i.category] = [];
      groups[i.category].push(i);
    }
    return groups;
  }, [filtered]);

  // Simulated OAuth flow
  const startConnect = (integration: Integration) => {
    setConnectClientId("");
    setConnectDialog({ integration, step: "select-client" });
  };

  const handleOAuth = () => {
    setOauthLoading(true);
    setConnectDialog((prev) => prev ? { ...prev, step: "oauth" } : null);

    // Simulate OAuth redirect
    setTimeout(() => {
      setOauthLoading(false);
      setConnectDialog((prev) => prev ? { ...prev, step: "select-account" } : null);
    }, 2000);
  };

  const handleSelectAccount = (accountName: string) => {
    if (!connectDialog || !connectClientId) return;
    const client = mockClients.find((c) => c.id === connectClientId);
    if (!client) return;

    const newAccount: ClientAccount = {
      clientId: client.id,
      clientName: client.name,
      accountId: `ACC-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
      accountName,
      connectedAt: new Date().toISOString().split("T")[0],
      status: "active",
    };

    setIntegrations((prev) =>
      prev.map((i) =>
        i.id === connectDialog.integration.id
          ? { ...i, connectedAccounts: [...i.connectedAccounts, newAccount] }
          : i
      )
    );

    setConnectDialog((prev) => prev ? { ...prev, step: "done" } : null);

    toast({
      title: "Konto anslutet!",
      description: `${accountName} kopplat till ${client.name} via ${connectDialog.integration.name}.`,
    });
  };

  const handleDisconnect = () => {
    if (!disconnectDialog) return;
    setIntegrations((prev) =>
      prev.map((i) =>
        i.id === disconnectDialog.integrationId
          ? { ...i, connectedAccounts: i.connectedAccounts.filter((a) => a.accountId !== disconnectDialog.account.accountId) }
          : i
      )
    );
    toast({
      title: "Konto frånkopplat",
      description: `${disconnectDialog.account.accountName} har kopplats bort.`,
    });
    setDisconnectDialog(null);
    // Also update selectedIntegration if open
    setSelectedIntegration((prev) => {
      if (!prev || prev.id !== disconnectDialog.integrationId) return prev;
      return { ...prev, connectedAccounts: prev.connectedAccounts.filter((a) => a.accountId !== disconnectDialog.account.accountId) };
    });
  };

  // Mock account options for OAuth
  const mockAccountOptions = (integrationId: string): string[] => {
    const base: Record<string, string[]> = {
      "google-ads": ["Huvudkonto - Search", "Shopping-konto", "Display & Video", "Performance Max"],
      "google-analytics": ["example.se - GA4", "shop.example.se - GA4", "app.example.se - GA4"],
      "google-search-console": ["https://example.se", "https://shop.example.se", "https://blog.example.se"],
    };
    return base[integrationId] || ["Huvudkonto", "Sekundärt konto", "Testkonto"];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Integrationer</h1>
        <p className="text-muted-foreground mt-1">
          Anslut dina marknadsföringsplattformar och koppla konton till varje klient.
        </p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 shadow-card border border-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
            <Link2 className="w-6 h-6 text-success" />
          </div>
          <div>
            <p className="text-2xl font-bold text-card-foreground">{totalConnected}</p>
            <p className="text-sm text-muted-foreground">Anslutna plattformar</p>
          </div>
        </div>
        <div className="bg-card rounded-xl p-5 shadow-card border border-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Settings2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold text-card-foreground">{totalAccounts}</p>
            <p className="text-sm text-muted-foreground">Kopplade konton</p>
          </div>
        </div>
        <div className="bg-card rounded-xl p-5 shadow-card border border-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
            <Unlink className="w-6 h-6 text-warning" />
          </div>
          <div>
            <p className="text-2xl font-bold text-card-foreground">
              {integrations.reduce((acc, i) => acc + i.connectedAccounts.filter((a) => a.status !== "active").length, 0)}
            </p>
            <p className="text-sm text-muted-foreground">Kräver åtgärd</p>
          </div>
        </div>
      </div>

      {/* Search & filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Sök integrationer..."
            className="pl-10 h-9 bg-card border-border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px] h-9 bg-card border-border">
            <SelectValue placeholder="Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alla kategorier</SelectItem>
            {categories.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px] h-9 bg-card border-border">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alla</SelectItem>
            <SelectItem value="connected">Anslutna</SelectItem>
            <SelectItem value="not-connected">Ej anslutna</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Integration grid by category */}
      {Object.entries(groupedFiltered).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <AnimatePresence mode="popLayout">
              {items.map((integration) => (
                <motion.div
                  key={integration.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={cn(
                    "bg-card rounded-xl p-4 shadow-card border transition-all hover:shadow-card-hover cursor-pointer",
                    integration.connectedAccounts.length > 0 ? "border-success/30" : "border-border"
                  )}
                  onClick={() => setSelectedIntegration(integration)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{integration.icon}</span>
                    {integration.connectedAccounts.length > 0 && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
                        <Check className="w-3 h-3" /> {integration.connectedAccounts.length} konto{integration.connectedAccounts.length > 1 ? "n" : ""}
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-card-foreground text-sm">{integration.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 mb-3 line-clamp-2">{integration.description}</p>
                  <Button
                    variant={integration.connectedAccounts.length > 0 ? "outline" : "default"}
                    size="sm"
                    className="w-full text-xs h-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (integration.connectedAccounts.length > 0) {
                        setSelectedIntegration(integration);
                      } else {
                        startConnect(integration);
                      }
                    }}
                  >
                    {integration.connectedAccounts.length > 0 ? (
                      <>Hantera <ExternalLink className="w-3 h-3 ml-1" /></>
                    ) : (
                      "Anslut"
                    )}
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ))}

      {/* ---- Detail / Manage Dialog ---- */}
      <Dialog open={!!selectedIntegration} onOpenChange={(open) => !open && setSelectedIntegration(null)}>
        {selectedIntegration && (
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <span className="text-2xl">{selectedIntegration.icon}</span>
                {selectedIntegration.name}
              </DialogTitle>
              <DialogDescription>{selectedIntegration.description}</DialogDescription>
            </DialogHeader>

            <div className="space-y-3 max-h-[50vh] overflow-y-auto">
              {integrations.find((i) => i.id === selectedIntegration.id)!.connectedAccounts.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  <Unlink className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p>Inga konton anslutna ännu.</p>
                </div>
              ) : (
                integrations.find((i) => i.id === selectedIntegration.id)!.connectedAccounts.map((account) => (
                  <div
                    key={account.accountId}
                    className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border"
                  >
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{account.accountName}</p>
                      <p className="text-xs text-muted-foreground">
                        {account.clientName} · Ansluten {account.connectedAt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "w-2 h-2 rounded-full",
                        account.status === "active" ? "bg-success" : account.status === "error" ? "bg-destructive" : "bg-warning"
                      )} />
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                            <ChevronDown className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={() => setDisconnectDialog({ integrationId: selectedIntegration.id, account })}
                          >
                            <Unlink className="w-4 h-4 mr-2" /> Koppla bort
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))
              )}
            </div>

            <DialogFooter>
              <Button onClick={() => { setSelectedIntegration(null); startConnect(selectedIntegration); }} className="gap-2">
                <Plus className="w-4 h-4" /> Anslut konto
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* ---- Connect (OAuth) Dialog ---- */}
      <Dialog open={!!connectDialog} onOpenChange={(open) => !open && setConnectDialog(null)}>
        {connectDialog && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <span className="text-2xl">{connectDialog.integration.icon}</span>
                Anslut {connectDialog.integration.name}
              </DialogTitle>
              <DialogDescription>
                {connectDialog.step === "select-client" && "Välj vilken klient du vill koppla kontot till."}
                {connectDialog.step === "oauth" && "Loggar in via Google..."}
                {connectDialog.step === "select-account" && "Välj vilket konto du vill koppla."}
                {connectDialog.step === "done" && "Kontot har kopplats!"}
              </DialogDescription>
            </DialogHeader>

            {connectDialog.step === "select-client" && (
              <div className="space-y-4">
                <Select value={connectClientId} onValueChange={setConnectClientId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Välj klient..." />
                  </SelectTrigger>
                  <SelectContent>
                    {mockClients.map((c) => (
                      <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <DialogFooter>
                  <Button disabled={!connectClientId} onClick={handleOAuth} className="gap-2">
                    Fortsätt med Google <ArrowRight className="w-4 h-4" />
                  </Button>
                </DialogFooter>
              </div>
            )}

            {connectDialog.step === "oauth" && (
              <div className="flex flex-col items-center py-8 gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                <p className="text-sm text-muted-foreground">Väntar på Google-inloggning...</p>
                <p className="text-xs text-muted-foreground">Ett nytt fönster öppnas för att logga in.</p>
              </div>
            )}

            {connectDialog.step === "select-account" && (
              <div className="space-y-2">
                {mockAccountOptions(connectDialog.integration.id).map((name) => (
                  <button
                    key={name}
                    className="w-full flex items-center justify-between p-3 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/60 transition-colors text-left"
                    onClick={() => handleSelectAccount(name)}
                  >
                    <span className="text-sm font-medium text-card-foreground">{name}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
            )}

            {connectDialog.step === "done" && (
              <div className="flex flex-col items-center py-8 gap-3">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-success" />
                </div>
                <p className="text-sm font-medium text-card-foreground">Kontot har anslutits!</p>
                <Button variant="outline" onClick={() => setConnectDialog(null)}>Stäng</Button>
              </div>
            )}
          </DialogContent>
        )}
      </Dialog>

      {/* ---- Disconnect Confirmation ---- */}
      <Dialog open={!!disconnectDialog} onOpenChange={(open) => !open && setDisconnectDialog(null)}>
        {disconnectDialog && (
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Koppla bort konto?</DialogTitle>
              <DialogDescription>
                Vill du koppla bort <strong>{disconnectDialog.account.accountName}</strong> från{" "}
                <strong>{disconnectDialog.account.clientName}</strong>? All kopplad data tas bort.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => setDisconnectDialog(null)}>Avbryt</Button>
              <Button variant="destructive" onClick={handleDisconnect}>Koppla bort</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </motion.div>
  );
};

// Need Plus import
import { Plus } from "lucide-react";

export default Integrations;
