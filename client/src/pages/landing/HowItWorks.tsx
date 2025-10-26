import { Card } from "@/components/ui/card";
import { PenLine, Send, Heart, Users } from "lucide-react";

const steps = [
  {
    icon: <PenLine className="w-5 h-5 text-primary" />,
    title: "Create Your Space",
    description:
      "Sign up and customize your personal blogging space in minutes.",
  },
  {
    icon: <Send className="w-5 h-5 text-primary" />,
    title: "Share Your Story",
    description: "Write and publish your thoughts, ideas, and experiences.",
  },
  {
    icon: <Heart className="w-5 h-5 text-primary" />,
    title: "Engage & Grow",
    description: "Connect with readers, get feedback, and build your audience.",
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "Join Communities",
    description: "Find like-minded writers and readers in your niche.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground text-md max-w-2xl mx-auto">
          Get started with your blogging journey in four simple steps
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="p-6 text-center relative group hover:shadow-lg transition-shadow"
          >
            {/* Step number bubble */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              {index + 1}
            </div>
            {/* Content */}
            <div className="mb-4 transform transition-transform group-hover:scale-110">
              {step.icon}
            </div>
            <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
            <p className="text-sm text-muted-foreground">{step.description}</p>
            {/* Connector line for all except last */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
