import { Card } from "@/components/ui/card";
import { Users, Zap, Shield } from "lucide-react";
import "@/styles/animations.css";
import "@/styles/bubbles.css";

export const Features = () => {
  return (
    <section className="container mx-auto px-20 py-20 bubble-background">
      {/* Bubble elements */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      {/* Grid container */}
      <div className="grid md:grid-cols-3 gap-8 relative">
        <Card
          className="text-center p-6 shadow-lg [animation:float_3s_ease-in-out_infinite] bg-white/80 backdrop-blur-sm"
          style={{ animationDelay: "0s" }}
        >
          <Users className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Connect</h3>
          <p className="text-muted-foreground text-sm">
            Follow people and join conversations that matter to you
          </p>
        </Card>
        <Card
          className="text-center p-6 shadow-lg [animation:float_3s_ease-in-out_infinite] bg-white/80 backdrop-blur-sm"
          style={{ animationDelay: "0.5s" }}
        >
          <Zap className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Real-time</h3>
          <p className="text-muted-foreground text-sm">
            Stay updated with live updates and instant notifications
          </p>
        </Card>
        <Card
          className="text-center p-6 shadow-lg [animation:float_3s_ease-in-out_infinite] bg-white/80 backdrop-blur-sm"
          style={{ animationDelay: "1s" }}
        >
          <Shield className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure</h3>
          <p className="text-muted-foreground text-sm">
            Your data is protected with industry-standard security
          </p>
        </Card>
      </div>
    </section>
  );
};
