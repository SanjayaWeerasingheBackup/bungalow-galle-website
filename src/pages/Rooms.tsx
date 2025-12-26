import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Wind, Coffee, Bath, Tv, Users, Maximize } from "lucide-react";
import interiorImage from "@/assets/interior.jpg";
import loungeImage from "@/assets/lounge.jpg";
import courtyardImage from "@/assets/courtyard.jpg";

const rooms = [
  {
    name: "Heritage Room",
    description:
      "Intimate and charming, our Heritage Rooms feature original coral stone walls, antique furnishings, and modern comforts. Perfect for solo travelers or couples seeking an authentic experience.",
    image: interiorImage,
    size: "18-22",
    guests: "1-2",
    price: "15,000",
    amenities: ["King bed", "Private bathroom", "Air conditioning", "Free WiFi", "Tea & coffee", "Safe"],
  },
  {
    name: "Colonial Suite",
    description:
      "Spacious and elegant, our Colonial Suites offer separate living and sleeping areas, high ceilings, and views of the Fort. Ideal for those seeking extra space and luxury.",
    image: loungeImage,
    size: "35-40",
    guests: "2-3",
    price: "25,000",
    amenities: ["King bed", "Living area", "Private bathroom", "Air conditioning", "Free WiFi", "Minibar", "Safe"],
  },
  {
    name: "Courtyard Room",
    description:
      "Overlooking our tropical courtyard garden, these rooms combine privacy with natural beauty. Wake to birdsong and enjoy your morning coffee surrounded by greenery.",
    image: courtyardImage,
    size: "25-28",
    guests: "2",
    price: "18,500",
    amenities: ["King bed", "Garden view", "Private bathroom", "Air conditioning", "Free WiFi", "Tea & coffee", "Safe"],
  },
];

const allAmenities = [
  { icon: Wifi, label: "Complimentary WiFi" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Coffee, label: "Tea & Coffee Making" },
  { icon: Bath, label: "Private Bathroom" },
  { icon: Tv, label: "Flat Screen TV" },
];

const Rooms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={loungeImage}
            alt="The Bungalow heritage lounge"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-16">
          <p className="text-ochre text-sm tracking-[0.3em] uppercase font-medium mb-4 animate-fade-up opacity-0">
            Boutique Accommodation
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-semibold leading-tight animate-fade-up opacity-0 delay-100">
            Our Rooms
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Stay With Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6">
              Heritage Comfort in Galle Fort
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our intimate collection of rooms offers a unique opportunity to stay 
              within a centuries-old colonial building. Each space has been thoughtfully 
              designed to honor the property's heritage while providing all modern comforts.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {rooms.map((room, index) => (
              <div
                key={room.name}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`aspect-[4/3] overflow-hidden rounded-sm shadow-elegant ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:order-1 lg:pr-8" : "lg:pl-8"
                  }`}
                >
                  <h3 className="font-display text-3xl md:text-4xl text-foreground">
                    {room.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Maximize className="h-4 w-4 text-accent" />
                      <span>{room.size} m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span>{room.guests} guests</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">From</p>
                      <p className="font-display text-2xl text-accent">
                        LKR {room.price}
                        <span className="text-sm text-muted-foreground font-body">
                          {" "}
                          / night
                        </span>
                      </p>
                    </div>
                    <Button variant="default" size="lg" asChild>
                      <Link to="/contact">Check Availability</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Guest Amenities
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Everything You Need
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {allAmenities.map((amenity) => (
              <div key={amenity.label} className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="h-7 w-7 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-espresso">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-cream mb-6">
            Ready to Experience The Bungalow?
          </h2>
          <p className="text-cream/70 max-w-xl mx-auto mb-8">
            Contact us directly to book your stay and receive the best rates.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/contact" className="group">
              Make a Reservation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Rooms;
