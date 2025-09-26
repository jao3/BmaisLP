"use client";
import config from "@/data/config";
import React, { useState } from "react";
import FaqItem from "../FaqItem";
import TitleHeader from "../TitleHeader";

// interface FAQ {
//   id: number;
//   question: string;
//   answer: string;
// }

const Faq: React.FC = () => {
  const [selected, setSelected] = useState<string | number | null>(null);
  const [expandAll, setExpandAll] = useState(false);

  const toggleItem = (id: string | number) => {
    if (expandAll) {
      setExpandAll(false);
    }
    setSelected((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  };

  // const toggleExpandAll = () => {
  //   setExpandAll((prev) => !prev);
  //   setSelected(null);
  // };

  return (
    <section
      id="faq"
      className=" block md:flex flex-col items-center justify-center pb-40"
    >
      <TitleHeader
        title="Perguntas Frequentes"
        sub="💬 Alguma duvida sobre nosso trabalho? 🚀"
      />
      <div className="bg-black-100 rounded-xl shadow-lg border border-black-100/50 transition-all duration-300 max-w-[700px]">
        {config.faqData.map((item) => (
          <FaqItem
            key={item.id}
            item={item}
            onClick={toggleItem}
            isOpen={expandAll || selected === item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
