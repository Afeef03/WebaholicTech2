"use client"
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function AccordianCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

  return (
    <div className="container my-12">
      <div className="relative my-10">
        <h2 className="absolute top-0 left-0 w-full mt-75 text-4xl font-bold" style={{
          width: '100%',
          textAlign: 'center',
          top: '45%'
        }} id="AboutCompany">Quick FAQs Guide</h2>
        <h2 className="text-9xl opacity-10 text-uppercase" style={{ fontWeight: 'bold' }} id="about-us-1">Common Quesries</h2>
      </div>
     
    </div>
  );
}
