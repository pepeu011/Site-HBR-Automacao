import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Automação Industrial" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(199 89% 48% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 48% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-cyan-glow font-body text-sm font-medium mb-6 border border-accent/30">
              HBR Automação Industrial
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-navy-foreground leading-tight mb-6"
          >
            Soluções Inteligentes em{" "}
            <span className="text-gradient">Automação Industrial</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-navy-foreground/70 max-w-xl mb-10 font-body"
          >
            Aumente a produtividade e reduza custos com tecnologia e inovação.
            Projetos customizados para a sua indústria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contato">
              <Button variant="cta" size="lg" className="text-base px-8 py-6">
                Solicitar Orçamento
              </Button>
            </Link>
            <a href="https://wa.me/5511981669115?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto%20de%20automação%20industrial.%20Poderia%20me%20passar%20mais%20informações%20sobre%20serviços,%20valores%20e%20prazos?" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Falar com Especialista
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "200+", label: "Projetos Realizados" },
              { value: "12+", label: "Anos de Experiência" },
              { value: "98%", label: "Satisfação dos Clientes" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-cyan-glow">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-navy-foreground/50 font-body mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
