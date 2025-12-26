import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Leaf, Users } from "lucide-react";
import loungeImage from "@/assets/lounge.jpg";
import decorImage from "@/assets/decor.jpg";
import courtyardImage from "@/assets/courtyard.jpg";
import entranceImage from "@/assets/entrance.jpg";

const values = [
  {
    icon: Heart,
    title: "Authentic Hospitality",
    description:
      "We believe in warm, genuine service that makes every guest feel at home in our heritage space.",
  },
  {
    icon: Leaf,
    title: "Locally Sourced",
    description:
      "Our kitchen champions local farmers and fishermen, bringing the freshest ingredients to your table.",
  },
  {
    icon: Award,
    title: "Heritage Preserved",
    description:
      "Every restoration decision honors the building's colonial past while embracing modern comfort.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We actively support the Galle Fort community and its artisans, celebrating local craftsmanship.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={entranceImage}
            alt="The Bungalow entrance"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-16">
          <p className="text-ochre text-sm tracking-[0.3em] uppercase font-medium mb-4 animate-fade-up opacity-0">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-semibold leading-tight animate-fade-up opacity-0 delay-100">
            The Bungalow
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                A Colonial Gem Reborn in Galle Fort
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Bungalow occupies a beautifully restored Dutch colonial building 
                dating back to the 18th century, situated within the UNESCO World 
                Heritage site of Galle Fort. What was once a merchant's residence 
                has been lovingly transformed into a destination for exceptional 
                dining and boutique accommodation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our restoration preserved the original coral stone walls, antique 
                timber beams, and terra cotta tiles while introducing contemporary 
                comforts. The result is a unique atmosphere where history meets 
                modern elegance—a true reflection of Sri Lanka's rich cultural tapestry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, The Bungalow is renowned for serving great food in an 
                unforgettable setting. Our team is dedicated to sharing the best 
                of Sri Lankan cuisine and hospitality with guests from around the world.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={loungeImage}
                  alt="The Bungalow historic lounge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 aspect-[4/3] overflow-hidden rounded-sm shadow-elegant border-4 border-background">
                <img
                  src={decorImage}
                  alt="Antique decor details"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Our Philosophy
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-sm shadow-soft hover:shadow-elegant transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
              <img
                src={courtyardImage}
                alt="The Bungalow courtyard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 lg:pl-8">
              <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium">
                Location
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                In the Heart of Galle Fort
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Galle Fort is a UNESCO World Heritage Site and one of Sri Lanka's 
                most captivating destinations. Built by the Portuguese in 1588 and 
                extensively fortified by the Dutch, this walled city is a living 
                museum of colonial architecture and multicultural heritage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Bungalow is ideally located on Pedlar Street, within easy 
                walking distance of the Fort's historic ramparts, boutique shops, 
                galleries, and the stunning Indian Ocean coastline.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact" className="group">
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
