import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | WebaholicTech",
  description: "Get amazing website for your bussiness in affortable price.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Connect with WebaholicTech - Your Gateway to Digital Excellence. Reach out, and let's bring your vision to life!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
