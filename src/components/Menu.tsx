import React, { useState } from "react";
import config from "@/data/config";
import clsx from "clsx";

const Menu: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked;
  return (
    <div>
      <div className="relative bg-transparent w-[2rem] h-0.5 cursor-pointer">
        <button onClick={() => setClicked(!clicked)} className="">
          <span
            className={`absolute top-1 transition-all duration-300 inline-block md:hidden
    before:content-[''] before:absolute before:w-8 before:h-0.5 before:bg-white-50 before:transition-all before:duration-300 
    before:-top-2 before:left-0
    after:content-[''] after:absolute after:w-8 after:h-0.5 after:bg-white-50 after:transition-all after:duration-300 
    after:top-0 after:left-0
    ${
      clicked
        ? "before:top-0 before:rotate-135 after:-top-0 after:-rotate-135"
        : ""
    }`}
          ></span>
        </button>
      </div>
      <div
        className={clsx(
          "flex md:hidden items-center justify-center flex-col absolute right-0 left-0 top-[100%] p-[2rem] overflow-hidden m-2 rounded-[4px] bg-black-100 transition-opacity duration-300",
          clicked ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <ol className="flex items-center justify-center flex-col p-0 m-0 list-none counter-list">
          {config.navLinks &&
            config.navLinks.map(({ url, name }, i) => (
              <li key={i} className="my-1 relative font-fz-xl font-mono">
                <a href={url} onClick={() => handleClick()} className="p-2.5">
                  {name}
                </a>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Menu;
