import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HomePortfolio from "@/components/Portfolio/HomePortfolio";
import Testimonials from "@/components/Testimonials";
import { AccordianCustomStyles } from "@/components/tools/AccordianCustomStyles";
import { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase : new URL("https://www.webaholictech.com/"),
  title: {
    default : "WebaholicTech",
    template : `%s | WebaholicTech`
  },
  description: "Get amazing website for your bussiness in affortable price.",
  alternates : {
    canonical : `https://www.webaholictech.com/`,
    languages : {
      "en-US" : "https://www.webaholictech.com/" 
    }
  },
  
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />
      {/* <AboutSectionTwo />
      <Pricing />
      <Video />
      <Brands /> */}
      <HomePortfolio />
      <AccordianCustomStyles />
      <Testimonials />
      {/* <Blog /> */}

      <Contact />
    </>
  );
}
