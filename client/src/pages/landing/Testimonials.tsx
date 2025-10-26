import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const Testimonial = ({
  content,
  author,
  role,
  avatar,
  rating,
}: TestimonialProps) => (
  <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-transform duration-300">
    <div className="flex items-center gap-4 mb-4">
      <Avatar>
        <AvatarImage src={avatar} alt={author} />
        <AvatarFallback>{author[0]}</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: rating }).map((_, i) => (
        <StarIcon key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground">{content}</p>
  </Card>
);

export const Testimonials = () => {
  const testimonials = [
    {
      content:
        "This platform completely transformed how I share my thoughts online. The community is incredibly supportive and engaging!",
      author: "Sarah Chen",
      role: "Content Creator",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      rating: 5,
    },
    {
      content:
        "The real-time features are amazing. I can instantly connect with my audience and get meaningful feedback.",
      author: "Marcus Johnson",
      role: "Tech Blogger",
      avatar: "https://i.pravatar.cc/150?u=marcus",
      rating: 5,
    },
    {
      content:
        "Clean interface, powerful features, and great community. Everything a modern blogger needs!",
      author: "Emma Rodriguez",
      role: "Digital Marketer",
      avatar: "https://i.pravatar.cc/150?u=emma",
      rating: 4,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Others Say About Us</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join thousands of satisfied users who have transformed their online
          presence with our platform.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};
