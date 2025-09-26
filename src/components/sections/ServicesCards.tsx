"use client";
/* eslint-disable @next/next/no-img-element */
import config from "@/data/config";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar o plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ServicesCards = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<HTMLDivElement[]>([]);

  // Configurar as refs para os cards
  cardElementsRef.current = [];
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardElementsRef.current.includes(el)) {
      cardElementsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Configurar as animações após o componente ser montado
    const cards = cardElementsRef.current;

    if (!cards.length) return;

    // Definir o estado inicial dos cards
    gsap.set(cards, {
      y: 50,
      opacity: 0,
      scale: 0.9,
    });

    // Criar animação para cada card
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.2, // Atraso entre cada card para efeito stagger
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      });
    });

    // Adicionar efeito hover
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.03,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          duration: 0.3,
          ease: "power2.in",
        });
      });
    });

    return () => {
      // Limpeza ao desmontar o componente
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      }

      // Remover event listeners
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="w-full px-5 md:px-20 py-5 md:py-20" ref={cardsRef}>
      <div className="mx-auto grid-3-cols">
        {config.servicesData.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            ref={addToRefs}
            className="rounded-xl p-8 flex flex-col gap-4 border border-black-50 bg-black-100 transition-all duration-300"
          >
            <div className="size-14 flex items-center justify-center rounded-full service-icon">
              <img
                src={imgPath}
                alt={title}
                className="transition-transform duration-300"
              />
            </div>
            <h3 className="text-white-50 text-2xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
