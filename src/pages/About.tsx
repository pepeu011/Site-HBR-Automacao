import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
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
                Sobre Nós
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mt-3 mb-6">
                Inovação e excelência em <span className="text-cyan-glow">automação</span>
              </h1>
              <p className="text-navy-foreground/60 font-body text-lg leading-relaxed">
                Há mais de 12 anos, a HBR Automação Industrial transforma a indústria brasileira
                com soluções tecnológicas de ponta, compromisso com a qualidade e atendimento personalizado.
              </p>
            </motion.div>
          </div>
        </section>

        {/* History */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-heading text-foreground mb-6">
                  Nossa <span className="text-gradient">História</span>
                </h2>
                <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                  <p>
                    Fundada em 2013, a HBR nasceu da paixão por engenharia e da visão de que a automação
                    industrial poderia revolucionar a produtividade das empresas brasileiras.
                  </p>
                  <p>
                    Ao longo dos anos, construímos uma trajetória sólida com mais de 500 projetos
                    entregues, atendendo indústrias dos mais diversos segmentos: automotivo, alimentício,
                    farmacêutico, metalúrgico e muito mais.
                  </p>
                  <p>
                    Nosso compromisso com a inovação e a qualidade nos posicionou como referência
                    no mercado de automação industrial no Brasil.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "2013", label: "Ano de fundação" },
                  { value: "200+", label: "Projetos entregues" },
                  { value: "50+", label: "Clientes ativos" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted rounded-xl p-6 text-center">
                    <div className="text-3xl font-heading font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-body mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Missão",
                  text: "Fornecer soluções de automação industrial inovadoras e confiáveis que aumentem a produtividade e competitividade dos nossos clientes.",
                },
                {
                  icon: Eye,
                  title: "Visão",
                  text: "Ser a empresa referência em automação industrial no Brasil, reconhecida pela excelência técnica e pelo compromisso com resultados.",
                },
                {
                  icon: Heart,
                  title: "Valores",
                  text: "Inovação contínua, qualidade sem compromisso, ética e transparência, valorização das pessoas e compromisso com o cliente.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-card rounded-xl p-8 shadow-card border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default About;
