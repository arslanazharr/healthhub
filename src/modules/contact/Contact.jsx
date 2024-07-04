import Form from "./Form";
import Map from "../../components/Map";
import ContactGrid from "../../components/ContactGrid";
import { useEffect } from "react";

const Contact = () => {
  const obj = {
    lat: 31.3765108,
    lng: 74.1848958,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gray-100 px-5 lg:py-[10vh] py-[6vh]">
        <div className=" custom-space-x custom-space-x2 flex flex-col lg:flex-row gap-3">
          <div className="lg:w-1/2 p-4 flex items-center">
            <div className=" flex flex-col gap-3">
              <div className="flex whitespace-nowrap text-black text-[3vh] lg:text-[5vh] justify-center text-center gap-2 lg:gap-4">
                <p>Get in</p>
                <p className="font-bold">Touch</p>
              </div>
              <p className="text-center">
                Read doctor-produced health and medical information written for
                you to make informed decisions about your health concerns.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:w-1/2 p-4">
            <Form />
          </div>
        </div>
      </div>

      <div className="bg-secondary px-5 lg:py-[10vh] py-[6vh]">
        <ContactGrid />
      </div>
      <div className="h-[90vh] pb-[10vh] flex flex-col justify-center items-center">
        <div className="flex flex-row items-center gap-1 justify-center6 py-10">
          <p className="text-black text-[3vh] lg:text-4xl">Find</p>
          <p className="text-black text-[3vh] lg:text-4xl font-bold">Us</p>
        </div>
        <div className="w-full h-full">
          <Map center={obj} zoom={16} />
        </div>
      </div>
    </>
  );
};

export default Contact;
