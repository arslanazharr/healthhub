import { NavLink } from "react-router-dom";
import { services } from "../../utils/constants";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="custom-space-x custom-space-x2 custom-space-y">
        <div className="lg:pb-[10vh] pb-[6vh] custom-space-x custom-space-x2 flex flex-col gap-3">
          <div className="flex whitespace-nowrap text-black text-[3vh] lg:text-[5vh] justify-center text-center gap-2 lg:gap-4">
            <p>Our</p>
            <p className="font-bold">Services</p>
          </div>
          <p className="text-center">
            Read doctor-produced health and medical information written for you
            to make informed decisions about your health concerns.
          </p>
        </div>

        {services.map((obj, ind) => (
          <div
            key={obj.id}
            className={`flex flex-col custom-space-x custom-space-x2 custom-space-y ${
              ind % 2 === 0
                ? "md:flex-row bg-gray-100"
                : "md:flex-row-reverse bg-white"
            }`}
          >
            <div className="md:w-1/2 p-4">
              <img
                src={obj.img}
                alt="Image description"
                className={`mx-auto md:mx-0 ${
                  ind % 2 === 0
                    ? "md:float-left md:mr-4 mb-4 md:mb-0"
                    : "md:float-right md:ml-4 mb-4 md:mb-0"
                } max-w-full h-auto`}
              />
            </div>

            <div className="md:w-1/2 p-4">
              <div className="flex flex-col gap-3 items-center sm:items-start">
                <h2 className="text-4xl font-bold">{obj.title}</h2>
                <p className="text-gray-700">{obj.desc}</p>

                <NavLink to="/contact">
                  <button className="px-7 py-3 mt-4 text-main text-[20px] hover:text-white hover:bg-main border-main border-[1px] rounded-full transition">
                    Book Now
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
