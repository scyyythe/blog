import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If we're not on the landing page, navigate to it first
      navigate("/?section=" + sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (location.pathname === "/") {
      const params = new URLSearchParams(location.search);
      const section = params.get("section");
      if (section) {
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            // Clean up the URL
            navigate("/", { replace: true });
          }
        }, 100); // Small delay to ensure the page is rendered
      }
    }
  }, [location, navigate]);

  return scrollToSection;
};
