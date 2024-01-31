import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Flowchart from "@/components/About/FlowChart";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Elevate your brand with our web design prowess. Crafting digital excellence, we transform ideas into impactful online experiences. "
      />
      <AboutSectionOne />
      <Flowchart />
    </>
  );
};

export default AboutPage;
