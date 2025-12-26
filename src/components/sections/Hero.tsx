import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import exteriorImage from "@/assets/exterior.jpg";

export const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={exteriorImage}
          alt="The Bungalow Galle Fort exterior at night"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/30 to-espresso/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-cream/80 text-sm tracking-[0.4em] uppercase mb-6 animate-fade-up opacity-0">
          Heritage Boutique Restaurant & Rooms
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-semibold leading-tight mb-6 animate-fade-up opacity-0 delay-100">
          The Bungalow
        </h1>
        <p className="text-cream/90 text-xl md:text-2xl font-display italic mb-8 animate-fade-up opacity-0 delay-200">
          Galle Fort
        </p>
        <p className="text-cream/70 text-lg max-w-xl mx-auto mb-10 animate-fade-up opacity-0 delay-300">
          Serving great food in a beautifully restored colonial setting within 
          UNESCO World Heritage Galle Fort
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 delay-400">
          <Button variant="hero" size="xl" asChild>
            <Link to="/restaurant">Explore Menu</Link>
          </Button>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Reserve</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};
