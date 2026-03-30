import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings, Cpu, Zap, Bot, LayoutGrid, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Settings,
    title: "Automação Industrial",
    description: "Sistemas completos de automação para otimizar processos produtivos e aumentar a eficiência.",
  },
  {
    icon: LayoutGrid,
    title: "Integração de Sistemas",
    description: "Conectamos equipamentos, softwares e processos em uma plataforma unificada e inteligente.",
  },
  {
    icon: Cpu,
    title: "Programação de CLP",
    description: "Desenvolvimento e programação de controladores lógicos programáveis para controle preciso.",
  },
  {
    icon: Bot,
    title: "Robótica Industrial",
    description: "Implementação de células robóticas para soldagem, montagem, pintura e manipulação.",
  },
  {
    icon: Zap,
    title: "Painéis Elétricos",
    description: "Projeto, montagem e instalação de painéis elétricos industriais sob medida.",
  },
  {
    icon: Wrench,
    title: "Manutenção e Suporte",
    description: "Manutenção preventiva e corretiva com suporte técnico especializado 24/7.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="servicos">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-foreground mt-3">
            Soluções Completas para sua{" "}
            <span className="text-gradient">Indústria</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-body">
            Oferecemos soluções personalizadas que transformam a produtividade e competitividade da sua empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-cta-gradient transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <Link to="/contato">
                <Button variant="link" className="p-0 h-auto text-accent font-semibold">
                  Solicitar Orçamento →
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
