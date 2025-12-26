import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-espresso text-cream/90">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <h3 className="font-display text-2xl text-cream font-semibold">
                The Bungalow
              </h3>
              <p className="text-xs tracking-[0.3em] uppercase text-cream/60 mt-1">
                Galle Fort
              </p>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              A heritage boutique experience in the heart of UNESCO-listed Galle Fort, 
              offering exceptional cuisine and authentic Sri Lankan hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-cream font-medium">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-cream/70 hover:text-cream transition-colors text-sm"
              >
                The Bungalow
              </Link>
              <Link
                to="/restaurant"
                className="text-cream/70 hover:text-cream transition-colors text-sm"
              >
                Restaurant
              </Link>
              <Link
                to="/rooms"
                className="text-cream/70 hover:text-cream transition-colors text-sm"
              >
                Rooms
              </Link>
              <Link
                to="/contact"
                className="text-cream/70 hover:text-cream transition-colors text-sm"
              >
                Contact & Arrival
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-cream font-medium">Contact</h4>
            <div className="space-y-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-cream/70 hover:text-cream transition-colors text-sm"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  31 Pedlar Street,<br />
                  Galle Fort, Sri Lanka
                </span>
              </a>
              <a
                href="tel:+94912234567"
                className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                +94 91 223 4567
              </a>
              <a
                href="mailto:hello@thebungalowgalle.com"
                className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors text-sm"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                hello@thebungalowgalle.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-cream font-medium">Hours</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-cream/70">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream">Restaurant</p>
                  <p>Breakfast: 7:00 - 10:30</p>
                  <p>Lunch: 12:00 - 15:00</p>
                  <p>Dinner: 18:30 - 22:00</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-xs">
            © {new Date().getFullYear()} The Bungalow Galle Fort. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream/50">
            <a href="#" className="hover:text-cream/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
