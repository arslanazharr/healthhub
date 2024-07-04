/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { servicesGrid } from "../utils/constants";

const ServicesGrid = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        {servicesGrid.map((obj, ind) => (
          <div
            className="bg-white lg:col-span-4 sm:col-span-6 col-span-12 w-full p-10 border-[0.2px] border-main hover:bg-[#e1fdff] cursor-normal transition rounded-xl"
            key={obj.id}
          >
            <div className="flex justify-center flex-col items-center gap-4">
              <img className="w-24" src={obj.img} alt="" />
              <p className="text-2xl font-semibold">{obj.title}</p>
              <p className="text-[17px] text-center">{obj.desc}</p>

              <NavLink to="/contact">
                <button className="px-7 py-3 text-main text-[20px] hover:text-white hover:bg-main border-main border-[1px] rounded-full transition">
                  Book Now
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesGrid;
