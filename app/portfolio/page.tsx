import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Portfolio from '@/components/Portfolio';


export const metadata: Metadata = {
  title: "Portfolio Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
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
