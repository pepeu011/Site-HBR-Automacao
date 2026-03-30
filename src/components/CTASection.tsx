import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="section-padding bg-hero-gradient text-navy-foreground relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(199 89% 48% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 48% / 0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-6">
            Pronto para transformar sua <span className="text-cyan-glow">produção</span>?
          </h2>
          <p className="text-navy-foreground/60 font-body max-w-xl mx-auto mb-10 text-lg">
            Entre em contato e descubra como podemos otimizar seus processos industriais
            com soluções sob medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button variant="cta" size="lg" className="text-base px-10 py-6">
                Solicitar Orçamento Gratuito
              </Button>
            </Link>
            <a href="https://wa.me/5511981669115?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto%20de%20automação%20industrial.%20Poderia%20me%20passar%20mais%20informações%20sobre%20serviços,%20valores%20e%20prazos?" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base px-10 py-6">
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
