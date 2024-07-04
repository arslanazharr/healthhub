/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./style.css";

function Number({ n, inView }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Stats = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer?.observe(ref.current);

    // return () => {
    //   observer?.unobserve(ref.current);
    // };
  }, []);

  return (
    <>
      <div
        ref={ref}
        id="app-container"
        className="bg-img-stats  grid grid-cols-12 min-h-[50vh] gap-6 py-7"
      >
        <div className="lg:col-span-3 sm:col-span-6 col-span-12 flex justify-center">
          <div className="flex flex-col items-center gap-1 justify-center">
            <div className="flex font-bold text-5xl">
              <Number n={100} inView={inView} />%
            </div>
            <p className="text-2xl">QUALITY</p>
          </div>
        </div>
        <div className="lg:col-span-3 sm:col-span-6 col-span-12 flex justify-center">
          <div className="flex flex-col items-center gap-1 justify-center">
            <div className="flex font-bold text-5xl">
              <Number n={48} inView={inView} />+
            </div>
            <p className="text-2xl">PEOPLE WORKING</p>
          </div>
        </div>
        <div className="lg:col-span-3 sm:col-span-6 col-span-12 flex justify-center">
          <div className="flex flex-col items-center gap-1 justify-center">
            <div className="flex font-bold text-5xl">
              <Number n={245} inView={inView} />
              K+
            </div>
            <p className="text-2xl">PATIENT A YEAR</p>
          </div>
        </div>
        <div className="lg:col-span-3 sm:col-span-6 col-span-12 flex justify-center">
          <div className="flex flex-col items-center gap-1 justify-center">
            <div className="flex font-bold text-5xl">
              <Number n={7} inView={inView} />
              K+
            </div>
            <p className="text-2xl">HAPPY SMILES</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
