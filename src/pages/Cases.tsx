import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react";

const cases = [
  {
    title: "Linha de Montagem Automotiva",
    client: "Grande Montadora — SP",
    problem: "Linha de montagem com processos manuais, alta taxa de retrabalho e baixa produtividade.",
    solution: "Implementação de 8 células robóticas integradas com sistema SCADA e rastreabilidade completa.",
    results: ["Aumento de 60% na produtividade", "Redução de 85% no retrabalho", "ROI em 14 meses"],
    tags: ["Robótica", "SCADA", "Integração"],
  },
  {
    title: "Automação de Processo Alimentício",
    client: "Indústria Alimentar — MG",
    problem: "Controle de temperatura e dosagem impreciso, resultando em perdas e inconsistência no produto final.",
    solution: "Sistema de controle com CLPs Siemens, instrumentação de precisão e supervisório integrado ao ERP.",
    results: ["Redução de 45% nas perdas", "Padronização de 99% dos lotes", "Economia de R$ 2M/ano"],
    tags: ["CLP", "Instrumentação", "ERP"],
  },
  {
    title: "Modernização de Painéis Elétricos",
    client: "Metalúrgica — RS",
    problem: "Painéis elétricos obsoletos causando paradas frequentes e riscos de segurança.",
    solution: "Substituição completa dos painéis com projeto conforme NR-10/NR-12 e implementação de rede industrial.",
    results: ["Zero paradas não programadas", "Conformidade total com normas", "Redução de 30% no consumo"],
    tags: ["Painéis", "NR-10", "Rede Industrial"],
  },
];

const Cases = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-hero-gradient text-navy-foreground pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-sm font-body font-semibold text-cyan-glow uppercase tracking-widest">
                Cases de Sucesso
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mt-3 mb-6">
                Resultados que <span className="text-cyan-glow">comprovam</span>
              </h1>
              <p className="text-navy-foreground/60 font-body text-lg">
                Conheça alguns dos projetos que transformaram a operação dos nossos clientes.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto space-y-12">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-body font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body mb-6">{c.client}</p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h4 className="font-heading font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-destructive" /> Desafio
                      </h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{c.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-accent" /> Solução
                      </h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-accent" /> Resultados
                      </h4>
                      <ul className="space-y-2">
                        {c.results.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-sm font-body text-foreground">
                            <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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

export default Cases;
