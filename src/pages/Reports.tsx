import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, FileText, Calendar, Download, Send, MoreHorizontal, Search, Filter, Trash2, Edit, Eye, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface Report {
  id: string;
  name: string;
  client: string;
  lastSent: string;
  schedule: string;
  status: "Skickad" | "Utkast" | "Schemalagd";
}

const initialReports: Report[] = [
  { id: "1", name: "Månadsrapport - Nordic Digital", client: "Nordic Digital AB", lastSent: "2025-01-15", schedule: "Månatlig", status: "Skickad" },
  { id: "2", name: "Veckorapport - Stockholm Media", client: "Stockholm Media Group", lastSent: "2025-02-03", schedule: "Veckovis", status: "Skickad" },
  { id: "3", name: "Kampanjrapport Q4", client: "E-handel Sverige AB", lastSent: "2025-01-02", schedule: "Kvartalsvis", status: "Utkast" },
  { id: "4", name: "Månadsrapport - TechStart", client: "TechStart Nordic", lastSent: "2025-01-31", schedule: "Månatlig", status: "Schemalagd" },
  { id: "5", name: "SEO Rapport Januari", client: "Fastighets Byrån Online", lastSent: "2025-01-20", schedule: "Månatlig", status: "Skickad" },
];

const clients = [
  "Nordic Digital AB",
  "Stockholm Media Group",
  "E-handel Sverige AB",
  "TechStart Nordic",
  "Fastighets Byrån Online",
  "Konsult Gruppen",
  "Restaurang Kedjan AB",
];

