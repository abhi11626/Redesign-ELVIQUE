import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Opportunity from "@/components/sections/Opportunity";
import Products from "@/components/sections/Products";
import GrowthStats from "@/components/sections/GrowthStats";
import LeadCapture from "@/components/sections/LeadCapture";
import CTA from "@/components/sections/CTA";
// import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Opportunity />
      <Products />
      <GrowthStats />
      <LeadCapture />
      <CTA />
      {/* <Footer /> */}
    </>
  );
}
