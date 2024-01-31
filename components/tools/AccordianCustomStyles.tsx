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
      {/* ======1===== */}
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4" icon={<Icon id={1} open={open} />} placeholder={''}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 text-black dark:text-white transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          placeholder={''}
        >
          What services does WebaholicTech offer?
        </AccordionHeader>
        <AccordionBody className="text-base !leading-relaxed text-body-color md:text-lg sm:w-full">
          At WebaholicTech, we're experts in creating dynamic websites and apps. Our services include custom web design, mobile app development for both iOS and Android, and smooth e-commerce solutions. We're dedicated to bringing your digital ideas to life, ensuring an engaging online presence for your business.
        </AccordionBody>
      </Accordion>
      {/* ======2======= */}
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4" icon={<Icon id={1} open={open} />} placeholder={''}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 text-black dark:text-white transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          placeholder={''}
        >
          How long does it take to complete a website project?
        </AccordionHeader>
        <AccordionBody className="text-base !leading-relaxed text-body-color md:text-lg sm:w-full">
          The timeline for completing your website project depends on your specific needs. We customize our development process to meet your requirements, ensuring a timely delivery without compromising on quality. Your project's complexity and features play a key role in determining the overall duration.
        </AccordionBody>
      </Accordion>
      {/* =======3===== */}
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4" icon={<Icon id={1} open={open} />} placeholder={''}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 text-black dark:text-white transition-colors ${open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          placeholder={''}
        >
          Can you redesign an existing website?
        </AccordionHeader>
        <AccordionBody className="text-base !leading-relaxed text-body-color md:text-lg sm:w-full">
          Yes, we can redesign your existing website. Our experienced team specializes in refreshing and enhancing websites to meet modern design standards, improve functionality, and enhance user experience. Let's transform your online presence!
        </AccordionBody>
      </Accordion>
      {/* =======4===== */}
      <Accordion open={open === 4} className="rounded-lg border border-blue-gray-100 px-4" icon={<Icon id={1} open={open} />} placeholder={''}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 text-black dark:text-white transition-colors ${open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          placeholder={''}
        >
          What happens if I encounter issues with my website after it's launched?
        </AccordionHeader>
        <AccordionBody className="text-base !leading-relaxed text-body-color md:text-lg sm:w-full">
          If you encounter issues with your website post-launch, rest assured, we're here to help. Our dedicated support team will promptly address any issues, ensuring your website runs smoothly and performs optimally. Your satisfaction and website's success are our top priorities.
        </AccordionBody>
      </Accordion>
      {/* =======5===== */}
      <Accordion open={open === 5} className="rounded-lg border border-blue-gray-100 px-4" icon={<Icon id={1} open={open} />} placeholder={''}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 text-black dark:text-white transition-colors ${open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          placeholder={''}
        >
          What platforms or technologies do you use for website development and application development?
        </AccordionHeader>
        <AccordionBody className="text-base !leading-relaxed text-body-color md:text-lg sm:w-full">
          For website development, we leverage versatile technologies like MERN stack, WordPress, Shopify, and Tailwind CSS, tailoring the choice to your project's needs. In app development, we utilize React Native, ensuring cross-platform compatibility and efficient, high-performance mobile applications. Your project's unique requirements guide our technology selection
        </AccordionBody>
      </Accordion>
    </div>
  );
}
