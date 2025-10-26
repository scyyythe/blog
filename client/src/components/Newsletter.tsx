import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! Check your inbox for confirmation.");
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Never miss a story
          </h2>
          <p className="text-lg text-muted-foreground">
            Subscribe to our newsletter and get the latest articles delivered straight to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto animate-fade-in">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 text-base"
          />
          <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Subscribe
          </Button>
        </form>

        <p className="text-sm text-muted-foreground text-center mt-4">
          Join 10,000+ readers. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
