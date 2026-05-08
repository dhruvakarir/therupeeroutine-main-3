import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import NewsletterModal from "@/components/NewsletterModal";
import React, { useState } from "react";

const Newsletter = () => {
  const [subscribeMsg, setSubscribeMsg] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goToNewsLetter = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowNewsletter(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("CONTACT_EMAIL") || "").toString().trim();

    if (!email) {
      setIsError(true);
      setSubscribeMsg("Please enter your email.");
      return;
    }

    setIsSubmitting(true);
    setSubscribeMsg(null);

    try {
      const baseUrl = import.meta.env.VITE_API_URL ?? "";
      const url = `${baseUrl.replace(/\/$/, "")}/api/newsletter/subscribe/`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "homepage" }),
      });

      if (!res.ok) {
        throw new Error("Subscription failed");
      }

      setIsError(false);
      setSubscribeMsg("Thanks for subscribing!");
      form.reset();
    } catch (err: any) {
      console.error("NEWSLETTER ERROR >>>", err);
      setIsError(true);
      setSubscribeMsg(err?.message || "Network error, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-hero">
      <div className="max-w-3xl mx-auto text-center">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-16 w-16 text-accent mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Join 500+ Indian Investors
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-8">
            Get weekly insights on mutual funds, stock market updates, tax-saving tips,
            and investment strategies for Indian markets. Build your wealth with expert guidance.
          </p>

          <form id="newsletter-form" onSubmit={handleSubmit}>
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
              disabled={isSubmitting}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium whitespace-nowrap disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Subscribe Free"}
            </Button>
          </form>

          {isSubmitting && !subscribeMsg && (
            <p className="text-primary-foreground/80 mt-2">Submitting…</p>
          )}

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
