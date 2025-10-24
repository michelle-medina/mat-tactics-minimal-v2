import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FocusArea {
  id: string;
  title: string;
  position: string;
  category: string;
  videoPlaceholder: boolean;
}

const focusAreas: FocusArea[] = [
  {
    id: "1",
    title: "Kimura from Closed Guard",
    position: "Closed Guard",
    category: "Submission",
    videoPlaceholder: true,
  },
  {
    id: "2",
    title: "Back Take from Turtle",
    position: "Turtle",
    category: "Position",
    videoPlaceholder: true,
  },
  {
    id: "3",
    title: "Scissor Sweep Setup",
    position: "Closed Guard",
    category: "Sweep",
    videoPlaceholder: true,
  },
];

export const FocusAreaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? focusAreas.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === focusAreas.length - 1 ? 0 : prev + 1));
  };

  const currentArea = focusAreas[currentIndex];

  return (
    <div className="space-y-4">
      <Card className="relative overflow-hidden border-0 bg-card shadow-[0_2px_8px_-2px_hsl(0_0%_0%_/_0.08)]">
        {/* Video Area */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-muted via-muted to-accent flex items-center justify-center">
          
          {/* Play Button */}
          <Button
            size="lg"
            variant="ghost"
            className="relative z-10 h-20 w-20 rounded-full bg-background/90 hover:bg-background border-2 border-foreground transition-all hover:scale-105"
            aria-label="Play technique video for Kimura from Closed Guard"
          >
            <Play className="h-8 w-8 text-foreground fill-foreground" strokeWidth={0} aria-hidden="true" />
          </Button>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background hover:bg-foreground hover:text-background border border-border h-10 w-10 transition-colors"
            onClick={handlePrevious}
            aria-label="Previous technique"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background hover:bg-foreground hover:text-background border border-border h-10 w-10 transition-colors"
            onClick={handleNext}
            aria-label="Next technique"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </Button>

          {/* Counter */}
          <Badge className="absolute top-4 right-4 z-10 bg-foreground text-background border-0 text-xs px-3 py-1 font-bold tracking-wider">
            {currentIndex + 1} / {focusAreas.length}
          </Badge>
        </div>

        {/* Technique Info */}
        <div className="p-6 space-y-2 border-t border-border">
          <h3 className="text-lg font-bold text-foreground uppercase tracking-tight">
            {currentArea.title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider">
            <span className="font-medium">{currentArea.position}</span>
            <span>•</span>
            <span className="font-medium">{currentArea.category}</span>
            <Badge variant="secondary" className="ml-auto text-[10px] px-2 py-1 font-bold bg-foreground text-background">
              GI
            </Badge>
          </div>
        </div>
      </Card>

      {/* Carousel Dots */}
      <div className="flex justify-center gap-2">
        {focusAreas.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-foreground"
                : "w-2 bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Go to technique ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
