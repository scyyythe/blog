import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Users, Shield, Zap } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Share your thoughts<br />with the world
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join the conversation. Connect with millions of people and discover what's happening now.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => navigate("/auth?mode=signup")}>
            Get Started
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate("/auth?mode=login")}>
            Sign In
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <p className="text-muted-foreground">
              Follow people and join conversations that matter to you
            </p>
          </div>
          <div className="text-center p-6">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time</h3>
            <p className="text-muted-foreground">
              Stay updated with live updates and instant notifications
            </p>
          </div>
          <div className="text-center p-6">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-muted-foreground">
              Your data is protected with industry-standard security
            </p>
          </div>
        </div>
      </section>

   

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2025 Thread. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
