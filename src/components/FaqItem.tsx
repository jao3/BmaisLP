import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const FaqItem = ({ item, onClick, isOpen }) => {
  const answerRef = useRef(null);
  return (
    <div
      className=" border-b border-black-100 last:border-none transition-colors duration-300 hover:bg-gradient-to-r hover:from-gray-600/50 hover:to-transparent hover:rounded-xl"
      id={`faq-item-${item.id}`}
    >
      <button
        className="w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none rounded-lg transition-all duration-200 cursor-pointer text-gray-900"
        onClick={() => onClick(item.id)}
      >
        <span className="text-white-50 pr-6">{item.question}</span>
        <div className="bg-primary flex-shrink-0 flex items-center justify-center w-8 min-w-8 aspect-square rounded-full bg-gray-200 transition-all duration-200">
          <FaPlus className="text-white" />
        </div>
      </button>
      <div
        className="overflow-hidden"
        id={`answer-${item.id}`}
        ref={answerRef}
        style={{
          maxHeight: isOpen ? answerRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-4 pt-0 pb-5 text-slate">
          <div className="p-3 rounded-lg overflow-y-auto max-h-[300px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
