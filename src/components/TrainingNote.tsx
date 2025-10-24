import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const TrainingNote = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground uppercase tracking-tighter">
          Training Note
        </h2>
        <Button variant="ghost" size="sm" className="text-xs font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors h-9 px-4">
          Edit
        </Button>
      </div>

      <Card className="p-8 border-l-4 border-l-foreground bg-card border-0 shadow-[0_2px_8px_-2px_hsl(0_0%_0%_/_0.08)]">
        <p className="text-foreground text-base leading-relaxed font-medium">
          "Keep your frames strong, watch for underhooks, more energy between scrambles"
        </p>
      </Card>
    </div>
  );
};
