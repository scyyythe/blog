import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(searchParams.get("mode") === "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if already logged in
    const user = localStorage.getItem("thread_user");
    if (user) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Simple login simulation
      const users = JSON.parse(localStorage.getItem("thread_users") || "[]");
      const user = users.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        localStorage.setItem("thread_user", JSON.stringify({ email: user.email, name: user.name }));
        toast({ title: "Welcome back!" });
        navigate("/home");
      } else {
        toast({ title: "Invalid credentials", variant: "destructive" });
      }
    } else {
      // Simple signup simulation
      if (!name || !email || !password) {
        toast({ title: "Please fill all fields", variant: "destructive" });
        return;
      }
      
      const users = JSON.parse(localStorage.getItem("thread_users") || "[]");
      
      if (users.find((u: any) => u.email === email)) {
        toast({ title: "Email already exists", variant: "destructive" });
        return;
      }
      
      users.push({ email, password, name });
      localStorage.setItem("thread_users", JSON.stringify(users));
      localStorage.setItem("thread_user", JSON.stringify({ email, name }));
      
      toast({ title: "Account created successfully!" });
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <MessageCircle className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">
            {isLogin ? "Welcome back" : "Join Thread"}
          </h1>
          <p className="text-muted-foreground">
            {isLogin ? "Sign in to continue" : "Create your account"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 border border-border rounded-lg p-6">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
        </form>

        <p className="text-center mt-6 text-muted-foreground">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-foreground underline hover:no-underline"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
