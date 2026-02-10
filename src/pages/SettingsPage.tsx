import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Upload, X, Eye, Palette, Type, Image as ImageIcon, Check, RotateCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface WhiteLabelConfig {
  companyName: string;
  logoUrl: string | null;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  customDomain: string;
  showPoweredBy: boolean;
  reportHeaderText: string;
  reportFooterText: string;
}

const defaultConfig: WhiteLabelConfig = {
  companyName: "Agency Byrå AB",
  logoUrl: null,
  primaryColor: "#2563EB",
  secondaryColor: "#10B981",
  accentColor: "#F59E0B",
  backgroundColor: "#FFFFFF",
  textColor: "#1F2937",
  fontFamily: "Inter",
  customDomain: "",
  showPoweredBy: false,
  reportHeaderText: "Månadsrapport",
  reportFooterText: "Konfidentiellt – Genererad av {company}",
};

const fontOptions = [
  "Inter", "Roboto", "Open Sans", "Lato", "Montserrat", "Poppins", "Raleway", "Nunito",
];

const presetThemes = [
  { name: "Standard Blå", primary: "#2563EB", secondary: "#10B981", accent: "#F59E0B", bg: "#FFFFFF", text: "#1F2937" },
  { name: "Mörk Elegans", primary: "#8B5CF6", secondary: "#06B6D4", accent: "#F97316", bg: "#111827", text: "#F9FAFB" },
  { name: "Grön Natur", primary: "#059669", secondary: "#0284C7", accent: "#D97706", bg: "#FFFFFF", text: "#1F2937" },
  { name: "Röd Energi", primary: "#DC2626", secondary: "#7C3AED", accent: "#FBBF24", bg: "#FFFFFF", text: "#1F2937" },
  { name: "Minimalist", primary: "#18181B", secondary: "#71717A", accent: "#A1A1AA", bg: "#FAFAFA", text: "#09090B" },
];

