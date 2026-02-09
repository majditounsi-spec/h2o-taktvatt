import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Integration {
  name: string;
  category: string;
  connected: boolean;
  icon: string;
}

const integrations: Integration[] = [
  { name: "Google Ads", category: "Annonsering", connected: true, icon: "🔵" },
  { name: "Facebook Ads", category: "Annonsering", connected: true, icon: "🔷" },
  { name: "LinkedIn Ads", category: "Annonsering", connected: true, icon: "🟦" },
  { name: "TikTok Ads", category: "Annonsering", connected: false, icon: "🎵" },
  { name: "Microsoft Ads", category: "Annonsering", connected: false, icon: "🟩" },
  { name: "Twitter/X Ads", category: "Annonsering", connected: false, icon: "✖️" },
  { name: "Snapchat Ads", category: "Annonsering", connected: false, icon: "👻" },
  { name: "Pinterest Ads", category: "Annonsering", connected: false, icon: "📌" },
  { name: "Amazon Ads", category: "Annonsering", connected: false, icon: "📦" },
  { name: "Google Analytics 4", category: "Web Analytics", connected: true, icon: "📊" },
  { name: "Google Search Console", category: "SEO", connected: true, icon: "🔍" },
  { name: "Google My Business", category: "Lokal SEO", connected: false, icon: "📍" },
  { name: "Shopify", category: "E-handel", connected: false, icon: "🛒" },
  { name: "WooCommerce", category: "E-handel", connected: false, icon: "🛍️" },
  { name: "Matomo", category: "Web Analytics", connected: false, icon: "📈" },
  { name: "ActiveCampaign", category: "Email", connected: false, icon: "📧" },
  { name: "Mailchimp", category: "Email", connected: false, icon: "🐵" },
  { name: "HubSpot", category: "CRM", connected: false, icon: "🟠" },
  { name: "Instagram", category: "Sociala Medier", connected: true, icon: "📷" },
  { name: "Facebook Pages", category: "Sociala Medier", connected: true, icon: "👍" },
  { name: "LinkedIn Pages", category: "Sociala Medier", connected: false, icon: "💼" },
  { name: "YouTube", category: "Sociala Medier", connected: false, icon: "▶️" },
  { name: "CallRail", category: "Samtalsspårning", connected: false, icon: "📞" },
  { name: "Semrush", category: "SEO", connected: false, icon: "🏆" },
];

const categories = [...new Set(integrations.map((i) => i.category))];

const Integrations = () => {
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
          Anslut dina marknadsföringsplattformar för att samla all data.
        </p>
      </div>

      {/* Connected count */}
      <div className="bg-card rounded-xl p-5 shadow-card border border-border flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
          <Check className="w-6 h-6 text-success" />
        </div>
        <div>
          <p className="text-2xl font-bold text-card-foreground">
            {integrations.filter((i) => i.connected).length}
          </p>
          <p className="text-sm text-muted-foreground">Anslutna integrationer</p>
        </div>
      </div>

      {/* By category */}
      {categories.map((category) => {
        const items = integrations.filter((i) => i.category === category);
        return (
          <div key={category}>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {items.map((integration) => (
                <div
                  key={integration.name}
                  className={cn(
                    "bg-card rounded-xl p-4 shadow-card border transition-all hover:shadow-card-hover",
                    integration.connected ? "border-success/30" : "border-border"
                  )}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{integration.icon}</span>
                    {integration.connected && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
                        <Check className="w-3 h-3" /> Ansluten
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-card-foreground text-sm">{integration.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 mb-3">{integration.category}</p>
                  <Button
                    variant={integration.connected ? "outline" : "default"}
                    size="sm"
                    className="w-full text-xs h-8"
                  >
                    {integration.connected ? (
                      <>
                        Hantera <ExternalLink className="w-3 h-3 ml-1" />
                      </>
                    ) : (
                      "Anslut"
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Integrations;
