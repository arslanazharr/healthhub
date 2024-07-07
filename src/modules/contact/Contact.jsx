import Form from "./Form";
import ContactGrid from "../../components/ContactGrid";
import { useEffect } from "react";
import { Bounce, Reveal } from "react-reveal";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gray-100 px-5 lg:py-[10vh] py-[6vh]">
        <Reveal>
          <div className=" custom-space-x custom-space-x2 flex flex-col lg:flex-row gap-3">
            <div className="lg:w-1/2 p-4 flex items-center">
              <div className=" flex flex-col gap-3">
                <div className="flex whitespace-nowrap text-black text-[3vh] lg:text-[5vh] justify-center text-center gap-2 lg:gap-4">
                  <p>Get in</p>
                  <p className="font-bold">Touch</p>
                </div>
                <p className="text-center">
                  Read doctor-produced health and medical information written
                  for you to make informed decisions about your health concerns.
                </p>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:w-1/2 p-4">
              <Form />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="bg-secondary px-5 lg:py-[10vh] py-[6vh]">
        <Reveal bottom>
          <ContactGrid />
        </Reveal>
      </div>
      <div className="h-[90vh] pb-[10vh] flex flex-col justify-center items-center">
        <div className="flex flex-row items-center gap-1 justify-center6 py-10">
          <p className="text-black text-[3vh] lg:text-4xl">Find</p>
          <p className="text-black text-[3vh] lg:text-4xl font-bold">Us</p>
        </div>

        <Bounce>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.3643627465594!2d74.18232087627038!3d31.37651535423399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff93c5a98f77%3A0x888e3bdc64104c95!2sArtificial%20Intelligence%20For%20Life%20(AI4LYF)!5e0!3m2!1sen!2s!4v1720311128939!5m2!1sen!2s"
            width="auto"
            height="450"
            allowfullscreen
            loading="lazy"
            className="md:w-[650px] w-auto"
          ></iframe>
        </Bounce>
      </div>
    </>
  );
};

export default Contact;