const SettingsPage = () => {
  const [config, setConfig] = useState<WhiteLabelConfig>(defaultConfig);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [notifications, setNotifications] = useState([
    { label: "E-postnotifieringar för nya rapporter", enabled: true },
    { label: "Varningar vid integrationsfel", enabled: true },
    { label: "Veckosammanfattning", enabled: false },
  ]);

  const [account, setAccount] = useState({
    firstName: "Anna",
    lastName: "Andersson",
    email: "anna@agencybyra.se",
  });

  const updateConfig = useCallback((updates: Partial<WhiteLabelConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
    setHasChanges(true);
  }, []);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast({ title: "Filen är för stor", description: "Max 2MB tillåtet.", variant: "destructive" });
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      updateConfig({ logoUrl: ev.target?.result as string });
      toast({ title: "Logotyp uppladdad", description: file.name });
    };
    reader.readAsDataURL(file);
  };

  const applyTheme = (theme: typeof presetThemes[0]) => {
    updateConfig({
      primaryColor: theme.primary,
      secondaryColor: theme.secondary,
      accentColor: theme.accent,
      backgroundColor: theme.bg,
      textColor: theme.text,
    });
    toast({ title: "Tema applicerat", description: theme.name });
  };

  const handleSave = () => {
    setHasChanges(false);
    toast({ title: "Inställningar sparade", description: "Alla ändringar har sparats." });
  };

  const handleReset = () => {
    setConfig(defaultConfig);
    setHasChanges(true);
    toast({ title: "Återställt", description: "Alla inställningar har återställts till standard." });
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
          <h1 className="text-2xl font-bold text-foreground">Inställningar</h1>
          <p className="text-muted-foreground mt-1">Hantera ditt konto och white-label-anpassningar</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setPreviewOpen(!previewOpen)} className="gap-2">
            <Eye className="w-4 h-4" /> {previewOpen ? "Dölj" : "Förhandsgranska"}
          </Button>
          <Button variant="outline" size="sm" onClick={handleReset} className="gap-2">
            <RotateCcw className="w-4 h-4" /> Återställ
          </Button>
          <Button size="sm" onClick={handleSave} disabled={!hasChanges} className="gap-2">
            <Check className="w-4 h-4" /> Spara ändringar
          </Button>
        </div>
      </div>

      <div className={`grid gap-6 ${previewOpen ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1 max-w-2xl"}`}>
        {/* Left: Settings */}
        <div className="space-y-6">
          <Tabs defaultValue="branding" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="branding" className="gap-2 text-xs"><Palette className="w-3.5 h-3.5" /> Varumärke</TabsTrigger>
              <TabsTrigger value="report" className="gap-2 text-xs"><Type className="w-3.5 h-3.5" /> Rapport</TabsTrigger>
              <TabsTrigger value="account" className="gap-2 text-xs"><ImageIcon className="w-3.5 h-3.5" /> Konto</TabsTrigger>
            </TabsList>

            {/* Branding Tab */}
            <TabsContent value="branding" className="space-y-5 mt-4">
              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-5">
                <h2 className="text-lg font-semibold text-card-foreground">Logotyp & Namn</h2>

                <div className="space-y-2">
                  <Label>Företagsnamn</Label>
                  <Input
                    value={config.companyName}
                    onChange={(e) => updateConfig({ companyName: e.target.value })}
                    className="h-10"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Logotyp</Label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/svg+xml,image/jpeg"
                    className="hidden"
                    onChange={handleLogoUpload}
                  />
                  {config.logoUrl ? (
                    <div className="relative inline-block border border-border rounded-lg p-4 bg-secondary/30">
                      <img src={config.logoUrl} alt="Logo" className="max-h-16 max-w-[200px] object-contain" />
                      <button
                        onClick={() => updateConfig({ logoUrl: null })}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:opacity-80"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <div
                      className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Dra och släpp din logotyp här, eller klicka för att välja</p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, SVG eller JPG (max 2MB)</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Typsnitt</Label>
                  <Select value={config.fontFamily} onValueChange={(v) => updateConfig({ fontFamily: v })}>
                    <SelectTrigger className="h-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {fontOptions.map((f) => (
                        <SelectItem key={f} value={f} style={{ fontFamily: f }}>{f}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Colors */}
              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-5">
                <h2 className="text-lg font-semibold text-card-foreground">Färger</h2>

                {/* Preset themes */}
                <div className="space-y-2">
                  <Label>Färgteman</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {presetThemes.map((theme) => (
                      <button
                        key={theme.name}
                        onClick={() => applyTheme(theme)}
                        className="flex items-center gap-2 p-2.5 rounded-lg border border-border hover:border-primary/50 transition-colors text-left"
                      >
                        <div className="flex gap-0.5">
                          {[theme.primary, theme.secondary, theme.accent].map((c, i) => (
                            <div key={i} className="w-4 h-4 rounded-full border border-border" style={{ backgroundColor: c }} />
                          ))}
                        </div>
                        <span className="text-xs text-card-foreground font-medium">{theme.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Individual colors */}
                {([
                  { key: "primaryColor" as const, label: "Primärfärg" },
                  { key: "secondaryColor" as const, label: "Sekundärfärg" },
                  { key: "accentColor" as const, label: "Accentfärg" },
                  { key: "backgroundColor" as const, label: "Bakgrundsfärg" },
                  { key: "textColor" as const, label: "Textfärg" },
                ]).map(({ key, label }) => (
                  <div key={key} className="space-y-2">
                    <Label>{label}</Label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={config[key]}
                        onChange={(e) => updateConfig({ [key]: e.target.value })}
                        className="w-10 h-10 rounded-lg border border-border cursor-pointer bg-transparent p-0.5"
                      />
                      <Input
                        value={config[key]}
                        onChange={(e) => updateConfig({ [key]: e.target.value })}
                        className="h-10 w-32 font-mono text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Domain */}
              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                <h2 className="text-lg font-semibold text-card-foreground">Egen domän</h2>
                <div className="space-y-2">
                  <Label>Domän</Label>
                  <Input
                    placeholder="reports.dindomän.se"
                    value={config.customDomain}
                    onChange={(e) => updateConfig({ customDomain: e.target.value })}
                    className="h-10"
                  />
                  <p className="text-xs text-muted-foreground">Kräver DNS CNAME-inställning</p>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <span className="text-sm text-card-foreground">Visa "Powered by"</span>
                    <p className="text-xs text-muted-foreground">Visa eller dölj "Powered by"-text i rapporter</p>
                  </div>
                  <Switch
                    checked={config.showPoweredBy}
                    onCheckedChange={(v) => updateConfig({ showPoweredBy: v })}
                  />
                </div>
              </div>
            </TabsContent>

            {/* Report Tab */}
            <TabsContent value="report" className="space-y-5 mt-4">
              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-5">
                <h2 className="text-lg font-semibold text-card-foreground">Rapportinställningar</h2>
                <div className="space-y-2">
                  <Label>Rubrik i rapporter</Label>
                  <Input
                    value={config.reportHeaderText}
                    onChange={(e) => updateConfig({ reportHeaderText: e.target.value })}
                    className="h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Fotnot i rapporter</Label>
                  <Input
                    value={config.reportFooterText}
                    onChange={(e) => updateConfig({ reportFooterText: e.target.value })}
                    className="h-10"
                    placeholder="Använd {company} för företagsnamn"
                  />
                  <p className="text-xs text-muted-foreground">Använd {"{company}"} som platshållare för företagsnamnet</p>
                </div>
              </div>
            </TabsContent>

            {/* Account Tab */}
            <TabsContent value="account" className="space-y-5 mt-4">
              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-5">
                <h2 className="text-lg font-semibold text-card-foreground">Konto</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Förnamn</Label>
                    <Input value={account.firstName} onChange={(e) => setAccount((p) => ({ ...p, firstName: e.target.value }))} className="h-10" />
                  </div>
                  <div className="space-y-2">
                    <Label>Efternamn</Label>
                    <Input value={account.lastName} onChange={(e) => setAccount((p) => ({ ...p, lastName: e.target.value }))} className="h-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>E-postadress</Label>
                  <Input value={account.email} onChange={(e) => setAccount((p) => ({ ...p, email: e.target.value }))} className="h-10" />
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                <h2 className="text-lg font-semibold text-card-foreground">Notifieringar</h2>
                {notifications.map((item, idx) => (
                  <div key={item.label} className="flex items-center justify-between py-2">
                    <span className="text-sm text-card-foreground">{item.label}</span>
                    <Switch
                      checked={item.enabled}
                      onCheckedChange={(v) => setNotifications((prev) => prev.map((n, i) => i === idx ? { ...n, enabled: v } : n))}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right: Live Preview */}
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-6"
          >
            <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
              <div className="bg-secondary/50 px-4 py-2 border-b border-border">
                <p className="text-xs font-medium text-muted-foreground">Förhandsgranskning av rapport</p>
              </div>

              {/* Simulated report */}
              <div
                className="p-6 min-h-[500px]"
                style={{
                  backgroundColor: config.backgroundColor,
                  color: config.textColor,
                  fontFamily: config.fontFamily,
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: `2px solid ${config.primaryColor}` }}>
                  <div className="flex items-center gap-3">
                    {config.logoUrl ? (
                      <img src={config.logoUrl} alt="Logo" className="h-8 object-contain" />
                    ) : (
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: config.primaryColor }}
                      >
                        {config.companyName.charAt(0)}
                      </div>
                    )}
                    <span className="font-semibold text-sm">{config.companyName}</span>
                  </div>
                  <span className="text-xs opacity-60">Feb 2026</span>
                </div>

                <h2 className="text-lg font-bold mb-4">{config.reportHeaderText}</h2>
                <p className="text-xs opacity-60 mb-6">Nordic Digital AB</p>

                {/* Mock KPIs */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Sessioner", value: "12,450", delta: "+14%" },
                    { label: "Konverteringar", value: "342", delta: "+8%" },
                    { label: "Kostnad", value: "28,500 kr", delta: "-3%" },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${config.primaryColor}10`, border: `1px solid ${config.primaryColor}20` }}
                    >
                      <p className="text-[10px] opacity-60">{kpi.label}</p>
                      <p className="text-sm font-bold">{kpi.value}</p>
                      <p className="text-[10px]" style={{ color: config.secondaryColor }}>{kpi.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Mock chart */}
                <div className="mb-6 p-4 rounded-lg" style={{ border: `1px solid ${config.primaryColor}20` }}>
                  <p className="text-xs font-semibold mb-3">Trafik över tid</p>
                  <div className="flex items-end gap-1 h-20">
                    {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 88, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm transition-all"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i >= 10 ? config.accentColor : config.primaryColor,
                          opacity: 0.7 + (i / 40),
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[8px] opacity-40">Jan</span>
                    <span className="text-[8px] opacity-40">Dec</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 mt-6" style={{ borderTop: `1px solid ${config.primaryColor}20` }}>
                  <p className="text-[10px] opacity-40">
                    {config.reportFooterText.replace("{company}", config.companyName)}
                  </p>
                  {config.showPoweredBy && (
                    <p className="text-[9px] opacity-30 mt-1">Powered by ReportPlatform</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SettingsPage;
