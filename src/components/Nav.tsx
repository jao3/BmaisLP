"use client";
/* eslint-disable @next/next/no-img-element */
import config from "@/data/config";
import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import gsap from "gsap";
import Link from "next/link";

const Nav: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const navItemsRef = useRef<HTMLOListElement | null>(null);

  // Iniciar animação page Load
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    //estado inicial
    gsap.set(headerRef.current, { y: -100, opacity: 0 });
    gsap.set(logoRef.current, { opacity: 0, scale: 0.8 });

    if (navItemsRef.current) {
      gsap.set(Array.from(navItemsRef.current?.children), {
        y: -20,
        opacity: 0,
      });
    }

    //animação de elementos

    tl.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
    })
      .to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        },
        "-=0.3"
      )
      .to(
        Array.from(navItemsRef.current?.children || []),
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
        },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollState = window.scrollY;

      if (currentScrollState > scrollPosition && currentScrollState > 50) {
        setIsVisible(false);

        // Usar GSAP para animar a saída da barra de navegação
        if (headerRef.current) {
          gsap.to(headerRef.current, {
            y: -100,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      } else {
        setIsVisible(true);

        // Usar GSAP para animar a entrada da barra de navegação
        if (headerRef.current) {
          gsap.to(headerRef.current, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }

      // Adicionar efeito de fundo conforme a rolagem
      if (headerRef.current) {
        //const opacity = Math.min(currentScrollState / 200, 0.9);
        headerRef.current.style.backgroundColor = `transparent`;

        // Reduzir altura da barra em rolagens maiores
        if (currentScrollState > 100) {
          gsap.to(headerRef.current, {
            height: "70px",
            duration: 0.2,
          });
        } else {
          gsap.to(headerRef.current, {
            height: "80px",
            duration: 0.2,
          });
        }
      }

      setScrollPosition(currentScrollState);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <header
      ref={headerRef}
      className={`flex justify-around items-center fixed right-0 top-0 z-100 px-[50px] w-[100%] h-[80px] bg-[rgba(10,25,47,0.85)] pointer-events-auto select-auto backdrop-blur-[10px] ease-[all 0.25s cubic-bezier(0.645, 0.045, 0.335,1)]
        ${isVisible ? "tranlate-y-0" : "-translate-y-full"}
        ${
          scrollPosition > 50 ? "bg-transparent" : "bg-transparent"
        } transition-[var(--transition)]`}
    >
      <div className="flex items-center justify-between relative w-full text-white-50">
        <Link ref={logoRef} href="/">
          <img src="/logo2.png" alt="logo" width="90px" height="90px" />
        </Link>
        <div className="hidden items-center md:flex">
          <ol
            ref={navItemsRef}
            className="flex items-center justify-between p-0 m-0 list-none"
          >
            {config.navLinks &&
              config.navLinks.map(({ url, name }, i) => (
                <li
                  key={i}
                  className="lg:mx-[7px] relative text-fz-xs lg:text-fz-xl font-bold text-white-50"
                >
                  <Link href={url} className="pr-2.5">
                    {name}
                  </Link>
                </li>
              ))}
          </ol>
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Nav;
