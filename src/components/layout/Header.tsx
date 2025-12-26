import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "The Bungalow", path: "/about" },
  { name: "Restaurant", path: "/restaurant" },
  { name: "Rooms", path: "/rooms" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col items-start transition-opacity hover:opacity-80"
          >
            <span
              className={cn(
                "font-display text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              The Bungalow
            </span>
            <span
              className={cn(
                "text-xs tracking-[0.3em] uppercase transition-colors duration-300",
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              )}
            >
              Galle Fort
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm tracking-wide transition-all duration-300 hover:opacity-70 relative group",
                  isScrolled ? "text-foreground" : "text-primary-foreground",
                  location.pathname === item.path && "font-medium"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-current transition-all duration-300",
                    location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
            <Button
              variant={isScrolled ? "elegant" : "hero"}
              size="sm"
              asChild
            >
              <Link to="/contact">Reserve</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  "h-6 w-6 transition-colors",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6 transition-colors",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 bg-card z-40 transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            to="/"
            className="font-display text-3xl font-semibold text-foreground mb-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            The Bungalow
          </Link>
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-xl font-display text-foreground transition-all duration-300 hover:text-accent",
                location.pathname === item.path && "text-accent"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="elegant" size="lg" className="mt-4" asChild>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Reserve a Table
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
