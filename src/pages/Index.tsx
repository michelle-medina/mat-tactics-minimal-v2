import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FocusAreaCarousel } from "@/components/FocusAreaCarousel";
import { StatsSection } from "@/components/StatsSection";
import { TrainingNote } from "@/components/TrainingNote";
import { RecentCaptures } from "@/components/RecentCaptures";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="px-4 py-6 animate-fade-in">
        <div className="flex items-start justify-between max-w-2xl mx-auto">
          <div>
            <h1 className="text-2xl font-medium text-foreground tracking-tight mb-1">
              Mat Tactics
            </h1>
            <p className="text-xs text-muted-foreground">{today}</p>
          </div>
          
          {/* Streak Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg">
            <Flame className="h-4 w-4 text-foreground" aria-hidden="true" />
            <div className="text-sm font-medium text-foreground">5 Days</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 space-y-3 max-w-2xl mx-auto">
        {/* Focus Areas Section */}
        <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">
              Focus Areas
            </h2>
            <Button variant="ghost" size="sm" className="text-xs h-8 px-2">
              View All
            </Button>
          </div>
          <FocusAreaCarousel />
        </section>

        {/* This Week Stats */}
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <StatsSection />
        </section>

        {/* Training Note */}
        <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <TrainingNote />
        </section>

        {/* Recent Captures */}
        <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <RecentCaptures />
        </section>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
