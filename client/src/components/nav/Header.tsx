import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Header=()=>{
    const navigate=useNavigate();

    return(
   <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-8 h-8" />
            <span className="text-xl font-bold">Thread</span>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => navigate("/auth?mode=login")}>
              Log in
            </Button>
            <Button onClick={() => navigate("/auth?mode=signup")}>
              Sign up
            </Button>
          </div>
        </div>
      </header>
    );
}