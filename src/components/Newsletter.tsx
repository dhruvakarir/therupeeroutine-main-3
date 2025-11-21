import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const spm = form.querySelector("#zc_spmSubmit");
    if (spm) spm.remove();
  };
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
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            method="POST"
            id="zcampaignOptinForm"
            action="https://zcmp.in/AWvm"
            target="_zcSignup"
            onSubmit={handleSubmit}     
            >
           <Input 
              type="name" 
              placeholder="Enter your name"
              name="FIRSTNAME"
              id="FIRSTNAME"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent"
            />
            <Input 
              type="email" 
              required
              placeholder="Enter your email"
              name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium whitespace-nowrap">
              Subscribe Free
              {/* <iframe id="iframewin" width="100%" height="100%" src="https://zgp4-zgp4.maillist-manage.in/ua/Optin?od=1a1e3dbe40e14&zx=1dfbbe958d&tD=144023acdc630e31&sD=144023acdc631005"></iframe> */}
              {/* <iframe
              id="zoho-frame"
              src="https://zgp4-zgp4.maillist-manage.in/ua/Optin?od=1a1e3dbe40e14&zx=1dfbbe958d&tD=144023acdc630e31&sD=144023acdc631005"
              ></iframe> */}
            </Button>
          </form>
        
          
          <p className="text-sm text-primary-foreground/70 mt-4">
            No spam. Unsubscribe anytime. Your email is safe with us.
          </p>
        </div>
      </div>
    </section>
    
  );
};

export default Newsletter;
