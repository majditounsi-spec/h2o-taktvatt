import { motion } from "framer-motion";
import { Plus, MoreHorizontal, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const clients = [
  {
    name: "Nordic Digital AB",
    contact: "anna@nordicdigital.se",
    channels: ["Google Ads", "Facebook Ads", "GA4", "LinkedIn"],
    spend: "45,200 kr",
    status: "Aktiv",
  },
  {
    name: "Stockholm Media Group",
    contact: "erik@stockholmmedia.se",
    channels: ["Google Ads", "Facebook Ads", "GA4"],
    spend: "32,100 kr",
    status: "Aktiv",
  },
  {
    name: "E-handel Sverige AB",
    contact: "lisa@ehandel.se",
    channels: ["Google Ads", "Facebook Ads", "Shopify", "GA4", "TikTok"],
    spend: "78,400 kr",
    status: "Aktiv",
  },
  {
    name: "Konsult Gruppen",
    contact: "karl@konsultgruppen.se",
    channels: ["Google Ads", "LinkedIn"],
    spend: "12,800 kr",
    status: "Pausad",
  },
  {
    name: "TechStart Nordic",
    contact: "sara@techstart.se",
    channels: ["Google Ads", "Facebook Ads", "GA4"],
    spend: "28,900 kr",
    status: "Aktiv",
  },
  {
    name: "Fastighets Byrån Online",
    contact: "johan@fbo.se",
    channels: ["Google Ads", "Facebook Ads"],
    spend: "19,600 kr",
    status: "Aktiv",
  },
  {
    name: "Restaurang Kedjan AB",
    contact: "maria@rk.se",
    channels: ["Facebook Ads", "Instagram"],
    spend: "8,300 kr",
    status: "Inaktiv",
  },
];

const Clients = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Kunder</h1>
          <p className="text-muted-foreground mt-1">{clients.length} kunder totalt</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Lägg till kund
        </Button>
      </div>

      {/* Search and filter */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Sök kunder..." className="pl-10 h-9 bg-card border-border" />
        </div>
        <Button variant="outline" size="sm" className="gap-2 h-9">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>

      {/* Client cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {clients.map((client) => (
          <div
            key={client.name}
            className="bg-card rounded-xl p-5 shadow-card border border-border hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {client.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground text-sm">{client.name}</h3>
                  <p className="text-xs text-muted-foreground">{client.contact}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {client.channels.map((ch) => (
                <span
                  key={ch}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md"
                >
                  {ch}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground">Månads-spend</p>
                <p className="text-sm font-semibold text-card-foreground">{client.spend}</p>
              </div>
              <span
                className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  client.status === "Aktiv"
                    ? "bg-success/10 text-success"
                    : client.status === "Pausad"
                    ? "bg-warning/10 text-warning"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {client.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Clients;
