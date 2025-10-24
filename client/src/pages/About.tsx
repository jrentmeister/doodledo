import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import { SiEtsy, SiPinterest } from "react-icons/si";
import { Link } from "wouter";
import artistImage from "@assets/generated_images/Artist_portrait_photo_97937c9c.png";

export default function About() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: SiEtsy, label: "Etsy Shop", href: "#" },
    { icon: SiPinterest, label: "Pinterest", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@doodledo.com" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-accent/20 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight mb-6">
              Art That Repeats Beautifully
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Hand-drawn patterns designed to bring joy and beauty to your creative projects
            </p>
          </div>
        </section>

        {/* Artist Bio */}
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
                    Meet Sarah
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Hi! I'm Sarah, the artist and designer behind Doodle Do. I create repeating patterns
                    that bring joy and beauty to everyday spaces. Each design starts with hand-drawn
                    illustrations and watercolor paintings, then gets transformed into seamless digital patterns.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    My work is inspired by nature, vintage textiles, and the belief that beautiful design
                    should be accessible to everyone. Whether you're a maker, designer, or just someone who
                    loves beautiful things, I'm here to help bring your creative vision to life.
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
                      >
                        <Button variant="outline" className="gap-2">
                          <link.icon className="h-4 w-4" />
                          {link.label}
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-4">
                My Creative Process
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From initial sketch to finished pattern, each design goes through a thoughtful creative journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-light text-primary">1</span>
                </div>
                <h3 className="font-display text-xl font-medium mb-2">Sketch</h3>
                <p className="text-muted-foreground text-sm">
                  Hand-drawn illustrations and watercolor paintings capture organic textures
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-light text-primary">2</span>
                </div>
                <h3 className="font-display text-xl font-medium mb-2">Refine</h3>
                <p className="text-muted-foreground text-sm">
                  Digital refinement ensures clean lines and seamless repeats
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-light text-primary">3</span>
                </div>
                <h3 className="font-display text-xl font-medium mb-2">Color</h3>
                <p className="text-muted-foreground text-sm">
                  Carefully curated color palettes tested for versatility
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-light text-primary">4</span>
                </div>
                <h3 className="font-display text-xl font-medium mb-2">Test</h3>
                <p className="text-muted-foreground text-sm">
                  Quality assurance on multiple applications and scales
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What I Offer */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-4">
                How We Can Work Together
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="font-display text-2xl font-medium mb-3">Browse & Purchase</h3>
                <p className="text-muted-foreground mb-4">
                  Explore our collection of ready-made patterns available for immediate download.
                  Perfect for personal and commercial projects.
                </p>
                <Link href="/">
                  <Button variant="outline">View Patterns</Button>
                </Link>
              </Card>

              <Card className="p-8">
                <h3 className="font-display text-2xl font-medium mb-3">License for Commercial Use</h3>
                <p className="text-muted-foreground mb-4">
                  Need patterns for your product line? We offer flexible licensing options for
                  businesses and commercial applications.
                </p>
                <Button variant="outline">Learn About Licensing</Button>
              </Card>

              <Card className="p-8">
                <h3 className="font-display text-2xl font-medium mb-3">Commission Custom Designs</h3>
                <p className="text-muted-foreground mb-4">
                  Looking for something unique? Commission a custom pattern designed specifically
                  for your project with your preferred colors and style.
                </p>
                <Link href="/commission">
                  <Button>Start a Commission</Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-display text-xl font-medium mb-2">
                  What file formats do you provide?
                </h3>
                <p className="text-muted-foreground">
                  All patterns are provided as high-resolution PNG files (300 DPI) suitable for
                  printing and digital applications. Custom commissions can include additional
                  formats like SVG or AI upon request.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-display text-xl font-medium mb-2">
                  Can I use patterns commercially?
                </h3>
                <p className="text-muted-foreground">
                  Yes! All patterns come with a commercial license included. You can use them for
                  products, packaging, textiles, and more. See our licensing terms for full details.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-display text-xl font-medium mb-2">
                  How long does a custom commission take?
                </h3>
                <p className="text-muted-foreground">
                  Typical turnaround is 2-3 weeks from initial consultation to final delivery.
                  Rush orders may be available for an additional fee.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-display text-xl font-medium mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-muted-foreground">
                  Due to the digital nature of our products, all sales are final. However, if you
                  experience any technical issues with your files, we're happy to help!
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-light mb-6">
              Let's Create Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have questions or ready to start a project? I'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/commission">
                <Button size="lg" className="text-lg px-8">
                  Start a Commission
                </Button>
              </Link>
              <a href="mailto:hello@doodledo.com">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Send an Email
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
