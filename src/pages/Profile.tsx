import { ArrowLeft, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BottomNav } from "@/components/BottomNav";

export default function Profile() {
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
                Profile
              </h1>
            </div>
            <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-wider h-7 px-2">
              Edit
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Profile Photo & Basic Info */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <Avatar className="h-24 w-24 border-4 border-border">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="bg-foreground text-background text-2xl font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-foreground text-background hover:bg-foreground/90 border-2 border-background"
              aria-label="Change photo"
            >
              <Camera className="h-4 w-4" strokeWidth={2} />
            </Button>
          </div>

          <h2 className="text-xl font-bold text-foreground uppercase tracking-tighter mb-1">
            John Doe
          </h2>
          
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-foreground text-background border-l-2 border-[hsl(var(--accent-blue))] text-[10px] px-2 py-0.5 font-bold">
              Purple Belt
            </Badge>
          </div>

          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
            Gracie Barra San Francisco
          </p>
        </div>

        {/* Summary Stats */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider px-1">
            Summary
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4 border-0 bg-card shadow-[0_2px_8px_-2px_hsl(0_0%_0%_/_0.08)] hover:shadow-[0_10px_30px_-5px_hsl(0_0%_0%_/_0.1)] transition-all duration-300">
              <div className="text-2xl font-bold text-foreground mb-1 tracking-tighter">
                15
              </div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-[0.1em] font-bold">
                Techniques
              </div>
            </Card>

            <Card className="p-4 border-0 bg-card shadow-[0_2px_8px_-2px_hsl(0_0%_0%_/_0.08)] hover:shadow-[0_10px_30px_-5px_hsl(0_0%_0%_/_0.1)] transition-all duration-300">
              <div className="text-2xl font-bold text-foreground mb-1 tracking-tighter">
                3
              </div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-[0.1em] font-bold">
                Flows
              </div>
            </Card>

            <Card className="p-4 border-0 bg-card shadow-[0_2px_8px_-2px_hsl(0_0%_0%_/_0.08)] hover:shadow-[0_10px_30px_-5px_hsl(0_0%_0%_/_0.1)] transition-all duration-300">
              <div className="text-2xl font-bold text-foreground mb-1 tracking-tighter">
                42
              </div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-[0.1em] font-bold">
                Journal Entries
              </div>
            </Card>

            <Card className="p-4 border-0 bg-card shadow-[0_2px_8px_-2px_hsl(0_0%_0%_/_0.08)] hover:shadow-[0_10px_30px_-5px_hsl(0_0%_0%_/_0.1)] transition-all duration-300">
              <div className="text-2xl font-bold text-foreground mb-1 tracking-tighter">
                8
              </div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-[0.1em] font-bold">
                Month Streak
              </div>
            </Card>
          </div>
        </div>

        {/* Account Settings */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider px-1">
            Account
          </h3>

          <Card className="border-0 bg-card shadow-[0_2px_8px_-2px_hsl(0_0%_0%_/_0.08)]">
            <button className="w-full p-4 text-left hover:bg-foreground/5 transition-colors">
              <div className="text-xs font-bold text-foreground uppercase tracking-tight">
                Settings
              </div>
            </button>
            <div className="border-t border-border" />
            <button className="w-full p-4 text-left hover:bg-foreground/5 transition-colors">
              <div className="text-xs font-bold text-foreground uppercase tracking-tight">
                Privacy
              </div>
            </button>
            <div className="border-t border-border" />
            <button className="w-full p-4 text-left hover:bg-foreground/5 transition-colors">
              <div className="text-xs font-bold text-destructive uppercase tracking-tight">
                Sign Out
              </div>
            </button>
          </Card>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
