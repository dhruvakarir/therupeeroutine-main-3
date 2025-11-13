import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Join 50,000+ Indian Investors
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get weekly insights on mutual funds, stock market updates, tax-saving tips, and investment strategies for Indian markets. 
            Build your wealth with expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium whitespace-nowrap">
              Subscribe Free
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/70 mt-4">
            No spam. Unsubscribe anytime. Your email is safe with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
