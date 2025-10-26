import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold mb-6">
        Share your thoughts
        <br />
        with the world
      </h1>
      <p className="text-md text-muted-foreground mb-8 max-w-2xl mx-auto">
        Join the conversation. Connect with millions of people and discover
        what's happening now.
      </p>
      <div className="flex gap-4 justify-center">
        <Button size="lg" onClick={() => navigate("/auth?mode=signup")}>
          Get Started
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => navigate("/auth?mode=login")}
        >
          Sign In
        </Button>
      </div>
    </section>
  );
};
