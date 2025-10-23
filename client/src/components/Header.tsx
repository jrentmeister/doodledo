import { Link, useLocation } from "wouter";
import { Menu, ShoppingCart, Search, X } from "lucide-react";
import { SiEtsy } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/collections", label: "Collections" },
    { href: "/commission", label: "Commission" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2">
            <span className="font-display text-2xl font-light tracking-tight text-foreground">
              Doodle Do
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={location === link.href ? "secondary" : "ghost"}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {searchOpen ? (
              <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-5 duration-200">
                <Input
                  type="search"
                  placeholder="Search patterns..."
                  className="w-48"
                  autoFocus
                  data-testid="input-search"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSearchOpen(false)}
                  data-testid="button-close-search"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSearchOpen(true)}
                  data-testid="button-search"
                >
                  <Search className="h-4 w-4" />
                </Button>
                <a
                  href="https://etsy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-etsy"
                >
                  <Button size="icon" variant="ghost">
                    <SiEtsy className="h-4 w-4" />
                  </Button>
                </a>
                <Button size="icon" variant="ghost" data-testid="button-cart">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  data-testid="button-menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant={location === link.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
