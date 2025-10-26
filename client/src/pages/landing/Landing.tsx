import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Users, Shield, Zap } from "lucide-react";
import { Header } from "@/components/nav/Header";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { Features } from "./Features";
import { Testimonials } from "./Testimonials";
import { DownloadApp } from "./DownloadApp";
import { FAQ } from "./FAQ";
import { PopularTopics } from "./PopularTopics";
import { Community } from "./Community";
import { HowItWorks } from "./HowItWorks";
import { Statistics } from "./Statistics";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <Testimonials />
      <section id="topics">
        <PopularTopics />
      </section>
      <section id="community">
        <Community />
      </section>
      <Statistics />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <DownloadApp />
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
