import { Home, Search, Bell, User, MessageCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Sidebar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("thread_user");
    toast({ title: "Logged out successfully" });
    navigate("/");
  };

  const navItems = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: MessageCircle, label: "Messages" },
    { icon: User, label: "Profile" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 border-r border-border flex flex-col p-4 bg-background">
      <div className="mb-8 mt-4">
        <h1 className="text-2xl font-bold hidden md:block">Thread</h1>
        <div className="w-10 h-10 bg-foreground rounded-full md:hidden" />
      </div>
      
      <nav className="flex flex-col gap-2 w-full">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="justify-start gap-4 h-12 hover:bg-accent"
          >
            <item.icon className="h-6 w-6" />
            <span className="hidden md:block text-base">{item.label}</span>
          </Button>
        ))}
      </nav>

      <Button className="mt-8 w-full hidden md:block rounded-full h-12 bg-foreground text-background hover:bg-foreground/90">
        Post
      </Button>
      <Button size="icon" className="mt-8 md:hidden rounded-full h-12 w-12 bg-foreground text-background hover:bg-foreground/90">
        +
      </Button>

      <button
        onClick={handleLogout}
        className="flex items-center justify-center md:justify-start gap-4 p-3 rounded-lg hover:bg-accent w-full mt-auto transition-colors"
      >
        <LogOut className="w-6 h-6" />
        <span className="hidden md:inline">Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;
