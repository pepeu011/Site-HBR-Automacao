import { motion } from "framer-motion";
import { Shield, Award, Clock, Users } from "lucide-react";

const differentials = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Utilizamos componentes de alta qualidade e seguimos normas técnicas rigorosas.",
  },
  {
    icon: Award,
    title: "Equipe Especializada",
    description: "Engenheiros e técnicos com certificações e vasta experiência no setor.",
  },
  {
    icon: Clock,
    title: "Prazos Cumpridos",
    description: "Compromisso com cronogramas e entrega pontual de todos os projetos.",
  },
  {
    icon: Users,
    title: "Suporte Dedicado",
    description: "Atendimento técnico contínuo e suporte pós-implantação completo.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-dark-gradient text-navy-foreground" id="diferenciais">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-body font-semibold text-cyan-glow uppercase tracking-widest">
              Por que a HBR?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mt-3 mb-6">
              Excelência em cada{" "}
              <span className="text-cyan-glow">projeto</span>
            </h2>
            <p className="text-navy-foreground/60 font-body leading-relaxed mb-8">
              Com mais de 12 anos de experiência no mercado, a HBR Automação Industrial é referência
              em soluções inovadoras e confiáveis. Nossa missão é transformar a indústria brasileira
              através da tecnologia e da excelência em engenharia.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["ISO 9001", "NR-10", "NR-12", "NBR 5410"].map((cert) => (
                <div
                  key={cert}
                  className="px-4 py-2 rounded-lg border border-accent/20 bg-accent/5 text-cyan-glow text-sm font-body font-medium text-center"
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentials.map((diff, i) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-navy-foreground/5 backdrop-blur-sm border border-accent/10 rounded-xl p-6 hover:border-accent/30 transition-colors"
              >
                <diff.icon className="w-8 h-8 text-cyan-glow mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{diff.title}</h3>
                <p className="text-sm text-navy-foreground/50 font-body leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
