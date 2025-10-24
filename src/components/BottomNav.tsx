import { Home, BookOpen, Target, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active = false }: NavItemProps) => (
  <button
    className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${
      active
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`}
    aria-label={label}
  >
    {icon}
    <span className="text-[10px] uppercase tracking-wider">{label}</span>
  </button>
);

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-2xl mx-auto flex items-center justify-around relative h-16">
        <NavItem
          icon={<Home className="h-5 w-5" strokeWidth={1.5} />}
          label="Home"
          active
        />
        <NavItem
          icon={<BookOpen className="h-5 w-5" strokeWidth={1.5} />}
          label="Journal"
        />
        
        {/* Floating Add Button */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <Button
            size="lg"
            className="h-14 w-14 rounded-full bg-foreground text-background hover:bg-foreground/90 border border-border shadow-lg"
            aria-label="Add new capture"
          >
            <Plus className="h-6 w-6" strokeWidth={1.5} />
          </Button>
        </div>

        <NavItem
          icon={<Target className="h-5 w-5" strokeWidth={1.5} />}
          label="GamePlan"
        />
        <NavItem
          icon={<User className="h-5 w-5" strokeWidth={1.5} />}
          label="Profile"
        />
      </div>
    </nav>
  );
};
