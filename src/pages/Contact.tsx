import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Car, Plane } from "lucide-react";
import entranceImage from "@/assets/entrance.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
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
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-semibold leading-tight animate-fade-up opacity-0 delay-100">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                For reservations and inquiries, please fill out the form below 
                and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94 XX XXX XXXX"
                    className="bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your reservation or inquiry..."
                    rows={5}
                    required
                    className="bg-card resize-none"
                  />
                </div>
                <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl text-foreground mb-6">
                  Contact Details
                </h2>
                <div className="space-y-6">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-display text-lg text-foreground group-hover:text-accent transition-colors">
                        31 Pedlar Street
                      </p>
                      <p className="text-muted-foreground">
                        Galle Fort, Sri Lanka
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+94912234567"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-display text-lg text-foreground group-hover:text-accent transition-colors">
                        +94 91 223 4567
                      </p>
                      <p className="text-muted-foreground">Call us anytime</p>
                    </div>
                  </a>
                  <a
                    href="mailto:hello@thebungalowgalle.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-display text-lg text-foreground group-hover:text-accent transition-colors">
                        hello@thebungalowgalle.com
                      </p>
                      <p className="text-muted-foreground">
                        We reply within 24 hours
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-card p-8 rounded-sm shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-accent" />
                  <h3 className="font-display text-xl text-foreground">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Breakfast</span>
                    <span className="text-foreground">7:00 - 10:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lunch</span>
                    <span className="text-foreground">12:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dinner</span>
                    <span className="text-foreground">18:30 - 22:00</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span>Reception</span>
                    <span className="text-foreground">24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arrival Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-4">
              How to Find Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Getting to Galle Fort
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-sm shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="h-5 w-5 text-accent" />
                <h3 className="font-display text-xl text-foreground">
                  From Colombo Airport
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Bandaranaike International Airport is approximately 170km from Galle. 
                The journey takes around 2.5-3 hours via the Southern Expressway. 
                We can arrange airport transfers upon request.
              </p>
            </div>
            <div className="bg-card p-8 rounded-sm shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Car className="h-5 w-5 text-accent" />
                <h3 className="font-display text-xl text-foreground">
                  Local Arrival
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Galle Fort is a pedestrian-friendly zone. Vehicles can drop off at 
                the main gate on Hospital Street. We're located on Pedlar Street, 
                a short walk from the entrance. Parking is available nearby.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-secondary">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
            <p className="text-muted-foreground">
              Interactive map coming soon
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline mt-2 inline-block"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
