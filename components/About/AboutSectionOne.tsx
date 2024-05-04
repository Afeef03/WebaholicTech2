import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import AboutSectionTwo from "./AboutSectionTwo";
import Flowchart from "./FlowChart";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex text-lg font-normal text-body-color">
      <span className="mr-4 flex h-[30px] p-2 w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <div>
      <section id="about" className="pt-16 md:pt-20 lg:pt-20 pb-5 bg-gray-light dark:bg-bg-color-dark">
        <div className="px-16 text-justify md:px-20 lg:px-16" >
          <div className="relative">
            <h2 className="absolute top-0 left-0 w-full mt-75 text-4xl font-bold" style={{
              width: '100%',
              textAlign: 'center',
              top: '45%'
            }} id="AboutCompany">How We Work!</h2>
            <h2 className="text-9xl opacity-10 text-uppercase dark:text-white" style={{ fontWeight: 'bold' }} id="about-us-1">About Us</h2>
          </div>

        </div>
        <div className="container">
          <div className=" border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-12">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">


                <h2 className="mb-8 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  What We Offer
                </h2>
                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 lg:w-full">
                      <List text="Web Development: Immerse your brand in the digital space with our professional web development services. From sleek corporate websites to robust e-commerce platforms, we have the expertise to bring your vision to life." />
                      <List text="Mobile App Development: Elevate your brand with our mobile app development solutions. Whether you're targeting iOS or Android users, we create apps that combine functionality with a seamless user experience." />
                    </div>

                  </div>
                </div>
                <h2 className="mb-8 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Our Commitments
                </h2>
                <p className="text-base !leading-relaxed text-body-color md:text-lg mb-2 lg:mb-0">
                  Despite being a small team, we are committed to offering custom websites and mobile apps at affordable prices. Our focus extends from small businesses and startups to larger e-commerce enterprises, providing cost-effective digital solutions that exceed expectations.
                </p>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="about-image"
                    fill
                    id="about-us-image"
                    className="mx-auto max-w-full object-contain drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="about-image"
                    fill
                    className="mx-auto hidden max-w-full object-contain drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FeaturesTab /> */}

    </div>
  );
};

export default AboutSectionOne;