import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import NewsletterModal from "@/components/NewsletterModal";
import React from "react";
import { useState } from "react";


const Newsletter = () => {
  const [subscribeMsg, setSubscribeMsg] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  const goToNewsLetter = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowNewsletter(true);
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* ... icon, heading, text etc ... */}

          <form
            id="newsletter-form"
          onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget as HTMLFormElement | null;
              if (!form) return; // safety

              const formData = new FormData(form);
              const data = Object.fromEntries(formData);

              try {
                const res = await fetch("https://script.google.com/macros/s/AKfycbyFqHyDnkPrC_nuCsO9_gRA41SjHRfiFdMK8rmF3l-qQHspqM9uK_8mvGUkivEP4S_V/exec", {
                  method: "POST",
                  headers: { "Content-Type": "text/plain;charset=utf-8" },
                  body: JSON.stringify(data),
                });

                const text = await res.text();
                let result: any;
                try {
                  result = JSON.parse(text);
                } catch {
                  result = { success: false, error: "Invalid response" };
                }

                if (result.success) {
                  setIsError(false);
                  setSubscribeMsg("Thanks for subscribing!");
                  form.reset();                 // use cached form, not e.currentTarget
                } else {
                  setIsError(true);
                  setSubscribeMsg(result.error || "Submission failed, please try again.");
                }
              } catch (err: any) {
                console.error("FETCH ERROR >>>", err);
                setIsError(true);
                setSubscribeMsg(err?.message || "Network error, please try again.");
              }
            }}
>  
          
            <Input
              type="text"
              placeholder="Enter your name"
              name="FIRSTNAME"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent"
            />
            <Input
              type="email"
              required
              placeholder="Enter your email"
              name="CONTACT_EMAIL"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent"
            />
            <Button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium whitespace-nowrap"
            >
              Subscribe Free
            </Button>
          </form>

          {subscribeMsg && (
            <p className={isError ? "text-red-400 mt-2" : "text-green-400 mt-2"}>
              {subscribeMsg}
            </p>
          )}

          <NewsletterModal
            open={showNewsletter}
            onClose={() => setShowNewsletter(false)}
          />

          <p className="text-sm text-primary-foreground/70 mt-4">
            No spam. Unsubscribe anytime. Your email is safe with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
