import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer className="text-white-50 px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5 md:px-10">
          {/* Sobre Nós */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Sobre Nós</h2>
            <p className="text-sm leading-relaxed">
              A BMais Financeira nasceu em 2019, em Brasília/DF, com um
              propósito claro: ajudar pessoas a realizarem sonhos e saírem das
              dívidas de forma segura e sem dor de cabeça! A gente entende que
              cada cliente é único. Por isso, oferecemos um atendimento
              personalizado, rápido, sem enrolação e 100% online.
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Site Map</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#parceiros" className="hover:underline">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:underline">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Fale Conosco */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Fale Conosco</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MdPhone className="text-yellow-500" />
                (61) 3308-3416
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-yellow-500" />
                bmais@bmais.com.br
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Uso de cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Siga-nos</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaFacebookF className="text-yellow-500" />
                <a
                  href="https://www.facebook.com/bmaiscred/"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="text-yellow-500" />
                <a
                  href="https://www.instagram.com/bmaisfinanceira/"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-yellow-500" />
                <a href="#" className="hover:underline">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-10 text-center text-sm text-gray-600 flex flex-col items-center justify-center">
          <p>© 2025 Bmais credito e financeira.</p>
          <p className="mt-2 max-w-4xl mx-auto text-xs text-gray-400">
            A BMais não é uma instituição financeira e não realiza operações de
            crédito diretamente. A BMais é uma plataforma digital que atua como
            correspondente bancário para facilitar o processo de contratação de
            empréstimos. Como correspondente bancário, seguimos as diretrizes do
            Banco Central do Brasil, nos termos da Resolução nº. 3.954, de 24 de
            fevereiro de 2011...
          </p>
          <p className="mt-1 text-xs text-gray-400">Endereço Bmais</p>
        </div>
      </footer>
    </>
  );
}
