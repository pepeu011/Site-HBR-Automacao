import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Cpu, Zap, Bot, LayoutGrid, Wrench } from "lucide-react";
import roboticsImg from "@/assets/robotics.jpg";
import autImg from "@/assets/automation.jpg";
import inte_systemImg from "@/assets/integration-system.jpg";
import clpImg from "@/assets/clp.jpg";
import eletricpainelImg from "@/assets/eletric-painel.jpg";
import maintenanceImg from "@/assets/maintenance.jpg";

const services = [
  {
    icon: Settings,
    title: "Automação Industrial",
    description: "Desenvolvimento de sistemas de automação completos para linhas de produção, incluindo sensores, atuadores, CLPs e sistemas SCADA.",
    benefits: ["Aumento de até 40% na produtividade", "Redução de erros humanos", "Monitoramento em tempo real", "Padronização de processos"],
    applications: ["Linhas de montagem", "Processos contínuos", "Controle de qualidade", "Logística interna"],
    image: autImg,
  },
  {
    icon: LayoutGrid,
    title: "Integração de Sistemas",
    description: "Conectamos máquinas, softwares e processos em uma plataforma unificada para gestão inteligente da produção.",
    benefits: ["Visão unificada da operação", "Eliminação de ilhas de informação", "Decisões baseadas em dados", "Integração ERP/MES/SCADA"],
    applications: ["Indústria 4.0", "Smart Factory", "IoT Industrial", "Gestão da produção"],
    image: inte_systemImg,
  },
  {
    icon: Cpu,
    title: "Programação de CLP",
    description: "Desenvolvimento e programação de controladores lógicos programáveis das principais marcas do mercado (Siemens, Allen-Bradley, Schneider).",
    benefits: ["Controle preciso de processos", "Diagnóstico avançado", "Flexibilidade de programação", "Suporte remoto"],
    applications: ["Controle de máquinas", "Processos batch", "Intertravamento de segurança", "Controle de movimento"],
    image: clpImg,
  },
  {
    icon: Bot,
    title: "Robótica Industrial",
    description: "Implementação de células robóticas completas para soldagem, montagem, pintura, paletização e manipulação de materiais.",
    benefits: ["Produção 24/7", "Qualidade consistente", "Redução de riscos", "Flexibilidade produtiva"],
    applications: ["Soldagem MIG/TIG", "Pick and Place", "Paletização", "Inspeção por visão"],
    image: roboticsImg,
  },
  {
    icon: Zap,
    title: "Painéis Elétricos",
    description: "Projeto, montagem e instalação de painéis elétricos industriais de força e comando, seguindo todas as normas técnicas vigentes.",
    benefits: ["Projeto sob medida", "Conformidade com normas", "Materiais de qualidade", "Documentação completa"],
    applications: ["CCMs", "Quadros de distribuição", "Painéis de comando", "Sistemas de partida"],
    image: eletricpainelImg,
  },
  {
    icon: Wrench,
    title: "Manutenção e Suporte Técnico",
    description: "Serviços de manutenção preventiva, corretiva e preditiva, com suporte técnico especializado para garantir a disponibilidade dos seus sistemas.",
    benefits: ["Redução de paradas", "Maior vida útil dos equipamentos", "Atendimento 24/7", "Contratos personalizados"],
    applications: ["Manutenção preventiva", "Manutenção corretiva", "Comissionamento", "Treinamento operacional"],
    image: maintenanceImg,
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-hero-gradient text-navy-foreground pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-sm font-body font-semibold text-cyan-glow uppercase tracking-widest">
                Serviços
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mt-3 mb-6">
                Soluções completas em <span className="text-cyan-glow">automação</span>
              </h1>
              <p className="text-navy-foreground/60 font-body text-lg">
                Da concepção ao comissionamento, oferecemos serviços completos para transformar sua operação industrial.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services detail */}
        <section className="section-padding bg-background">
          <div className="container mx-auto space-y-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">{service.description}</p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Benefícios</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Aplicações</h4>
                      <ul className="space-y-2">
                        {service.applications.map((a) => (
                          <li key={a} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to="/contato">
                    <Button variant="cta">Solicitar Orçamento</Button>
                  </Link>
                </div>

                <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl shadow-card-hover w-full aspect-square object-cover"
                    />
                  ) : (
                    <div className="rounded-xl bg-muted aspect-square flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-accent/20" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Services;
