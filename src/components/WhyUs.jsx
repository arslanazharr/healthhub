import { whyChooseUs } from "../utils/constants";

const WhyUs = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {whyChooseUs.map((obj, index) => (
          <div
            key={index}
            className="md:col-span-6 col-span-12 border-[1px] border-white p-4 flex flex-col gap-2 bg-white rounded-xl text-black hover:bg-secondary hover:text-gray-100 cursor-default transition"
          >
            <div className="flex flex-row text-2xl gap-2">
              <h4 className="font-semibold"> {obj.title}</h4>
            </div>

            <div>{obj.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyUs;
