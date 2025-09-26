/* eslint-disable @next/next/no-img-element */
import config from "@/data/config";
import React from "react";

const Parceiros: React.FC = () => {
  return (
    <div
      id="parceiros"
      className="md:my-20 my-10 relative bg-white-50 h-[300px] flex items-center justify-center"
    >
      {/* <div className="gradient-edge" />
      <div className="gradient-edge" /> */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2  rounded-full bg-white-50">
        <img src="/logo2.png" alt="" width="100px" height="100px" />
      </div>
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {config.parthnes?.map((parceiro) => (
            <div key={parceiro.id} className="marquee-item">
              <img src={parceiro.image} alt="parceiros" className="" />
            </div>
          ))}
          {config.parthnes?.map((parceiro) => (
            <div key={parceiro.id}>
              <img
                src={parceiro.image}
                alt="parceiros"
                className="grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parceiros;
