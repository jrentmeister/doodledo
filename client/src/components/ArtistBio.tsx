import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, ExternalLink } from "lucide-react";
import { SiEtsy, SiPinterest } from "react-icons/si";
import artistImage from "@assets/generated_images/Artist_portrait_photo_97937c9c.png";

export default function ArtistBio() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: SiEtsy, label: "Etsy Shop", href: "#" },
    { icon: SiPinterest, label: "Pinterest", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@doodledo.com" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src={artistImage}
                alt="Artist portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-4">
                Meet the Artist
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Hi, I'm Sarah! I create repeating patterns that bring joy and beauty to everyday spaces. 
                Each design starts with hand-drawn illustrations and watercolor paintings, then gets transformed 
                into seamless digital patterns.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                My work is inspired by nature, vintage textiles, and the belief that beautiful design should 
                be accessible to everyone. Whether you're a maker, designer, or just someone who loves 
                beautiful things, I'm here to help bring your creative vision to life.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not creating patterns, you'll find me in my garden, exploring antique markets, 
                or experimenting with new art techniques in my studio.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-medium">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    data-testid={`link-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    <Button variant="outline" className="gap-2">
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </Button>
                  </a>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-muted/50">
              <h3 className="font-display text-xl font-medium mb-3">My Process</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Hand-drawn illustrations and watercolor paintings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Digital refinement and pattern creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Color palette development and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Quality assurance on multiple applications</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
