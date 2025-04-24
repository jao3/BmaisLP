"use client";
import React, { useEffect, useRef } from "react";
import GlowCard from "../GlowCard";
import config from "@/data/config";
import TitleHeader from "../TitleHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Registrar o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animação de entrada do título
    gsap.fromTo(
      titleRef.current,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Animação de entrada dos cards (staggered)
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.15 * index,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });

    // Efeito de destaque ao scroll
    cardRefs.current.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        onEnter: () => {
          gsap.to(card, {
            boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to(card, {
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
            duration: 0.5,
          });
        },
      });
    });
  }, []);

  // Função para adicionar cards ao ref array
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardRefs.current[index]) {
      cardRefs.current[index] = el;
    }
  };

  return (
    <section id="avaliacoes" className="flex-center py-16" ref={sectionRef}>
      <div className="w-full h-full">
        <div ref={titleRef}>
          <TitleHeader
            title="O que dizem sobre nós?"
            sub="⭐️ Avaliações sobre nós"
          />
        </div>

        <div
          className="lg:columns-3 md:columns-2 columns-1 mt-16"
          ref={cardsRef}
        >
          {config.testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => addToRefs(el as HTMLDivElement, index)}
              className="mb-6 transform"
            >
              <GlowCard card={testimonial} index={index}>
                <div className="flex items-center gap-3">
                  <div className="overflow-hidden rounded-full">
                    <img
                      src={testimonial.imgPath}
                      alt={testimonial.name}
                      className="rounded-full w-[60px] h-[60px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-white-50">
                      {testimonial.name}
                    </p>
                    <p className="text-slate">{testimonial.mentions}</p>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
