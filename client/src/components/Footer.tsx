import { Link } from "wouter";
import { Instagram, Mail } from "lucide-react";
import { SiEtsy, SiPinterest } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { label: "All Patterns", href: "/collections" },
        { label: "Collections", href: "/collections" },
        { label: "New Arrivals", href: "/collections" },
        { label: "Best Sellers", href: "/collections" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Commission", href: "/commission" },
        { label: "FAQs", href: "/faq" },
        { label: "Licensing Info", href: "/licensing" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "License Agreement", href: "/license" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: SiEtsy, href: "#", label: "Etsy" },
    { icon: SiPinterest, href: "#", label: "Pinterest" },
    { icon: Mail, href: "mailto:hello@doodledo.com", label: "Email" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-2xl font-light mb-3">Doodle Do</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Art that repeats beautifully. Patterns with purpose.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="h-9 w-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                  aria-label={link.label}
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-sm font-medium mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Doodle Do. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
