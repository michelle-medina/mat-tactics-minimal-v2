import { Card } from "@/components/ui/card";

interface StatItemProps {
  value: number;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => (
  <Card className="flex-1 p-4 text-center border border-border bg-card hover:bg-accent transition-colors rounded-lg">
    <div className="text-xl font-medium text-foreground mb-1">
      {value}
    </div>
    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
      {label}
    </div>
  </Card>
);

export const StatsSection = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">
          This Week
        </h2>
        <span className="text-xs text-muted-foreground">
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
