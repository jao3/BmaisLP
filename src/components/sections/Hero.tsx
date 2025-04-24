"use client";

import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import AnimateCounter from "../AnimateCounter";
import gsap from "gsap";

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    // Timeline para animar os elementos sequencialmente
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Definindo o estado inicial dos elementos
    gsap.set(textRef.current?.children, { y: 50, opacity: 0 });
    gsap.set(imageRef.current, { scale: 0.8, opacity: 0 });
    gsap.set(buttonsRef.current?.children, { y: 20, opacity: 0 });

    // Animando os elementos
    tl.to(textRef.current?.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
    })
      .to(
        imageRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 1,
        },
        "-=0.4"
      )
      .to(
        buttonsRef.current?.children,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
        },
        "-=0.6"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      className="before:pointer-events-none before:fixed before:inset-0 before:z-[-10] before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-white-50)_0%,_transparent_100%)] before:opacity-10 md:items-center"
      id="home"
      ref={targetRef}
    >
      <div className="min-h-screen text-white-50 flex gap-20 lg:gap-30 flex-col items-center justify-center md:px-10 py-26 lg:py-16 lg:flex-row ">
        {/* Left Content */}
        <div className="max-w-xl space-y-6" ref={textRef}>
          <h2 className="pb-2 text-white-50 font-bold font-mono">
            LIBERAÇÃO DE CRÉDITO COM AGILIDADE E PRATICIDADE
          </h2>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="text-white-50">BMais</span>
            <br />

            <span className="text-white-50 font-bold">Financeira</span>
          </h1>
          <p className="text-slate pb-5">
            Praticidade e comodidade ao pedir seu Empréstimo Consignado. Peça
            pelo computador ou celular.
          </p>
          <div className="flex gap-4" ref={buttonsRef}>
            <a
              href="https://api.whatsapp.com/send?phone=556133083416&text=Ol%C3%A1!"
              className="bg-primary px-6 py-3 font-bold hover:bg-yellow-600 cursor-pointer transition rounded-full"
            >
              Faça uma simulação
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=556133083416&text=Ol%C3%A1!"
              className="bg-primary px-6 py-3 rounded-full font-bold cursor-pointer hover:bg-[#25d366] transition"
            >
              <span className="flex items-center gap-2">
                Fale Conosco <FaWhatsapp />
              </span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative" ref={imageRef}>
          <img
            src="/heroimg3.png"
            alt="Mulher sorrindo"
            width={900}
            height={900}
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
      <AnimateCounter />
    </section>
  );
};

export default Hero;
