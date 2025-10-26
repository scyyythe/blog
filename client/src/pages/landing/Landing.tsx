import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Users, Shield, Zap } from "lucide-react";
import { Header } from "@/components/nav/Header";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { Features } from "./Features";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Features */}
      <Features />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
