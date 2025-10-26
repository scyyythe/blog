import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("thread_user");
    if (!user) {
      navigate("/auth?mode=login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-20 md:ml-64 max-w-2xl">
        <Feed />
      </div>
    </div>
  );
};

export default Home;
