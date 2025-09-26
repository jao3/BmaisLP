export interface SocialMediaItem {
    name: 'Linkedin' | 'GitHub' | 'Instagram' | 'WhatsApp';
    url: string;
  }
  
  export interface NavLink {
    name: string;
    url: string;
  }
  export interface Faqs {
    id: number;
    question: string;
    answer: string
  }
  export interface Services{
    imgPath?: string;
    title: string;
    desc: string;
  }

  export interface Testimonials {
    id: number;
    name: string;
    mentions: string;
    review: string;
    imgPath?: string;
  }

  export interface Parthnes {
    id:number,
    image:string
  }

export interface Config {
    email: string;
    socialMedia: SocialMediaItem[];
    navLinks: NavLink[];
    faqData: Faqs[];
    parthnes: Parthnes[];
    testimonialsData: Testimonials[];
    servicesData: Services[];
  }

const config: Config ={
    email: 'joaoo.bio@gmail.com',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/joaoaraujo92/',
    },
    {
      name: 'GitHub',
      url: 'https://www.github.com/jao3',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/joao_araujo/',
    },
    {
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=5561982883180&text=Ol%C3%A1!',
    },
  ],
  navLinks: [
    {
      name: 'Início',
      url: '/#home',
    },
    {
      name: 'Parceiros',
      url: '/#parceiros',
    },
    {
      name: 'Avaliações',
      url: '/#avaliacoes',
    },
    {
      name: 'Perguntas Frequentes',
      url: '/#faq',
    },
  ],
  faqData: [
    {
      id: 1,
      question: "O que é necessário para contratar um empréstimo consignado?",
      answer: 'É preciso ser aposentado ou pensionista do INSS, servidor público federal ou estadual, ou trabalhar nas forças armadas. Para a contratação, é necessária documentação básica e contracheque. Simples assim :)',
    },
    {
      id: 2,
      question: "Estou negativado e possuo dívida ativa no SPC/SERASA, posso contratar?",
      answer: 'Sim, no empréstimo consignado não há consulta de CPF. Aproveite!',
    },
    {
      id: 3,
      question: "Não tenho margem disponível, posso fazer?",
      answer: 'Com toda certeza. Trabalhamos com renegociação e portabilidade de crédito, além de possuirmos linha de crédito pessoal para autônomos e funcionários de empresa privada.',
    },
    {
      id: 4,
      question: "Por que escolher uma promotora de crédito?",
      answer: 'As promotoras são correspondentes bancários credenciados pelo Banco Central, e por atuarem com gama de inúmeros bancos, conseguem sempre a melhor e mais barata taxa de juros. Isso significa oferecer crédito mais atrativo e com a mesma segurança de um banco convencional. Na BMais, além de tudo isso, prezamos por um atendimento pessoal, com excelência e que fidelize e satisfaça você cliente.',
    },
  ],
  parthnes: [
    {
      id: 1,
      image: "/safra.png"
    },
    {
      id: 2,
      image: "/banrisul.png"
    },
    {
      id: 3,
      image: "/BB.png"
    },
    {
      id: 4,
      image: "/c6consig.png"
    },
    {
      id: 5,
      image: "/Bpan.png"
    },
    {
      id: 6,
      image: "/Bbmg.png"
    },
    {
      id: 7,
      image: "/santander.png"
    },
    {
      id: 8,
      image: "/brb.png"
    },
    {
      id: 9,
      image: "/itau.png"
    },
    {
      id: 10,
      image: "/pgbank.png"
    },
    {
      id: 11,
      image: "/ole.png"
    },
    
  ],
  
  servicesData: [
    {
      imgPath: "/seo.png",
      title: "Atendimento personalizado",
      desc: "A BMais Soluções Financeiras nasceu em 2019, em Brasília/DF, com um propósito claro: ajudar pessoas a realizarem sonhos e saírem das dívidas de forma segura e sem dor de cabeça!",
    },
    {
      imgPath: "/chat.png",
      title: "Qualidade e variedades",
      desc: "Trabalhamos com os principais bancos do país — como Pan, Caixa, BRB Financiamentos, Daycoval, Itaú, BMG, Banrisul, C6 Bank, Safra e várias fintechs — pra garantir as melhores taxas e condições de crédito pra você.",
    },
    {
      imgPath: "/time.png",
      title: "Agilidade e praticidade",
      desc: "Por isso, oferecemos um atendimento personalizado, rápido, sem enrolação e 100% online. E o melhor: aqui você não paga nada por isso!",
    },
  ],

  testimonialsData: [
    {
      id: 1,
      name: "Renata Baldacini",
      mentions: "Servidora Publica",
      review:
        "Fui muito bem atendida, estava insegura em relação a antecipação do FGTS, mas o atendente a Bruno me enviou toda a documentação da empresa. Dinheiro na conta em 1h.",
      imgPath: "https://media.gettyimages.com/id/1384357158/pt/foto/portrait-of-a-beautiful-mexican-woman.webp?s=1024x1024&w=gi&k=20&c=G0zLRwRw57jgD_om7GFi2XP3DSgUYHGcyNtTdeeubnk="
    },
    {
      id: 2,
      name: "Marcio",
      mentions: "Servidor Publico Federal",
      review:
        "Melhor empresa para os momentos de necessidade. Ágil, transparente e eficiente. Muito diferenciada das outras empresas do ramo e muito melhor do que fazer diretamente nos bancos.",
      imgPath: "/test1.jpg"
    },
    {
      id: 3,
      name: "Bruno Neto",
      mentions: "Servidor Publico",
      review:
        "Ótimo atendimento super prestativo atencioso e rápido",
      imgPath: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "André Felipe",
      mentions: "Aposentado",
      review:
        "Empresa bem localizada com atendimento excelente.",
      imgPath: "https://media.istockphoto.com/id/1135152361/pt/foto/senior-man-working-out-for-good-health.jpg?s=612x612&w=0&k=20&c=HrqfKxYE3fbfW_aUCGwZgTsAcxGDqtMgCLocQYqgKZE="
    },
    {
      id: 5,
      name: "Joao Araujo",
      mentions: "@joao_araujo",
      review:
        "Melhor empresa para os momentos de necessidade. Ágil, transparente e eficiente. Muito diferenciada das outras empresas do ramo e muito melhor do que fazer diretamente nos bancos.",
      imgPath: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "Joao Araujo",
      mentions: "@joao_araujo",
      review:
        "Melhor empresa para os momentos de necessidade. Ágil, transparente e eficiente. Muito diferenciada das outras empresas do ramo e muito melhor do que fazer diretamente nos bancos.",
      imgPath: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],

}

export const counterItems = [
  {value: 6, suffix: "+", label: "Anos no mercado"},
  {value: 20000, suffix: "+", label: "Clientes satisfeitos"},
  {value: 10, suffix: "M+", label: "Em Contratos fechados"},
  {value: 100, suffix: "%", label: "Digital e seguro"},
]

export default config