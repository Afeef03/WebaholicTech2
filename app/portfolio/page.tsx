import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Portfolio from '@/components/Portfolio';


export const metadata: Metadata = {
  title: "Portfolio Page | WebaholicTech",
  description: "Get amazing website for your bussiness in affortable price.",
  // other metadata
};
const portfolioPage = () => {

  return (
    <div>
      <Breadcrumb
        pageName="Portfolio Page"
        description="Elevate your brand with our web design prowess. Crafting digital excellence, we transform ideas into impactful online experiences. "
      />
      <Portfolio />
    </div>
  )
}

export default portfolioPage
