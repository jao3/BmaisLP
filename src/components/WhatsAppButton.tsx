import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const WhatsAppButton = () => {
  return (
    <div>
      {/* Botão WhatsApp Flutuante */}
      <a
        href="https://api.whatsapp.com/send?phone=556133083416&text=Ol%C3%A1!"
        className="fixed bottom-10 right-10 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
