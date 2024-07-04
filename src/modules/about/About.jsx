import { useEffect } from "react";
import ContactGrid from "../../components/ContactGrid";
import ServicesGrid from "../../components/ServicesGrid";
import Stats from "../../components/Stats";
import WhyUs from "../../components/WhyUs";
import { Bounce, Zoom, Fade, Reveal } from "react-reveal";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gray-100 px-5 lg:py-[10vh] py-[6vh]">
        <div className="lg:pb-[10vh] pb-[6vh] custom-space-x custom-space-x2 flex flex-col gap-3">
          <div className="flex whitespace-nowrap text-black text-[3vh] lg:text-[5vh] justify-center text-center gap-2 lg:gap-4">
            <p>Our</p>
            <p className="font-bold">Specialities</p>
          </div>
          <p className="text-center">
            Read doctor-produced health and medical information written for you
            to make informed decisions about your health concerns.
          </p>
        </div>

        <Zoom>
          <ServicesGrid />
        </Zoom>
      </div>
      <div className="bg-gray-100 custom-space-x custom-space-x2">
        <div className="custom-space-x custom-space-x2 flex flex-col gap-3">
          <div className="flex whitespace-nowrap text-black text-[3vh] lg:text-[5vh] justify-center text-center gap-2 lg:gap-4">
            <p>Why</p>
            <p className="font-bold">Choose Us?</p>
          </div>
        </div>

        <Bounce>
          <div className="py-10">
            <WhyUs />
          </div>
        </Bounce>
      </div>
      <Fade className="">
        <Stats />
      </Fade>

      <Reveal bottom>
        <div className="lg:py-[10vh] py-[6vh]">
          <div className="flex whitespace-nowrap text-black text-[3vh] lg:text-[5vh] justify-center text-center gap-2 lg:gap-4">
            <p className="font-bold">Contact</p>
          </div>
          <p className="text-center">
            Read doctor-produced health and medical information written for you
            to make informed decisions about your health concerns.
          </p>

          <ContactGrid />
        </div>
      </Reveal>
    </>
  );
};

export default About;
