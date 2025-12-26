import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import loungeImage from "@/assets/lounge.jpg";
import decorImage from "@/assets/decor.jpg";

export const AboutPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:pr-8">
            <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium">
              Welcome to
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              A Heritage Haven in Galle Fort
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nestled within the ancient walls of Galle Fort, The Bungalow offers 
              a unique blend of colonial charm and contemporary comfort. Our beautifully 
              restored property features exposed coral stone walls, antique furnishings, 
              and tropical gardens that transport you to a bygone era.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're seeking an unforgettable dining experience or a peaceful 
              retreat in one of our boutique rooms, The Bungalow promises authentic 
              Sri Lankan hospitality at its finest.
            </p>
            <Button variant="outline" size="lg" asChild className="mt-4">
              <Link to="/about" className="group">
                Discover Our Story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-elegant">
                  <img
                    src={loungeImage}
                    alt="The Bungalow lounge area with vintage furniture"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="aspect-[3/5] overflow-hidden rounded-sm shadow-elegant">
                  <img
                    src={decorImage}
                    alt="Colonial decor and antique details"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
