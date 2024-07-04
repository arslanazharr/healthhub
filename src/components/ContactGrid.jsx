/* eslint-disable no-unused-vars */
import { contact } from "../utils/constants";

const ContactGrid = () => {
  return (
    <div>
      <div className="custom-space-x custom-space-x2 flex flex-col gap-3">
        <div className="grid grid-cols-12 gap-4 py-[4vh]">
          {contact.map((obj, ind) => (
            <div
              className="col-span-12 sm:col-span-6 lg:col-span-3 bg-gray-100 p-5 rounded-lg hover:opacity-65 transition"
              key={obj.id}
            >
              <div className="flex gap-3 lg:flex-col flex-row lg:items-start items-center justify-center">
                <img className="w-16" src={obj.img} alt="" />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">{obj.title}</p>
                  <p>{obj.cta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactGrid;
