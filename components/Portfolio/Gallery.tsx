"use client"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Link from "next/link";



export function Gallery() {
  const data = [
    {
      label: "Bussiness website",
      value: "html",
      images: [
        {
          imageLink:
            "images/portfolio/clicnic.png",
        },
      ],
      website : "Bussiness website",
      siteLink: "https://glowing-licorice-f3d295.netlify.app/",
      text: "Explore our latest web development achievement – the [Clinic website. Meticulously crafted by our skilled team, it boasts a sleek and responsive design, seamless navigation, and dynamic content management. Optimized for search engines, it offers a user-friendly experience on all devices. Witness the perfect blend of technical prowess and creative design. Your vision, our expertise – let's build something extraordinary together"
    },
    {
      label: "Multi page website",
      value: "react",
      images: [
        {
          imageLink:
            "images/portfolio/college.png",
        },

      ],
      website : "Muti page website",
      siteLink: "https://college-templete-website.netlify.app/",
      text: "Embark on a digital educational journey with our college website. Navigate through intuitive design, streamlined information, and dynamic features. From admissions to course details, the site offers a comprehensive overview. Responsive and user-friendly, it adapts seamlessly to all devices. Explore academic excellence, extracurricular activities, and campus life effortlessly. Your educational adventure begins here—simple, informative, and tailored for an enriched online experience"
    },
    {
      label: "Single Page Website",
      value: "vue",
      images: [
        {
          imageLink:
            "images/portfolio/restaurent.png",
        },
      ],
      website : "Restaurent Website",
      siteLink: "https://grilli-restaurent.netlify.app/",
      text: "Experience gastronomic delight on our single-page restaurant website. From savory menus to seamless reservations, we've condensed the essence of your dining experience into a visually appealing, one-stop showcase. Designed for simplicity and optimized for all devices, our single-page site ensures a delightful journey for every online visitor. Savor the convenience, taste the elegance – it's your restaurant's story, simplified."
    },
    {
      label: "Portfolio",
      value: "angular",
      images: [
        {
          imageLink:
            "images/portfolio/portfolio.png",
        },
      ],
      website : "Portfolio Website",
      siteLink: "https://mohdafeef.netlify.app/",
      text: "Explore our latest masterpiece – a sleek and responsive portfolio website crafted with precision using React. Our showcase exemplifies the art of web development, combining modern design elements with seamless navigation. Discover innovation at its best, tailored for an immersive user experience. Witness the power of our agency's expertise in every click."
    },
  ];

  return (
    <section className="my-12">
      <Tabs value="html">
        <TabsHeader placeholder={"Something"} id="tab">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} placeholder={"Something"} style={{

              fontWeight: 550,
            }}>
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody className="grid grid-cols-1 gap-4" placeholder={"Something"}>
          {data.map(({ value, images, text, siteLink , website }) => (
            <TabPanel
              className="grid gap-4"
              key={value}
              value={value}
            >

              {images?.map(({ imageLink }, index) => (
                <div key={index} className="w-full">
                  <img
                    className="w-full max-w-full rounded-lg object-cover object-center"
                    src={imageLink}
                    alt="image-photo"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}

              <div className="text-center m-auto">
                <h1 style={{ fontSize: '40px' }} className="text-black dark:text-white font-bold">{website}</h1>
                <p className="text-base !leading-relaxed text-body-color md:text-lg">{text}</p>
                <div className="my-5">

                  <Link href={siteLink} target="_blank">
                    <button id="button">Preview Website</button>
                  </Link>

                </div>
              </div>

            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
}