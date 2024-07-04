import Stats from "../../components/Stats";
import Testimonials from "../../components/Testimonials";
import ServicesGrid from "../../components/ServicesGrid";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Zoom, Fade, Reveal, Slide } from "react-reveal";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="custom-space-x custom-space-x2 custom-space-y bg-img h-[60vh] flex justify-center bg-secondary">
        <div className="flex flex-col gap-6 items-center justify-center">
          <Reveal>
            <div className="flex md:flex-row text-center flex-col gap-1 lg:gap-3 text-white text-[4vh] lg:text-[6vh]">
              <p>Need an</p>
              <p className="font-bold">
                <Typewriter
                  options={{
                    strings: [
                      "expert doctor?",
                      "experienced physician?",
                      "accomplished specialist?",
                      "exceptional surgeon?",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: "number",
                  }}
                />
              </p>
            </div>
            <div>
              <NavLink to="/contact">
                <button className="lg:px-10 px-5 border-[1px] hover:bg-transparent bg-white text-main border-white py-4 hover:text-white transition rounded-md text-xl lg:text-2xl">
                  Book an Appointment
                </button>
              </NavLink>
            </div>
          </Reveal>
        </div>
      </div>

      <Zoom>
        <div className="py-10 px-5">
          <div className="flex whitespace-nowrap text-black text-[4vh] lg:text-[6vh] justify-center text-center mb-10 gap-2 lg:gap-4">
            <p>Our</p>
            <p className="font-bold">Services</p>
          </div>
          <ServicesGrid />
        </div>
      </Zoom>

      <Fade>
        <Stats />
      </Fade>

      <Slide bottom>
        <Testimonials />
      </Slide>
    </>
  );
};

export default Home;
