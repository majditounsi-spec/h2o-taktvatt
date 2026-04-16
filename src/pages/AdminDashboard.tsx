import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Logo from "@/components/roof/Logo";
import {
  LogOut, Phone, Mail, MapPin, Clock, MessageSquare,
  CheckCircle, Send, X, FileText, ChevronDown, Search
} from "lucide-react";

type Inquiry = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  address: string | null;
  service: string | null;
  message: string | null;
  status: string;
  notes: string | null;
};

const statusLabels: Record<string, { label: string; color: string }> = {
  ny: { label: "Ny", color: "bg-blue-100 text-blue-700" },
  kontaktad: { label: "Kontaktad", color: "bg-yellow-100 text-yellow-700" },
  offert_skickad: { label: "Offert skickad", color: "bg-purple-100 text-purple-700" },
  klar: { label: "Klar", color: "bg-green-100 text-green-700" },
  avböjd: { label: "Avböjd", color: "bg-gray-100 text-gray-500" },
};

const demoInquiries: Inquiry[] = [
  {
    id: "1", created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    name: "Lars Nilsson", phone: "070-234 56 78", email: "lars.n@gmail.com",
    address: "Storgatan 12, Kalmar", service: "Taktvätt",
    message: "Hej! Vi har en hel del mossa på taket och undrar vad det skulle kosta att tvätta. Huset är en 1,5-plans villa med ca 140 kvm takyta. Betongpannor från -95.",
    status: "ny", notes: null,
  },
  {
    id: "2", created_at: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    name: "Karin Svensson", phone: "073-456 78 90", email: "karin.svensson@outlook.com",
    address: "Björkvägen 8, Nybro", service: "Taktvätt & Takmålning",
    message: "Vi funderar på att både tvätta och måla om taket. Pannorna börjar se slitna ut och det samlas sand i hängrännan. Kan ni komma och titta?",
    status: "kontaktad", notes: "Ringde 3/4 – bokade besiktning tisdag 8/4 kl 10.",
  },
  {
    id: "3", created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    name: "Per Johansson", phone: "076-789 01 23", email: null,
    address: "Sjövägen 3, Oskarshamn", service: "Fasadtvätt",
    message: "Fasaden på norrssidan har blivit grön av alger. Putsfasad. Vill ha offert.",
    status: "offert_skickad", notes: "Offert skickad 2/4: 14 500 kr ink moms. Fasadtvätt + algbehandling.",
  },
  {
    id: "4", created_at: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    name: "Anna Bergström", phone: "070-111 22 33", email: "anna.b@icloud.com",
    address: "Ekgatan 5, Västervik", service: "Takmålning",
    message: "Vill måla om taket i svart. Har redan tvättat det själv. Hur lång tid tar det?",
    status: "klar", notes: "Klart 28/3. Kund nöjd. 2 lager svart NCS 9000-N. Faktura betald.",
  },
  {
    id: "5", created_at: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    name: "Maria Ek", phone: "072-333 44 55", email: "maria.ek@gmail.com",
    address: "Parkvägen 22, Emmaboda", service: "Takbehandling & Impregnering",
    message: "Hej, vi tvättade taket förra året och vill nu impregnera det. Går det att göra nu på våren?",
    status: "ny", notes: null,
  },
];

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [notes, setNotes] = useState("");
  const [filter, setFilter] = useState("alla");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const demo = localStorage.getItem("h2o_demo_auth") === "true";

    if (demo) {
      setIsDemo(true);
      setInquiries(demoInquiries);
      setLoading(false);
      return;
    }

    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      navigate("/admin/login");
      return;
    }

    const { data: rows, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && rows) setInquiries(rows as Inquiry[]);
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    if (!isDemo) {
      await supabase.from("inquiries").update({ status }).eq("id", id);
    }
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
    if (selected?.id === id) setSelected({ ...selected, status });
  };

  const saveNotes = async () => {
    if (!selected) return;
    if (!isDemo) {
      await supabase.from("inquiries").update({ notes }).eq("id", selected.id);
    }
    setInquiries((prev) => prev.map((i) => (i.id === selected.id ? { ...i, notes } : i)));
    setSelected({ ...selected, notes });
  };

  const handleLogout = async () => {
    localStorage.removeItem("h2o_demo_auth");
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const filtered = inquiries.filter((i) => {
    const matchesFilter = filter === "alla" || i.status === filter;
    const matchesSearch = !search ||
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.phone.includes(search) ||
      i.address?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const counts = {
    alla: inquiries.length,
    ny: inquiries.filter((i) => i.status === "ny").length,
    kontaktad: inquiries.filter((i) => i.status === "kontaktad").length,
    offert_skickad: inquiries.filter((i) => i.status === "offert_skickad").length,
    klar: inquiries.filter((i) => i.status === "klar").length,
  };

  const formatDate = (d: string) => {
    const date = new Date(d);
    return date.toLocaleDateString("sv-SE", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Logo variant="dark" />
          <div className="flex items-center gap-3">
            {isDemo && (
              <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-2.5 py-1 rounded-lg">DEMO</span>
            )}
            <Button variant="outline" size="sm" onClick={handleLogout} className="rounded-lg text-gray-500 h-9">
              <LogOut className="w-4 h-4 mr-1" /> Logga ut
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {[
            { key: "alla", label: "Alla", icon: FileText },
            { key: "ny", label: "Nya", icon: MessageSquare },
            { key: "kontaktad", label: "Kontaktade", icon: Phone },
            { key: "offert_skickad", label: "Offert", icon: Send },
            { key: "klar", label: "Klara", icon: CheckCircle },
          ].map((s) => (
            <button
              key={s.key}
              onClick={() => setFilter(s.key)}
              className={`p-4 rounded-xl border text-left transition-all ${
                filter === s.key ? "bg-blue-50 border-blue-200" : "bg-white border-gray-100 hover:border-gray-200"
              }`}
            >
              <s.icon className={`w-5 h-5 mb-2 ${filter === s.key ? "text-blue-600" : "text-gray-300"}`} />
              <p className="text-2xl font-bold text-gray-900">{counts[s.key as keyof typeof counts] ?? 0}</p>
              <p className="text-xs text-gray-400">{s.label}</p>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Sök på namn, telefon eller adress..."
            className="w-full bg-white border border-gray-100 rounded-xl pl-10 pr-4 h-11 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* List */}
          <div className="lg:col-span-2 space-y-3">
            {loading ? (
              <div className="text-center py-12 text-gray-400">Laddar...</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <MessageSquare className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                <p className="text-gray-400">Inga förfrågningar</p>
              </div>
            ) : (
              filtered.map((inq) => (
                <button
                  key={inq.id}
                  onClick={() => { setSelected(inq); setNotes(inq.notes || ""); }}
                  className={`w-full text-left bg-white rounded-xl p-4 border transition-all hover:shadow-sm ${
                    selected?.id === inq.id ? "border-blue-300 shadow-sm" : "border-gray-100"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">{inq.name}</p>
                      <p className="text-xs text-gray-400">{formatDate(inq.created_at)}</p>
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md ${statusLabels[inq.status]?.color}`}>
                      {statusLabels[inq.status]?.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{inq.phone}</span>
                    {inq.service && <span className="flex items-center gap-1"><FileText className="w-3 h-3" />{inq.service}</span>}
                    {inq.address && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{inq.address}</span>}
                  </div>
                  {inq.message && (
                    <p className="text-xs text-gray-300 mt-2 line-clamp-1">{inq.message}</p>
                  )}
                </button>
              ))
            )}
          </div>

          {/* Detail */}
          <div className="lg:col-span-1">
            {selected ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-900">{selected.name}</h2>
                  <button onClick={() => setSelected(null)} className="text-gray-300 hover:text-gray-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <a href={`tel:${selected.phone}`} className="text-gray-700 hover:text-blue-600">{selected.phone}</a>
                  </div>
                  {selected.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <a href={`mailto:${selected.email}`} className="text-gray-700 hover:text-blue-600">{selected.email}</a>
                    </div>
                  )}
                  {selected.address && (
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{selected.address}</span>
                    </div>
                  )}
                  {selected.service && (
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{selected.service}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{formatDate(selected.created_at)}</span>
                  </div>
                </div>

                {selected.message && (
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Meddelande</p>
                    <p className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3 leading-relaxed">{selected.message}</p>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Status</p>
                  <div className="relative">
                    <select
                      value={selected.status}
                      onChange={(e) => updateStatus(selected.id, e.target.value)}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 h-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    >
                      {Object.entries(statusLabels).map(([key, val]) => (
                        <option key={key} value={key}>{val.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Anteckningar</p>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Skriv anteckningar..."
                    rows={3}
                    className="rounded-xl border-gray-200 resize-none text-sm mb-2"
                  />
                  <Button onClick={saveNotes} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs h-8">
                    Spara
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
                <MessageSquare className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                <p className="text-sm text-gray-400">Klicka på en förfrågan för att se detaljer</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
