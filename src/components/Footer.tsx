import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">WealthWise</h3>
            <p className="text-primary-foreground/80">
              Your trusted source for personal finance education and wealth-building strategies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#articles" className="text-primary-foreground/80 hover:text-accent transition-colors">Articles</a></li>
              <li><a href="#categories" className="text-primary-foreground/80 hover:text-accent transition-colors">Categories</a></li>
              <li><a href="#newsletter" className="text-primary-foreground/80 hover:text-accent transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} WealthWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
