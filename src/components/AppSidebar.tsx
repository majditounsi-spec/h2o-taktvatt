import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  LayoutDashboard,
  FileText,
  Users,
  Plug,
  Settings,
  LogOut,
  ChevronDown,
  Globe,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/reports", icon: FileText, label: "Rapporter" },
  { to: "/clients", icon: Users, label: "Kunder" },
  { to: "/integrations", icon: Plug, label: "Integrationer" },
  { to: "/seo", icon: Search, label: "SEO Verktyg" },
  { to: "/settings", icon: Settings, label: "Inställningar" },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-sidebar min-h-screen flex flex-col border-r border-sidebar-border shrink-0">
      {/* Logo */}
      <div className="h-16 flex items-center gap-3 px-6 border-b border-sidebar-border">
        <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-sidebar-primary-foreground" />
        </div>
        <span className="text-lg font-bold text-sidebar-accent-foreground tracking-tight">
          ReportHub
        </span>
      </div>

      {/* Workspace selector */}
      <div className="px-4 py-4">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground text-sm hover:bg-sidebar-border transition-colors">
          <div className="w-7 h-7 rounded bg-sidebar-primary flex items-center justify-center text-xs font-bold text-sidebar-primary-foreground">
            AB
          </div>
          <div className="flex-1 text-left">
            <div className="font-medium text-sm">Agency Byrå AB</div>
            <div className="text-xs text-sidebar-muted">Pro Plan</div>
          </div>
          <ChevronDown className="w-4 h-4 text-sidebar-muted" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to || location.pathname.startsWith(item.to + "/");
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/50"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-sidebar-primary" : "")} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-3 pb-4 space-y-1">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground">
          <Globe className="w-5 h-5" />
          <span>White Label</span>
        </div>
        <NavLink
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logga ut
        </NavLink>
      </div>
    </aside>
  );
};

export default AppSidebar;
