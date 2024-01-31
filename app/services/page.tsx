import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import TechStack from "@/components/TechStack/TechStack";

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
        pageName="Service Page"
        description="We provide the best web design and development services as a One-Stop Shop. We provide specialized and reasonably priced web design services to meet your needs. "
      />
      <AboutSectionOne />
      <TechStack />
    </>
  );
};

export default AboutPage;
