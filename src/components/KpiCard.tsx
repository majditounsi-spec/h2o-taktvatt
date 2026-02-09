import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  iconColor?: string;
}

const KpiCard = ({ title, value, change, icon: Icon, iconColor }: KpiCardProps) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow border border-border">
      <div className="flex items-start justify-between mb-3">
        <div
          className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center",
            iconColor || "bg-accent text-accent-foreground"
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div
          className={cn(
            "flex items-center gap-1 text-sm font-medium px-2 py-0.5 rounded-full",
            isPositive
              ? "bg-success/10 text-success"
              : "bg-destructive/10 text-destructive"
          )}
        >
          {isPositive ? (
            <TrendingUp className="w-3.5 h-3.5" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5" />
          )}
          {Math.abs(change)}%
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-1">{title}</p>
      <p className="text-2xl font-bold text-card-foreground">{value}</p>
    </div>
  );
};

export default KpiCard;
