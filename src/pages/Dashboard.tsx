import { motion } from "framer-motion";
import {
  MousePointerClick,
  Eye,
  DollarSign,
  Users,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import KpiCard from "@/components/KpiCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const areaData = [
  { name: "Jan", impressions: 42000, clicks: 3200, conversions: 420 },
  { name: "Feb", impressions: 48000, clicks: 3800, conversions: 510 },
  { name: "Mar", impressions: 55000, clicks: 4200, conversions: 580 },
  { name: "Apr", impressions: 51000, clicks: 3900, conversions: 540 },
  { name: "Maj", impressions: 62000, clicks: 4800, conversions: 680 },
  { name: "Jun", impressions: 71000, clicks: 5600, conversions: 790 },
  { name: "Jul", impressions: 68000, clicks: 5200, conversions: 720 },
];

const channelData = [
  { name: "Google Ads", spend: 12400 },
  { name: "Facebook", spend: 8200 },
  { name: "LinkedIn", spend: 4500 },
  { name: "TikTok", spend: 3100 },
  { name: "Microsoft", spend: 2200 },
];

const pieData = [
  { name: "Sök", value: 45 },
  { name: "Social", value: 30 },
  { name: "Display", value: 15 },
  { name: "Video", value: 10 },
];

const COLORS = [
  "hsl(217, 91%, 50%)",
  "hsl(152, 69%, 40%)",
  "hsl(38, 92%, 50%)",
  "hsl(280, 65%, 60%)",
];

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Översikt av alla kampanjer — Senaste 30 dagarna</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Impressioner"
          value="397K"
          change={12.5}
          icon={Eye}
          iconColor="bg-accent text-accent-foreground"
        />
        <KpiCard
          title="Klick"
          value="30.7K"
          change={8.2}
          icon={MousePointerClick}
          iconColor="bg-success/10 text-success"
        />
        <KpiCard
          title="Konverteringar"
          value="4,240"
          change={-2.1}
          icon={TrendingUp}
          iconColor="bg-warning/10 text-warning"
        />
        <KpiCard
          title="Total Spend"
          value="304,200 kr"
          change={5.7}
          icon={DollarSign}
          iconColor="bg-info/10 text-info"
        />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Area Chart */}
        <div className="lg:col-span-2 bg-card rounded-xl p-5 shadow-card border border-border">
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Prestanda över tid</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(217, 91%, 50%)" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="hsl(217, 91%, 50%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(152, 69%, 40%)" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="hsl(152, 69%, 40%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="name" tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 12 }} />
              <YAxis tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  background: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(220, 13%, 91%)",
                  borderRadius: 8,
                  fontSize: 13,
                }}
              />
              <Area
                type="monotone"
                dataKey="impressions"
                stroke="hsl(217, 91%, 50%)"
                fill="url(#colorImpressions)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="clicks"
                stroke="hsl(152, 69%, 40%)"
                fill="url(#colorClicks)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-card rounded-xl p-5 shadow-card border border-border">
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Trafikfördelning</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {pieData.map((item, i) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[i] }}
                  />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="font-medium text-card-foreground">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="bg-card rounded-xl p-5 shadow-card border border-border">
        <h3 className="text-sm font-semibold text-card-foreground mb-4">Spend per kanal</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={channelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
            <XAxis dataKey="name" tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 12 }} />
            <YAxis tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                background: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 13%, 91%)",
                borderRadius: 8,
                fontSize: 13,
              }}
            />
            <Bar dataKey="spend" fill="hsl(217, 91%, 50%)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent clients */}
      <div className="bg-card rounded-xl p-5 shadow-card border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-card-foreground">Senaste kunder</h3>
          <button className="text-sm text-primary hover:underline font-medium">Visa alla</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                <th className="pb-3 font-medium">Kund</th>
                <th className="pb-3 font-medium">Kanaler</th>
                <th className="pb-3 font-medium">Spend</th>
                <th className="pb-3 font-medium">Konverteringar</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Nordic Digital AB", channels: 4, spend: "45,200 kr", conv: 182, status: "Aktiv" },
                { name: "Stockholm Media", channels: 3, spend: "32,100 kr", conv: 94, status: "Aktiv" },
                { name: "E-handel Sverige", channels: 5, spend: "78,400 kr", conv: 341, status: "Aktiv" },
                { name: "Konsult Gruppen", channels: 2, spend: "12,800 kr", conv: 45, status: "Pausad" },
                { name: "TechStart Nordic", channels: 3, spend: "28,900 kr", conv: 127, status: "Aktiv" },
              ].map((client) => (
                <tr key={client.name} className="border-b border-border last:border-0">
                  <td className="py-3 font-medium text-card-foreground">{client.name}</td>
                  <td className="py-3 text-muted-foreground">{client.channels} kanaler</td>
                  <td className="py-3 text-card-foreground">{client.spend}</td>
                  <td className="py-3 text-card-foreground">{client.conv}</td>
                  <td className="py-3">
                    <span
                      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        client.status === "Aktiv"
                          ? "bg-success/10 text-success"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {client.status}
                    </span>
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

export default Dashboard;
