import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Upload } from "lucide-react";

const SettingsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 max-w-2xl"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Inställningar</h1>
        <p className="text-muted-foreground mt-1">Hantera ditt konto och white-label</p>
      </div>

      {/* White Label */}
      <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-5">
        <h2 className="text-lg font-semibold text-card-foreground">White Label</h2>

        <div className="space-y-2">
          <Label>Företagsnamn</Label>
          <Input defaultValue="Agency Byrå AB" className="h-10" />
        </div>

        <div className="space-y-2">
          <Label>Logotyp</Label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              Dra och släpp din logotyp här, eller klicka för att välja
            </p>
            <p className="text-xs text-muted-foreground mt-1">PNG, SVG eller JPG (max 2MB)</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Primärfärg</Label>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary border border-border" />
            <Input defaultValue="#2563EB" className="h-10 w-32 font-mono text-sm" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Egen domän</Label>
          <Input placeholder="reports.dindomän.se" className="h-10" />
          <p className="text-xs text-muted-foreground">
            Kräver DNS CNAME-inställning
          </p>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
        <h2 className="text-lg font-semibold text-card-foreground">Notifieringar</h2>

        {[
          { label: "E-postnotifieringar för nya rapporter", enabled: true },
          { label: "Varningar vid integrationsfel", enabled: true },
          { label: "Veckosammanfattning", enabled: false },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between py-2">
            <span className="text-sm text-card-foreground">{item.label}</span>
            <Switch defaultChecked={item.enabled} />
          </div>
        ))}
      </div>

      {/* Account */}
      <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-5">
        <h2 className="text-lg font-semibold text-card-foreground">Konto</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Förnamn</Label>
            <Input defaultValue="Anna" className="h-10" />
          </div>
          <div className="space-y-2">
            <Label>Efternamn</Label>
            <Input defaultValue="Andersson" className="h-10" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>E-postadress</Label>
          <Input defaultValue="anna@agencybyra.se" className="h-10" />
        </div>
      </div>

      <div className="flex justify-end">
        <Button className="px-8">Spara ändringar</Button>
      </div>
    </motion.div>
  );
};

export default SettingsPage;
