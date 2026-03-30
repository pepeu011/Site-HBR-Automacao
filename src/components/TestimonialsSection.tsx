import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Diretor Industrial",
    company: "Metalúrgica São Paulo",
    text: "A HBR transformou completamente nossa linha de produção. A automação implementada reduziu nossos custos operacionais em 35% e aumentou a produtividade significativamente.",
    rating: 5,
  },
  {
    name: "Ana Lucia Ferreira",
    role: "Gerente de Operações",
    company: "Indústria Alimentar Brasil",
    text: "Profissionalismo e competência técnica impressionantes. O projeto de integração de sistemas foi entregue antes do prazo e com qualidade excepcional.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "CEO",
    company: "AutoParts Ltda",
    text: "A implementação da célula robótica pela HBR aumentou nossa capacidade produtiva em 60%. Recomendo sem hesitar para qualquer projeto de automação.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted" id="depoimentos">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-foreground mt-3">
            O que nossos clientes <span className="text-gradient">dizem</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <div className="font-heading font-bold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground font-body">
                  {t.role} — {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
