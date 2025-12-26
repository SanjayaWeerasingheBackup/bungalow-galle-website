import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import entranceImage from "@/assets/entrance.jpg";

export const ContactCTA = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={entranceImage}
          alt="The Bungalow entrance in daylight"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/80 to-espresso/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-ochre text-sm tracking-[0.3em] uppercase font-medium">
              Visit Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
              Experience The Bungalow
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed max-w-lg">
              We invite you to discover our heritage property in the heart of 
              Galle Fort. Whether for a memorable meal or an overnight stay, 
              we look forward to welcoming you.
            </p>
            <Button variant="accent" size="xl" asChild className="mt-4">
              <Link to="/contact">Make a Reservation</Link>
            </Button>
          </div>

          <div className="bg-card/10 backdrop-blur-md rounded-sm p-8 border border-cream/10">
            <h3 className="font-display text-2xl text-cream mb-6">Contact Details</h3>
            <div className="space-y-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-cream/80 hover:text-cream transition-colors group"
              >
                <MapPin className="h-5 w-5 mt-1 text-ochre flex-shrink-0" />
                <div>
                  <p className="font-medium text-cream group-hover:text-ochre transition-colors">
                    31 Pedlar Street
                  </p>
                  <p>Galle Fort, Sri Lanka</p>
                </div>
              </a>
              <a
                href="tel:+94912234567"
                className="flex items-center gap-4 text-cream/80 hover:text-cream transition-colors group"
              >
                <Phone className="h-5 w-5 text-ochre flex-shrink-0" />
                <span className="group-hover:text-ochre transition-colors">
                  +94 91 223 4567
                </span>
              </a>
              <a
                href="mailto:hello@thebungalowgalle.com"
                className="flex items-center gap-4 text-cream/80 hover:text-cream transition-colors group"
              >
                <Mail className="h-5 w-5 text-ochre flex-shrink-0" />
                <span className="group-hover:text-ochre transition-colors">
                  hello@thebungalowgalle.com
                </span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-cream/10">
              <h4 className="font-display text-lg text-cream mb-3">Opening Hours</h4>
              <div className="space-y-2 text-cream/70 text-sm">
                <div className="flex justify-between">
                  <span>Breakfast</span>
                  <span>7:00 - 10:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Lunch</span>
                  <span>12:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dinner</span>
                  <span>18:30 - 22:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
