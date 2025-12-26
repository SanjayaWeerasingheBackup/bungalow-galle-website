import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Download, ArrowRight } from "lucide-react";
import diningImage from "@/assets/dining-area.jpg";
import lobsterImage from "@/assets/food-lobster.jpg";
import curryImage from "@/assets/food-curry.jpg";
import cocktailsImage from "@/assets/cocktails.jpg";
import interiorImage from "@/assets/interior.jpg";
import courtyardImage from "@/assets/courtyard.jpg";

const menuCategories = [
  {
    name: "Starters",
    items: [
      { name: "Devilled Prawns", description: "Wok-fried prawns with onions, capsicum, and house-made chili paste", price: "2,400" },
      { name: "Coconut Soup", description: "Creamy coconut soup with lemongrass, ginger, and fresh herbs", price: "950" },
      { name: "Fish Cutlets", description: "Traditional Sri Lankan fish cakes with tamarind dip", price: "1,200" },
    ],
  },
  {
    name: "Mains",
    items: [
      { name: "Crab Curry", description: "Fresh Lagoon crab in rich coconut gravy with aromatic spices", price: "4,800" },
      { name: "Grilled Lobster", description: "Half lobster with garlic butter, served with rice and garden salad", price: "7,500" },
      { name: "Rice & Curry", description: "Traditional rice with five curries, sambols, and papadam", price: "2,200" },
      { name: "Lamb Shank", description: "Slow-braised lamb with root vegetables and red wine jus", price: "4,200" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Curd & Treacle", description: "Buffalo curd with kithul treacle—a Sri Lankan classic", price: "850" },
      { name: "Watalappan", description: "Traditional coconut custard with cardamom and jaggery", price: "950" },
      { name: "Chocolate Fondant", description: "Warm chocolate cake with vanilla ice cream", price: "1,400" },
    ],
  },
];

const Restaurant = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={diningImage}
            alt="The Bungalow restaurant dining area"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-16">
          <p className="text-ochre text-sm tracking-[0.3em] uppercase font-medium mb-4 animate-fade-up opacity-0">
            Dining Experience
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-semibold leading-tight animate-fade-up opacity-0 delay-100">
            Restaurant
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Serving Great Food
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6">
              A Celebration of Sri Lankan Flavors
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our kitchen celebrates the vibrant culinary traditions of Sri Lanka, 
              enhanced with international techniques and the freshest local ingredients. 
              From the catch of the day to organic vegetables from nearby farms, 
              every dish tells a story of this remarkable island.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-accent" />
                <span>Breakfast: 7:00 - 10:30</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-accent" />
                <span>Lunch: 12:00 - 15:00</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-accent" />
                <span>Dinner: 18:30 - 22:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="aspect-square overflow-hidden rounded-sm shadow-elegant">
              <img
                src={interiorImage}
                alt="Interior dining with stone walls"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-sm shadow-elegant">
              <img
                src={lobsterImage}
                alt="Grilled lobster dish"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-sm shadow-elegant">
              <img
                src={courtyardImage}
                alt="Courtyard seating area"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Our Menu
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-4">
                Sample Selections
              </h2>
              <p className="text-muted-foreground">
                A taste of what awaits. Menu changes seasonally.
              </p>
            </div>

            {menuCategories.map((category) => (
              <div key={category.name} className="mb-12">
                <h3 className="font-display text-2xl text-foreground mb-6 pb-2 border-b border-border">
                  {category.name}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-start gap-4"
                    >
                      <div>
                        <h4 className="font-display text-lg text-foreground">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-display text-accent whitespace-nowrap">
                        LKR {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center pt-8">
              <p className="text-sm text-muted-foreground mb-6">
                Prices in Sri Lankan Rupees. Service charge included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Menu
                </Button>
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact" className="group">
                    Reserve a Table
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
              <img
                src={cocktailsImage}
                alt="Fresh tropical cocktails"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 lg:pl-8">
              <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium">
                Bar & Beverages
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                Tropical Refreshments
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our bar offers a curated selection of cocktails inspired by 
                Sri Lanka's tropical bounty—fresh king coconut, passion fruit, 
                arrack, and local spices. We also feature fine wines, Ceylon tea 
                selections, and freshly pressed juices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Join us for sunset drinks on our veranda as the warm ocean 
                breeze drifts through the Fort.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Restaurant;
