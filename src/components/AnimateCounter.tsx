import { counterItems } from "@/data/config";
import React from "react";
import CountUp from "react-countup";

const AnimateCounter = () => {
  return (
    <div className="xl:mt-0 mt-12">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {counterItems.map((item) => (
          <div className="bg-black-100 rounded-lg p-8 flex flex-col justify-center">
            <div
              key={item.label}
              className="counter-number text-5xl text-white-50 font-bold mb-2"
            >
              <CountUp suffix={item.suffix} end={item.value} />
              <div className="text-lg">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimateCounter;
