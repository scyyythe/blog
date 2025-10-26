import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostCardProps {
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  reposts: number;
}

const PostCard = ({ author, content, timestamp, likes, comments, reposts }: PostCardProps) => {
  return (
    <article className="border-b border-border p-4 hover:bg-accent/50 transition-colors cursor-pointer">
      <div className="flex gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-foreground">{author.name}</span>
            <span className="text-muted-foreground text-sm">@{author.username}</span>
            <span className="text-muted-foreground text-sm">· {timestamp}</span>
          </div>
          
          <p className="text-foreground mb-3 whitespace-pre-wrap">{content}</p>
          
          <div className="flex items-center justify-between max-w-md">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground hover:bg-transparent">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{comments}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground hover:bg-transparent">
              <Repeat2 className="h-4 w-4" />
              <span className="text-sm">{reposts}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground hover:bg-transparent">
              <Heart className="h-4 w-4" />
              <span className="text-sm">{likes}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-transparent">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
