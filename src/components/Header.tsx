import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToCategories = (e: React.MouseEvent) => {
    e.preventDefault();
    // If already on home, just scroll smoothly
    if (location.pathname === "/") {
      const el = document.getElementById("categories");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // Navigate to home with hash (browser will land at /#categories)
    navigate("/#categories");
  };
  const goToNewsletter = (e: React.MouseEvent) => {
    e.preventDefault();
    // If already on home, just scroll smoothly
    if (location.pathname === "/") {
      const el = document.getElementById("newsletter");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // Navigate to home with hash (browser will land at /#newsletter)
    navigate("/#newsletter");
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-heading font-bold text-primary">
          WealthWise
        </h1>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className="text-foreground hover:text-secondary transition-colors font-medium">
            Home
          </NavLink>
          <NavLink to="/articles" className="text-foreground hover:text-secondary transition-colors font-medium">
            Articles
          </NavLink>
           <a href="#categories" onClick={goToCategories} className="text-foreground hover:text-secondary transition-colors font-medium">
            Categories
          </a>
          <a href="#newsletter" onClick={goToNewsletter} className="text-foreground hover:text-secondary transition-colors font-medium">
            Newsletter
          </a>
          <Button variant="default" className="bg-secondary hover:bg-secondary/90">
            Subscribe
          </Button>
        </div>

        <button className="md:hidden">
          <Menu className="h-6 w-6 text-foreground" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
