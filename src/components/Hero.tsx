import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";
import { useNavigate } from "react-router-dom";
import React from "react";
import NewsletterModal from "@/components/NewsletterModal";

const Hero = () => {
  const navigate = useNavigate();
  const [showNewsletter, setShowNewsletter] = React.useState(false);

  const goToArticles = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/articles");
  };
  const goToNewsLetter = (e: React.MouseEvent) => {
      e.preventDefault();
      setShowNewsletter(true);
    };
 
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Financial planning workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            Smart Investing for <br />
            <span className="text-accent">Indian Investors</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
            Expert guidance on mutual funds, stock market, tax planning, and wealth building strategies tailored for India. 
            Join thousands of investors growing their portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-base font-medium" onClick={goToArticles}> 
              Explore Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={goToNewsLetter}  className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 text-base font-medium">
              Subscribe to Newsletter 
            </Button>
             <NewsletterModal open={showNewsletter} onClose={() => setShowNewsletter(false)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
