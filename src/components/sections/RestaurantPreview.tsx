import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import diningImage from "@/assets/dining-area.jpg";
import lobsterImage from "@/assets/food-lobster.jpg";
import curryImage from "@/assets/food-curry.jpg";
import cocktailsImage from "@/assets/cocktails.jpg";

export const RestaurantPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Restaurant
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Serving Great Food
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Experience the finest Sri Lankan cuisine with international influences, 
            crafted from fresh local ingredients and served in our atmospheric 
            dining spaces.
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-8">
          <div className="aspect-[21/9] overflow-hidden rounded-sm shadow-elegant">
            <img
              src={diningImage}
              alt="The Bungalow restaurant dining area with stone walls and ambient lighting"
              className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Food Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="group relative aspect-square overflow-hidden rounded-sm shadow-soft hover:shadow-elegant transition-shadow duration-300">
            <img
              src={lobsterImage}
              alt="Grilled lobster with rice and salad"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-sm shadow-soft hover:shadow-elegant transition-shadow duration-300">
            <img
              src={curryImage}
              alt="Traditional Sri Lankan curry with rice and papadam"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-sm shadow-soft hover:shadow-elegant transition-shadow duration-300">
            <img
              src={cocktailsImage}
              alt="Fresh tropical cocktails with strawberry and pineapple"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/restaurant" className="group">
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
