import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const TrainingNote = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">
          Training Note
        </h2>
        <Button variant="ghost" size="sm" className="text-xs h-8 px-2">
          Edit
        </Button>
      </div>

      <Card className="p-4 border-l-2 border-l-foreground bg-card border border-border rounded-lg">
        <p className="text-foreground text-sm leading-relaxed">
          "Keep your frames strong, watch for underhooks, more energy between scrambles"
        </p>
      </Card>
    </div>
  );
};
