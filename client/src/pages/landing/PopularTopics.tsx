import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Hash,
  Users,
  Pencil,
  Code,
  Camera,
  Music,
  BookOpen,
  Coffee,
  Globe,
} from "lucide-react";
import PopularTopicsCSS from "@/styles/PopularTopics.css";
const topics = [
  {
    icon: <Hash className="w-4 h-4" />,
    name: "Technology",
    posts: "2.3k",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <Users className="w-4 h-4" />,
    name: "Community",
    posts: "1.8k",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <Pencil className="w-4 h-4" />,
    name: "Writing",
    posts: "1.5k",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <Code className="w-4 h-4" />,
    name: "Programming",
    posts: "3.2k",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <Camera className="w-4 h-4" />,
    name: "Photography",
    posts: "1.1k",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <Music className="w-4 h-4" />,
    name: "Music",
    posts: "980",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: <BookOpen className="w-4 h-4" />,
    name: "Books",
    posts: "850",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: <Coffee className="w-4 h-4" />,
    name: "Lifestyle",
    posts: "1.4k",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    name: "Travel",
    posts: "1.2k",
    color: "bg-teal-100 text-teal-600",
  },
];

export const PopularTopics = () => {
  return (
    <section className="container mx-auto px-4 py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Explore Popular Topics</h2>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          Discover trending conversations and join communities that match your
          interests
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-3 animate-marquee py-4">
          {[...topics, ...topics].map((topic, index) => (
            <Button
              key={index}
              variant="outline"
              className={`flex-none h-auto py-2 px-20 flex items-center gap-2 hover:scale-105 transition-transform ${topic.color}`}
            >
              {topic.icon}
              <div className="flex flex-col">
                <span className="font-medium text-xs whitespace-nowrap">
                  {topic.name}
                </span>
                <Badge variant="secondary" className="text-xs">
                  {topic.posts} posts
                </Badge>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
