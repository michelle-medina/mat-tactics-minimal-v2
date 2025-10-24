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
    <div className="space-y-3">
      <Card className="relative overflow-hidden border border-border bg-card rounded-lg">
        {/* Video Area */}
        <div className="relative aspect-video bg-muted flex items-center justify-center">
          
          {/* Play Button */}
          <Button
            size="lg"
            variant="ghost"
            className="relative z-10 h-16 w-16 rounded-full border border-border hover:bg-accent transition-colors"
            aria-label="Play technique video for Kimura from Closed Guard"
          >
            <Play className="h-7 w-7 text-foreground" strokeWidth={1.5} aria-hidden="true" />
          </Button>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card border border-border h-8 w-8 rounded-lg"
            onClick={handlePrevious}
            aria-label="Previous technique"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card border border-border h-8 w-8 rounded-lg"
            onClick={handleNext}
            aria-label="Next technique"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </Button>

          {/* Counter */}
          <Badge className="absolute top-3 right-3 z-10 bg-secondary text-secondary-foreground border border-border text-[10px] px-2 py-0.5">
            {currentIndex + 1} / {focusAreas.length}
          </Badge>
        </div>

        {/* Technique Info */}
        <div className="p-4 space-y-1.5">
          <h3 className="text-sm font-medium text-foreground">
            {currentArea.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{currentArea.position}</span>
            <span>•</span>
            <span>{currentArea.category}</span>
            <Badge variant="secondary" className="ml-auto text-[10px] px-2 py-0">
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
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-foreground"
                : "w-1.5 bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Go to technique ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
