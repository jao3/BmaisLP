"use client";
import { useState, useRef, useEffect } from "react";
import {
  CreditCard,
  DollarSign,
  Wallet,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TitleHeader from "../TitleHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar o plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Products() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");
  const [currentSlide, setCurrentSlide] = useState(0);
  const carrosselRef = useRef<HTMLDivElement | null>(null);
  const [numVisible, setNumVisible] = useState(3);

  // Refs para animação
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const filtrosRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef([]);

  const servicos = [
    // {
    //   id: 1,
    //   tipo: "Refinanciamento",
    //   titulo: "Refinanciamento de Veiculo",
    //   descricao:
    //     "Crédito para compra de imóveis com taxas a partir de 2,8% ao ano.",
    //   icon: <CarFront className="text-amber-400" size={24} />,
    //   detalhes: [
    //     "Até 360 parcelas",
    //     "A partir de R$50.000",
    //     "Taxa de 2,8% ao ano",
    //   ],
    //   link: "https://api.whatsapp.com/send?phone=5561920021922&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20refinanciamento%20de%20ve%C3%ADculos.",
    // },
    {
      id: 2,
      tipo: "Empréstimo",
      titulo: "Empréstimo Consignado",
      descricao:
        "Atendimento personalizado para aposentados, pensionistas e servidores públicos.",
      icon: <DollarSign className="text-amber-400" size={24} />,
      detalhes: [
        "Taxas reduzidas e prazos estendidos.",
        "Disponível para negativados",
        "Sem consulta ao SPC/Serasa.",
      ],
      link: "https://api.whatsapp.com/send?phone=5561920021922&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20empr%C3%A9stimo%20consignado.",
    },
    {
      id: 3,
      tipo: "FGTS",
      titulo: "Saque FGTS",
      descricao:
        "Libere agora o valor das parcelas futuras do saque-aniversário.",
      icon: <Wallet className="text-amber-400" size={24} />,
      detalhes: [
        "Sem consulta ao SPC/Serasa.",
        "Taxas menores que as do empréstimo pessoal.",
        "Dinheiro rápido e sem comprometer sua renda mensal.",
      ],
      link: "https://wa.link/5zft8g?text=Quero%20simular%20um%20Empréstimo%20Pessoal",
    },
    {
      id: 4,
      tipo: "Cartões",
      titulo: "Cartão de Credito Consignado",
      descricao:
        "Cartão de crédito sem anuidade para servidores e aposentados do INSS.",
      icon: <CreditCard className="text-amber-400" size={24} />,
      detalhes: [
        "Descontos direto no contracheque",
        "Dinheiro disponível na conta..",
        "Taxa de juros acessível ",
      ],
      link: "https://api.whatsapp.com/send?phone=5561920021922&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Cart%C3%A3o%20de%20credito%20consignado.",
    },
    {
      id: 5,
      tipo: "Cartões",
      titulo: "Cartão Beneficio",
      descricao:
        "Cartão de crédito sem anuidade para servidores, federais/estaduais e aposentados do INSS.",
      icon: <CreditCard className="text-amber-400" size={24} />,
      detalhes: [
        "Descontos direto no contracheque.",
        "Dinheiro disponível na conta.",
        "Taxa de juros acessível ",
      ],
      link: "https://api.whatsapp.com/send?phone=5561920021922&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Cart%C3%A3o%20Benef%C3%ADcio.",
    },
  ];

  // Filtra os serviços com base no filtro ativo
  const servicosFiltrados =
    filtroAtivo === "Todos"
      ? servicos
      : servicos.filter((servico) => servico.tipo === filtroAtivo);

  // Categorias únicas para o filtro
  const categorias = [
    "Todos",
    ...new Set(servicos.map((servico) => servico.tipo)),
  ];

  // Efeito para animação inicial e configuração do carrossel
  useEffect(() => {
    // Reset current slide when filter changes
    setCurrentSlide(0);

    // Update number of visible slides based on window width
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1280) {
        setNumVisible(4);
      } else if (window.innerWidth >= 1024) {
        setNumVisible(3);
      } else if (window.innerWidth >= 768) {
        setNumVisible(2);
      } else {
        setNumVisible(1);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, [filtroAtivo]);

  // Animação inicial de load
  useEffect(() => {
    // Animação para o título
    gsap.fromTo(
      titleRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );

    // Animação para os filtros

    if (filtrosRef.current) {
      gsap.fromTo(
        filtrosRef.current.children,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: filtrosRef.current,
            start: "top bottom-=80",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Limpar animações
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      }
    };
  }, []);

  // Animar cards quando mudam de filtro
  useEffect(() => {
    if (!carrosselRef.current) return;

    // Atualizar a referência dos cards
    cardsRef.current = Array.from(
      carrosselRef.current.querySelectorAll(".card-servico")
    );

    // Animar os cards com um efeito de stagger
    gsap.fromTo(
      cardsRef.current,
      {
        y: 40,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, [servicosFiltrados]);

  const nextSlide = () => {
    const maxSlide = Math.max(0, servicosFiltrados.length - numVisible);
    setCurrentSlide((currentSlide) => Math.min(currentSlide + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide) => Math.max(currentSlide - 1, 0));
  };

  const maxSlideIndex = Math.max(0, servicosFiltrados.length - numVisible);
  const showPrevButton = currentSlide > 0;
  const showNextButton = currentSlide < maxSlideIndex;

  // Animação quando alterna os slides
  useEffect(() => {
    if (carrosselRef.current) {
      gsap.to(carrosselRef.current.querySelector(".carrossel-inner"), {
        x: `-${currentSlide * (100 / numVisible)}%`,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [currentSlide, numVisible]);

  return (
    <section ref={sectionRef} className="mx-auto px-4 py-12 text-gray-100">
      <div ref={titleRef}>
        <TitleHeader
          title="Seu crédito seguro e personalizado"
          sub="💰 Escolha a opção que se encaixa"
        />
      </div>

      {/* Filtros */}
      <div
        ref={filtrosRef}
        className="flex justify-center gap-2 mb-10 flex-wrap"
      >
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setFiltroAtivo(categoria)}
            className={`px-6 py-2 rounded-full transition-all ${
              filtroAtivo === categoria
                ? "bg-black-100 text-amber-400 font-medium"
                : "bg-black-100 text-gray-300 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Carrossel customizado */}
      <div className="relative">
        <div ref={carrosselRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out carrossel-inner"
            style={{
              transform: `translateX(-${currentSlide * (100 / numVisible)}%)`,
            }}
          >
            {servicosFiltrados.map((servico) => (
              <div
                key={servico.id}
                className="flex-shrink-0 px-3 card-servico"
                style={{ width: `${100 / numVisible}%` }}
              >
                <div className="h-full bg-black-100 rounded-xl shadow-md border border-gray-700 p-6 flex flex-col hover:border-amber-400 transition-all duration-300">
                  <div className="mb-3">
                    <span className="bg-primary text-white-50 text-sm font-bold px-3 py-1 rounded-full ">
                      {servico.tipo}
                    </span>
                  </div>

                  <div className="mb-4">{servico.icon}</div>

                  <h3 className="text-xl font-bold mb-2 text-amber-300">
                    {servico.titulo}
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    {servico.descricao}
                  </p>

                  <div className="mt-auto space-y-3">
                    {servico.detalhes.map((detalhe, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="text-amber-400 flex-shrink-0">✓</div>
                        <span className="text-sm text-gray-300">{detalhe}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={servico.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mt-6 w-full bg-primary hover:bg-amber-700 text-white-50 font-bold py-3 rounded-lg transition-colors">
                      Simule agora
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botões de navegação com animação hover */}
        {showPrevButton && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-gray-800 border border-gray-700 shadow-lg rounded-full p-2 z-10 flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft size={24} className="text-amber-400" />
          </button>
        )}

        {showNextButton && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-gray-800 border border-gray-700 shadow-lg rounded-full p-2 z-10 flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight size={24} className="text-amber-400" />
          </button>
        )}

        {/* Paginação */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-amber-400 w-4" : "bg-gray-700 w-2"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
