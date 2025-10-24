import { useState } from "react";
import { ArrowLeft, Search, SlidersHorizontal, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BottomNav } from "@/components/BottomNav";

interface JournalEntry {
  id: string;
  date: string;
  title: string;
  videoAngles: number;
  style: "Gi" | "NoGi";
  startPosition: string;
  endPosition: string;
  submission?: string;
  transition?: string;
  isFavorite: boolean;
  notes: string;
}

const mockEntries: JournalEntry[] = [
  {
    id: "1",
    date: "2024-10-24",
    title: "Kimura from Closed Guard",
    videoAngles: 2,
    style: "Gi",
    startPosition: "Closed Guard",
    endPosition: "Submission",
    submission: "Kimura",
    isFavorite: true,
    notes: "Perfect timing on the grip break. Partner tapped quick.",
  },
  {
    id: "2",
    date: "2024-10-23",
    title: "Back Take from Turtle",
    videoAngles: 1,
    style: "NoGi",
    startPosition: "Turtle",
    endPosition: "Back Control",
    transition: "Seat Belt",
    isFavorite: false,
    notes: "Need to be faster on the seat belt grip.",
  },
  {
    id: "3",
    date: "2024-10-22",
    title: "Scissor Sweep to Mount",
    videoAngles: 3,
    style: "Gi",
    startPosition: "Closed Guard",
    endPosition: "Mount",
    transition: "Scissor Sweep",
    isFavorite: true,
    notes: "Great angle control. Remember to control the sleeve.",
  },
];

export default function Journal() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recency");
  const [filterStyle, setFilterStyle] = useState("all");

  const filteredEntries = mockEntries
    .filter((entry) => {
      const matchesSearch =
        entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.startPosition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.endPosition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.notes.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStyle =
        filterStyle === "all" || entry.style.toLowerCase() === filterStyle;

      return matchesSearch && matchesStyle;
    })
    .sort((a, b) => {
      if (sortBy === "recency") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortBy === "favorites") {
        return a.isFavorite === b.isFavorite ? 0 : a.isFavorite ? -1 : 1;
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                aria-label="Back"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              </Button>
              <h1 className="text-sm font-bold uppercase tracking-tighter">
                Journal
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Search & Filter Controls */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search entries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 text-sm"
            />
          </div>

          {/* Filters & Sort */}
          <div className="flex items-center gap-2">
            <Select value={filterStyle} onValueChange={setFilterStyle}>
              <SelectTrigger className="h-8 text-xs flex-1">
                <SlidersHorizontal className="h-3 w-3 mr-1" />
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Styles</SelectItem>
                <SelectItem value="gi">Gi</SelectItem>
                <SelectItem value="nogi">NoGi</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-8 text-xs flex-1">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recency">Recent</SelectItem>
                <SelectItem value="favorites">Favorites</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Journal Entries */}
      <main className="max-w-7xl mx-auto px-4 py-4">
        <div className="space-y-3">
          {filteredEntries.map((entry) => (
            <Card
              key={entry.id}
              className="p-4 border-0 bg-card hover:shadow-[0_10px_30px_-5px_hsl(0_0%_0%_/_0.1)] transition-all duration-300 cursor-pointer shadow-[0_2px_8px_-2px_hsl(0_0%_0%_/_0.08)]"
            >
              {/* Entry Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-sm uppercase tracking-tight mb-1">
                    {entry.title}
                  </h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                    {new Date(entry.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                {entry.isFavorite && (
                  <Badge className="bg-foreground text-background border-l-2 border-[hsl(var(--accent-pink))] text-[9px] px-1.5 py-0.5 font-bold">
                    ★
                  </Badge>
                )}
              </div>

              {/* Video Angles */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-shrink-0 w-full h-32 bg-gradient-to-br from-muted via-muted to-accent flex items-center justify-center">
                  <Video className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
              </div>
              {entry.videoAngles > 1 && (
                <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-bold mb-3">
                  {entry.videoAngles} Angles
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                <Badge className="bg-foreground text-background border-l-2 border-[hsl(var(--accent-blue))] text-[9px] px-1.5 py-0.5 font-bold">
                  {entry.style}
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-[9px] px-1.5 py-0.5 font-bold"
                >
                  {entry.startPosition}
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-[9px] px-1.5 py-0.5 font-bold"
                >
                  → {entry.endPosition}
                </Badge>
                {entry.submission && (
                  <Badge className="bg-foreground text-background border-l-2 border-[hsl(var(--accent-orange))] text-[9px] px-1.5 py-0.5 font-bold">
                    {entry.submission}
                  </Badge>
                )}
                {entry.transition && (
                  <Badge className="bg-foreground text-background border-l-2 border-[hsl(var(--accent-cyan))] text-[9px] px-1.5 py-0.5 font-bold">
                    {entry.transition}
                  </Badge>
                )}
              </div>

              {/* Notes */}
              <p className="text-xs text-foreground leading-relaxed">
                {entry.notes}
              </p>
            </Card>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
