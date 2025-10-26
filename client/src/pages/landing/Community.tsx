import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Sarah Johnson",
    handle: "@sarahwrites",
    avatar: "/avatars/sarah.jpg",
    role: "Tech Writer",
    testimonial:
      "Thread has transformed how I connect with my readers. The engagement features are incredible!",
    followers: "15K",
    posts: "230",
  },
  {
    name: "Michael Chen",
    handle: "@miketech",
    avatar: "/avatars/michael.jpg",
    role: "Developer",
    testimonial:
      "The best platform for technical writing. Clean, fast, and incredibly developer-friendly.",
    followers: "22K",
    posts: "186",
  },
  {
    name: "Emma Davis",
    handle: "@emmacreates",
    avatar: "/avatars/emma.jpg",
    role: "Content Creator",
    testimonial:
      "Finally found a blogging platform that understands modern content creators. Love the analytics!",
    followers: "45K",
    posts: "412",
  },
];

export const Community = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-slate-50/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Join Our Thriving Community</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Connect with amazing writers and creators who call Thread their home
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.handle}
                  </p>
                  <Badge variant="secondary" className="mt-1">
                    {testimonial.role}
                  </Badge>
                </div>
              </div>

              <blockquote className="mt-4 text-muted-foreground">
                "{testimonial.testimonial}"
              </blockquote>

              <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
                <div>
                  <p className="text-sm font-medium">{testimonial.followers}</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.posts}</p>
                  <p className="text-xs text-muted-foreground">Posts</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-6">
          Join thousands of writers who trust Thread
        </p>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-full font-medium">
          Start Writing Today
        </button>
      </div>
    </section>
  );
};
