import BlogCard from "./BlogCard";

const posts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.",
    category: "Technology",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
  },
  {
    title: "Design Systems That Scale",
    excerpt: "Learn how to build and maintain design systems that grow with your product and team, ensuring consistency across platforms.",
    category: "Design",
    date: "Mar 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  },
  {
    title: "Writing That Resonates",
    excerpt: "Discover the art of crafting compelling content that connects with your audience and drives meaningful engagement.",
    category: "Writing",
    date: "Mar 10, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
  },
  {
    title: "The Power of Minimalism",
    excerpt: "How embracing simplicity in design and life can lead to better focus, clarity, and overall well-being.",
    category: "Lifestyle",
    date: "Mar 8, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
  },
  {
    title: "Building Better Teams",
    excerpt: "Practical strategies for fostering collaboration, communication, and creativity in remote and hybrid work environments.",
    category: "Business",
    date: "Mar 5, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  {
    title: "The Art of Storytelling",
    excerpt: "Master the timeless craft of storytelling and learn how to captivate audiences with compelling narratives.",
    category: "Writing",
    date: "Mar 3, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=800&q=80"
  }
];

const FeaturedPosts = () => {
  return (
    <section className="py-20 px-6">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated articles from our community of writers and thinkers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
