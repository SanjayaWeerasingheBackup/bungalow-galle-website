import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { RestaurantPreview } from "@/components/sections/RestaurantPreview";
import { RoomsPreview } from "@/components/sections/RoomsPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <RestaurantPreview />
      <RoomsPreview />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
