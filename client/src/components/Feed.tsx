import PostCard from "./PostCard";
import { Button } from "@/components/ui/button";

const posts = [
  {
    author: {
      name: "Sarah Chen",
      username: "sarahchen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    content: "Just finished building a new feature with React. The component architecture is so clean! 🚀",
    timestamp: "2h",
    likes: 234,
    comments: 45,
    reposts: 12
  },
  {
    author: {
      name: "Marcus Rodriguez",
      username: "mrodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    },
    content: "Minimalist design isn't about using less—it's about making every element count. Less noise, more impact.",
    timestamp: "4h",
    likes: 567,
    comments: 89,
    reposts: 34
  },
  {
    author: {
      name: "Emily Watson",
      username: "emilyw",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
    },
    content: "Hot take: The best code is code that doesn't exist. Sometimes the solution is removing complexity, not adding features.",
    timestamp: "6h",
    likes: 892,
    comments: 156,
    reposts: 67
  },
  {
    author: {
      name: "Alex Kim",
      username: "alexkim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    content: "Coffee + Clean code + Good music = Perfect morning ☕️\n\nWhat's your ideal coding setup?",
    timestamp: "8h",
    likes: 423,
    comments: 78,
    reposts: 23
  },
  {
    author: {
      name: "Jordan Lee",
      username: "jordanlee",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan"
    },
    content: "The future of web development is all about speed and simplicity. Static sites are making a comeback.",
    timestamp: "12h",
    likes: 678,
    comments: 134,
    reposts: 45
  },
  {
    author: {
      name: "Maya Patel",
      username: "mayapatel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya"
    },
    content: "Debugging is like being a detective in a crime movie where you're also the murderer. 🔍😅",
    timestamp: "15h",
    likes: 1234,
    comments: 203,
    reposts: 89
  }
];

const Feed = () => {
  return (
    <main className="min-h-screen border-x border-border">
      <header className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border p-4 z-10">
        <h2 className="text-xl font-bold">Home</h2>
      </header>
      
      <div className="border-b border-border p-4">
        <textarea 
          placeholder="What's on your mind?"
          className="w-full bg-transparent text-foreground resize-none outline-none placeholder:text-muted-foreground text-lg"
          rows={3}
        />
        <div className="flex justify-end mt-2">
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
            Post
          </Button>
        </div>
      </div>
      
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </main>
  );
};

export default Feed;
