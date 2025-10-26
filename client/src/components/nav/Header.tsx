import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUTTON_SMALL } from "@/lib/buttonClass";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
export const Header = () => {
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();

  return (
    <header>
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <span className="text-xl font-bold">Tots</span>
        </div>
        {/* nav bar */}
        <div className="flex-1">
          <nav className="hidden md:flex items-center justify-center gap-6">
            <button
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection("features")}
            >
              Features
            </button>
            <button
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection("topics")}
            >
              Topics
            </button>
            <button
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection("community")}
            >
              Community
            </button>
            <button
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection("how-it-works")}
            >
              How it Works
            </button>
            <button
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection("faq")}
            >
              FAQ
            </button>
          </nav>
        </div>
        <div className="flex gap-3">
          <Button
            className={BUTTON_SMALL}
            variant="ghost"
            onClick={() => navigate("/auth?mode=login")}
          >
            Log in
          </Button>
          <Button
            className={BUTTON_SMALL}
            onClick={() => navigate("/auth?mode=signup")}
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};
