import { motion } from "framer-motion";
import { Plus, FileText, Calendar, Download, Send, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  {
    name: "Månadsrapport - Nordic Digital",
    client: "Nordic Digital AB",
    lastSent: "2025-01-15",
    schedule: "Månatlig",
    status: "Skickad",
  },
  {
    name: "Veckorapport - Stockholm Media",
    client: "Stockholm Media Group",
    lastSent: "2025-02-03",
    schedule: "Veckovis",
    status: "Skickad",
  },
  {
    name: "Kampanjrapport Q4",
    client: "E-handel Sverige AB",
    lastSent: "2025-01-02",
    schedule: "Kvartalsvis",
    status: "Utkast",
  },
  {
    name: "Månadsrapport - TechStart",
    client: "TechStart Nordic",
    lastSent: "2025-01-31",
    schedule: "Månatlig",
    status: "Schemalagd",
  },
  {
    name: "SEO Rapport Januari",
    client: "Fastighets Byrån Online",
    lastSent: "2025-01-20",
    schedule: "Månatlig",
    status: "Skickad",
  },
];

const Reports = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Rapporter</h1>
          <p className="text-muted-foreground mt-1">
            Skapa och automatisera kundrapporter
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Ny rapport
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Totalt rapporter", value: "47", icon: FileText },
          { label: "Skickade denna månad", value: "12", icon: Send },
          { label: "Schemalagda", value: "8", icon: Calendar },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card rounded-xl p-4 shadow-card border border-border flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <stat.icon className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Reports table */}
      <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border bg-secondary/50">
                <th className="px-5 py-3 font-medium">Rapport</th>
                <th className="px-5 py-3 font-medium">Kund</th>
                <th className="px-5 py-3 font-medium">Schema</th>
                <th className="px-5 py-3 font-medium">Senast skickad</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.name}
                  className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="font-medium text-card-foreground">{report.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{report.client}</td>
                  <td className="px-5 py-4 text-muted-foreground">{report.schedule}</td>
                  <td className="px-5 py-4 text-muted-foreground">{report.lastSent}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        report.status === "Skickad"
                          ? "bg-success/10 text-success"
                          : report.status === "Schemalagd"
                          ? "bg-info/10 text-info"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <Download className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;
