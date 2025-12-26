import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Wind, Coffee, Bath } from "lucide-react";
import interiorImage from "@/assets/interior.jpg";
import courtyardImage from "@/assets/courtyard.jpg";

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Coffee, label: "Tea & Coffee" },
  { icon: Bath, label: "Private Bath" },
];

export const RoomsPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={interiorImage}
                  alt="Boutique room with stone walls and vintage decor"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="col-span-2 pt-16 aspect-[3/4] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={courtyardImage}
                  alt="Courtyard dining area with tropical plants"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-accent/30 rounded-sm -z-10" />
          </div>

          {/* Text Content */}
          <div className="space-y-6 lg:pl-8 order-1 lg:order-2">
            <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium">
              Boutique Rooms
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Stay in Heritage Comfort
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our intimate collection of rooms combines the character of a 
              centuries-old colonial building with modern comforts. Each space 
              is uniquely designed, featuring original architectural details, 
              antique furnishings, and contemporary amenities.
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {amenities.map((amenity) => (
                <div key={amenity.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <amenity.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {amenity.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="outline" size="lg" asChild>
                <Link to="/rooms" className="group">
                  View Our Rooms
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">Check Availability</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