const Reports = () => {
  const [reports, setReports] = useState<Report[]>(initialReports);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  // Form state
  const [formName, setFormName] = useState("");
  const [formClient, setFormClient] = useState("");
  const [formSchedule, setFormSchedule] = useState("");
  const [formStatus, setFormStatus] = useState<Report["status"]>("Utkast");

  const filteredReports = useMemo(() => {
    return reports.filter((r) => {
      const matchesSearch =
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.client.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || r.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [reports, searchQuery, statusFilter]);

  const stats = useMemo(() => ({
    total: reports.length,
    sent: reports.filter((r) => r.status === "Skickad").length,
    scheduled: reports.filter((r) => r.status === "Schemalagd").length,
  }), [reports]);

  const resetForm = () => {
    setFormName("");
    setFormClient("");
    setFormSchedule("");
    setFormStatus("Utkast");
  };

  const handleCreate = () => {
    if (!formName || !formClient || !formSchedule) {
      toast.error("Fyll i alla fält");
      return;
    }
    const newReport: Report = {
      id: Date.now().toString(),
      name: formName,
      client: formClient,
      lastSent: "-",
      schedule: formSchedule,
      status: formStatus,
    };
    setReports((prev) => [newReport, ...prev]);
    setIsCreateOpen(false);
    resetForm();
    toast.success("Rapport skapad!");
  };

  const handleEdit = () => {
    if (!selectedReport || !formName || !formClient || !formSchedule) {
      toast.error("Fyll i alla fält");
      return;
    }
    setReports((prev) =>
      prev.map((r) =>
        r.id === selectedReport.id
          ? { ...r, name: formName, client: formClient, schedule: formSchedule, status: formStatus }
          : r
      )
    );
    setIsEditOpen(false);
    setSelectedReport(null);
    resetForm();
    toast.success("Rapport uppdaterad!");
  };

  const handleDelete = () => {
    if (!selectedReport) return;
    setReports((prev) => prev.filter((r) => r.id !== selectedReport.id));
    setIsDeleteOpen(false);
    setSelectedReport(null);
    toast.success("Rapport borttagen!");
  };

  const handleSend = (report: Report) => {
    setReports((prev) =>
      prev.map((r) =>
        r.id === report.id
          ? { ...r, status: "Skickad", lastSent: new Date().toISOString().split("T")[0] }
          : r
      )
    );
    toast.success(`"${report.name}" skickad!`);
  };

  const handleDownload = (report: Report) => {
    toast.success(`Laddar ner "${report.name}"...`);
  };

  const openEdit = (report: Report) => {
    setSelectedReport(report);
    setFormName(report.name);
    setFormClient(report.client);
    setFormSchedule(report.schedule);
    setFormStatus(report.status);
    setIsEditOpen(true);
  };

  const openDelete = (report: Report) => {
    setSelectedReport(report);
    setIsDeleteOpen(true);
  };

  const openPreview = (report: Report) => {
    setSelectedReport(report);
    setIsPreviewOpen(true);
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
          <h1 className="text-2xl font-bold text-foreground">Rapporter</h1>
          <p className="text-muted-foreground mt-1">Skapa och automatisera kundrapporter</p>
        </div>
        <Button className="gap-2" onClick={() => { resetForm(); setIsCreateOpen(true); }}>
          <Plus className="w-4 h-4" />
          Ny rapport
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Totalt rapporter", value: stats.total, icon: FileText },
          { label: "Skickade", value: stats.sent, icon: Send },
          { label: "Schemalagda", value: stats.scheduled, icon: Calendar },
        ].map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl p-4 shadow-card border border-border flex items-center gap-4">
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

      {/* Search & Filter */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Sök rapporter..."
            className="pl-10 h-9 bg-card border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[160px] h-9">
            <Filter className="w-4 h-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alla statusar</SelectItem>
            <SelectItem value="Skickad">Skickad</SelectItem>
            <SelectItem value="Utkast">Utkast</SelectItem>
            <SelectItem value="Schemalagd">Schemalagd</SelectItem>
          </SelectContent>
        </Select>
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
              <AnimatePresence>
                {filteredReports.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-5 py-12 text-center text-muted-foreground">
                      Inga rapporter hittades.
                    </td>
                  </tr>
                ) : (
                  filteredReports.map((report) => (
                    <motion.tr
                      key={report.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
                    >
                      <td className="px-5 py-4">
                        <button onClick={() => openPreview(report)} className="flex items-center gap-3 hover:underline text-left">
                          <FileText className="w-4 h-4 text-primary shrink-0" />
                          <span className="font-medium text-card-foreground">{report.name}</span>
                        </button>
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
                          <Button variant="ghost" size="icon" className="w-8 h-8" onClick={() => handleDownload(report)}>
                            <Download className="w-4 h-4 text-muted-foreground" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="w-8 h-8">
                                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => openPreview(report)}>
                                <Eye className="w-4 h-4 mr-2" /> Förhandsgranska
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => openEdit(report)}>
                                <Edit className="w-4 h-4 mr-2" /> Redigera
                              </DropdownMenuItem>
                              {report.status !== "Skickad" && (
                                <DropdownMenuItem onClick={() => handleSend(report)}>
                                  <Send className="w-4 h-4 mr-2" /> Skicka nu
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => openDelete(report)} className="text-destructive focus:text-destructive">
                                <Trash2 className="w-4 h-4 mr-2" /> Ta bort
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Dialog */}
      <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Skapa ny rapport</DialogTitle>
            <DialogDescription>Fyll i uppgifter för den nya rapporten.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Rapportnamn</Label>
              <Input placeholder="t.ex. Månadsrapport - Kund" value={formName} onChange={(e) => setFormName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Kund</Label>
              <Select value={formClient} onValueChange={setFormClient}>
                <SelectTrigger><SelectValue placeholder="Välj kund" /></SelectTrigger>
                <SelectContent>
                  {clients.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Schema</Label>
              <Select value={formSchedule} onValueChange={setFormSchedule}>
                <SelectTrigger><SelectValue placeholder="Välj schema" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Veckovis">Veckovis</SelectItem>
                  <SelectItem value="Månatlig">Månatlig</SelectItem>
                  <SelectItem value="Kvartalsvis">Kvartalsvis</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={formStatus} onValueChange={(v) => setFormStatus(v as Report["status"])}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Utkast">Utkast</SelectItem>
                  <SelectItem value="Schemalagd">Schemalagd</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateOpen(false)}>Avbryt</Button>
            <Button onClick={handleCreate}>Skapa rapport</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Redigera rapport</DialogTitle>
            <DialogDescription>Uppdatera rapportens uppgifter.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Rapportnamn</Label>
              <Input value={formName} onChange={(e) => setFormName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Kund</Label>
              <Select value={formClient} onValueChange={setFormClient}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {clients.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Schema</Label>
              <Select value={formSchedule} onValueChange={setFormSchedule}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Veckovis">Veckovis</SelectItem>
                  <SelectItem value="Månatlig">Månatlig</SelectItem>
                  <SelectItem value="Kvartalsvis">Kvartalsvis</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={formStatus} onValueChange={(v) => setFormStatus(v as Report["status"])}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Utkast">Utkast</SelectItem>
                  <SelectItem value="Schemalagd">Schemalagd</SelectItem>
                  <SelectItem value="Skickad">Skickad</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditOpen(false)}>Avbryt</Button>
            <Button onClick={handleEdit}>Spara ändringar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ta bort rapport</DialogTitle>
            <DialogDescription>
              Är du säker på att du vill ta bort "{selectedReport?.name}"? Detta kan inte ångras.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>Avbryt</Button>
            <Button variant="destructive" onClick={handleDelete}>Ta bort</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedReport?.name}</DialogTitle>
            <DialogDescription>Förhandsvisning av rapport</DialogDescription>
          </DialogHeader>
          {selectedReport && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Kund</p>
                  <p className="font-medium text-card-foreground">{selectedReport.client}</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Schema</p>
                  <p className="font-medium text-card-foreground">{selectedReport.schedule}</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Senast skickad</p>
                  <p className="font-medium text-card-foreground">{selectedReport.lastSent}</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Status</p>
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    selectedReport.status === "Skickad" ? "bg-success/10 text-success"
                    : selectedReport.status === "Schemalagd" ? "bg-info/10 text-info"
                    : "bg-muted text-muted-foreground"
                  }`}>
                    {selectedReport.status}
                  </span>
                </div>
              </div>
              {/* Mock report content */}
              <div className="border border-border rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-card-foreground">Sammanfattning</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Visningar", value: "24,532" },
                    { label: "Klick", value: "1,847" },
                    { label: "Konverteringar", value: "156" },
                  ].map((m) => (
                    <div key={m.label} className="text-center p-3 bg-accent/50 rounded-lg">
                      <p className="text-lg font-bold text-card-foreground">{m.value}</p>
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="h-32 bg-secondary/30 rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                  📊 Diagram visas här
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsPreviewOpen(false)}>Stäng</Button>
            <Button onClick={() => { handleDownload(selectedReport!); setIsPreviewOpen(false); }}>
              <Download className="w-4 h-4 mr-2" /> Ladda ner
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default Reports;
