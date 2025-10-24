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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Video className="h-5 w-5 text-foreground" strokeWidth={2} />
          <h2 className="text-xl font-bold text-foreground uppercase tracking-tighter">
            Recent Captures
          </h2>
        </div>
        <Button variant="ghost" size="sm" className="text-xs font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors h-9 px-4">
          View All
          <ChevronRight className="h-4 w-4 ml-1" strokeWidth={2} />
        </Button>
      </div>

      <div className="space-y-4">
        {recentCaptures.slice(0, 2).map((capture) => (
          <Card
            key={capture.id}
            className="p-5 border-0 bg-card hover:shadow-[0_10px_30px_-5px_hsl(0_0%_0%_/_0.1)] transition-all duration-300 cursor-pointer shadow-[0_2px_8px_-2px_hsl(0_0%_0%_/_0.08)] group"
          >
            <div className="flex items-center gap-5">
              {/* Video Thumbnail */}
              <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-muted via-muted to-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Video className="h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground truncate mb-2 text-base uppercase tracking-tight">
                  {capture.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  <span>{capture.position}</span>
                  <span>•</span>
                  <span>{capture.category}</span>
                </div>
              </div>

              {/* Timestamp */}
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
                {capture.timestamp}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
