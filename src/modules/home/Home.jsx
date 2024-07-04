import Stats from "../../components/Stats";
import Testimonials from "../../components/Testimonials";
import ServicesGrid from "../../components/ServicesGrid";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="custom-space-x custom-space-x2 custom-space-y bg-img h-[60vh] flex justify-center bg-secondary">
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="flex md:flex-row flex-col gap-3 whitespace-nowrap text-white text-[4vh] lg:text-[6vh]">
            <p>Looking for an</p>
            <p className="font-bold">Expert Doctor?</p>
          </div>

          <div>
            <NavLink to="/contact">
              <button className="px-10 border-[1px] hover:bg-transparent bg-white text-main border-white py-4 hover:text-white transition rounded-md text-2xl">
                Book an Appointment
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="py-10 px-5">
        <div className="flex whitespace-nowrap text-black text-[4vh] lg:text-[6vh] justify-center text-center mb-10 gap-2 lg:gap-4">
          <p>Our</p>
          <p className="font-bold">Services</p>
        </div>
        <ServicesGrid />
      </div>

      <div>
        <Stats />
      </div>

      <div>
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
