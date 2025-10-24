import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Video, ChevronRight } from "lucide-react";

interface Capture {
  id: string;
  title: string;
  position: string;
  category: string;
  timestamp: string;
}

const recentCaptures: Capture[] = [
  {
    id: "1",
    title: "Kimura from Closed Guard",
    position: "Closed Guard",
    category: "Gi",
    timestamp: "2h ago",
  },
  {
    id: "2",
    title: "Back Take from Turtle",
    position: "Turtle",
    category: "NoGi",
    timestamp: "Yesterday",
  },
  {
    id: "3",
    title: "Scissor Sweep Setup",
    position: "Closed Guard",
    category: "Gi",
    timestamp: "2 days",
  },
];

export const RecentCaptures = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Video className="h-4 w-4 text-foreground" strokeWidth={1.5} />
          <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">
            Recent Captures
          </h2>
        </div>
        <Button variant="ghost" size="sm" className="text-xs h-8 px-2">
          View All
          <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
        </Button>
      </div>

      <div className="space-y-2">
        {recentCaptures.slice(0, 2).map((capture) => (
          <Card
            key={capture.id}
            className="p-3 border border-border bg-card hover:bg-accent transition-colors cursor-pointer rounded-lg"
          >
            <div className="flex items-center gap-3">
              {/* Video Thumbnail */}
              <div className="flex-shrink-0 w-14 h-14 bg-muted rounded-lg flex items-center justify-center">
                <Video className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground truncate mb-1 text-sm">
                  {capture.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span>{capture.position}</span>
                  <span>•</span>
                  <span>{capture.category}</span>
                </div>
              </div>

              {/* Timestamp */}
              <div className="text-xs text-muted-foreground">
                {capture.timestamp}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
