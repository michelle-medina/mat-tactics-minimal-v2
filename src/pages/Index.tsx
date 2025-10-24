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
      <header className="px-6 py-8 border-b border-border animate-fade-in">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold text-foreground tracking-tighter mb-0.5">
              MAT TACTICS
            </h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{today}</p>
          </div>
          
          {/* Streak Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-foreground text-background">
            <Flame className="h-4 w-4" aria-hidden="true" />
            <div className="text-sm font-bold tracking-tight">5 DAYS</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 space-y-12 max-w-7xl mx-auto">
        {/* Focus Areas Section */}
        <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground uppercase tracking-tighter">
              Focus Areas
            </h2>
            <Button variant="ghost" size="sm" className="text-xs font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors">
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
