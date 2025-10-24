import { Card } from "@/components/ui/card";

interface StatItemProps {
  value: number;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => (
  <Card className="flex-1 p-4 text-center border-0 bg-card hover:bg-foreground hover:text-background transition-all duration-300 shadow-[0_2px_8px_-2px_hsl(0_0%_0%_/_0.08)] hover:shadow-[0_10px_30px_-5px_hsl(0_0%_0%_/_0.1),_0_0_0_2px_hsl(var(--accent-yellow))] group cursor-pointer">
    <div className="text-2xl font-bold text-foreground group-hover:text-[hsl(var(--accent-yellow))] mb-1 tracking-tighter transition-colors">
      {value}
    </div>
    <div className="text-[9px] text-muted-foreground group-hover:text-background/80 uppercase tracking-[0.1em] font-bold transition-colors">
      {label}
    </div>
  </Card>
);

export const StatsSection = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-foreground uppercase tracking-tighter">
          This Week
        </h2>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
          Oct 14-20
        </span>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <StatItem value={5} label="Sessions" />
        <StatItem value={8} label="Techniques" />
        <StatItem value={47} label="Total" />
      </div>
    </div>
  );
};
