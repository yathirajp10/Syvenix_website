import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import CaseStudy from "@/components/CaseStudy";
import Process from "@/components/Process";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import Pricing from "@/components/Pricing";
import Consultation from "@/components/Consultation";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Stats />
      <WhyChoose />
      <Pricing />
      <Consultation />
      <Solutions />
      <CaseStudy />
      <Testimonials />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}