import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion } from "framer-motion"

const Features = () => {
  return (
    <>
      <section id="services" className="mt-5 py-16 md:py-20 lg:py-20">
        <div className="container">
          <div className="relative">
            <h2 className="absolute top-0 left-0 w-full mt-75 text-4xl font-bold" style={{
              width: '100%',
              textAlign: 'center',
              top: '45%'
            }} id="AboutCompany">How We Work!</h2>
            <h2 className="text-9xl opacity-10 text-uppercase" id="about-us-1">Services</h2>
          </div>
          <div className="flex justify-center">
            <p className=" !leading-relaxed  md:text-lg sm:w-full p-tag-services text-lg font-medium text-body-color">
              We provide the best web design and development services as a One-Stop Shop. We provide specialized and reasonably priced web design services to meet your needs. Select the most effective plans for creating a responsive website based on your requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 text-center">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
