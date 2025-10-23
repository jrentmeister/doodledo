import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-primary/10 via-accent/10 to-muted/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight mb-4">
          Get Pattern Updates
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          New designs, exclusive offers, and creative inspiration delivered to your inbox
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
            data-testid="input-newsletter-email"
          />
          <Button type="submit" data-testid="button-newsletter-submit">
            Subscribe
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
