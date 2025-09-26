import Nav from "@/components/Nav";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Parceiros from "@/components/sections/Parceiros";
import Products from "@/components/sections/Products";
import ServicesCards from "@/components/sections/ServicesCards";
import Testimonials from "@/components/sections/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="">
      <WhatsAppButton />
      <Nav />
      <Hero />
      <Parceiros />
      <Products />
      <ServicesCards />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
