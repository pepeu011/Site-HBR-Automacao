import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    toast.error("Por favor, preencha os campos obrigatórios.");
    return;
  }

  const numero = "5511981669115"; // seu número com DDI + DDD (sem espaços)

  const mensagem = `*Nova Solicitação*
Nome: ${formData.name}
Empresa: ${formData.company}
Telefone: ${formData.phone}
Email: ${formData.email}

Mensagem:
${formData.message}
  `;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");

  toast.success("Redirecionando para o WhatsApp...");

  setFormData({ name: "", company: "", phone: "", email: "", message: "" });
};

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
                Contato
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mt-3 mb-6">
                Fale com nossos <span className="text-cyan-glow">especialistas</span>
              </h1>
              <p className="text-navy-foreground/60 font-body text-lg">
                Pronto para otimizar sua produção? Entre em contato e receba um orçamento personalizado.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Solicite um Orçamento
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                        Nome *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                        Empresa
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nome da empresa"
                        maxLength={100}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                        Telefone
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(00) 00000-0000"
                        maxLength={20}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        maxLength={255}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">
                      Descrição do Projeto *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva brevemente o que você precisa..."
                      rows={5}
                      maxLength={1000}
                    />
                  </div>
                  <Button variant="cta" size="lg" type="submit" className="w-full sm:w-auto px-10">
                    Enviar Solicitação
                  </Button>
                </form>
              </motion.div>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Informações de Contato
                  </h2>
                  <div className="space-y-5">
                    {[
                      { icon: Phone, label: "Telefone", value: "(11) 98166-9115" },
                      { icon: Mail, label: "E-mail", value: "contato@hbrautomacaoindustrial.com.br" },
                      { icon: MapPin, label: "Endereço", value: "Rua Monteiro Lobato, 205 — Salto , SP" },
                    ].map((info) => (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <div className="font-heading font-bold text-foreground text-sm">{info.label}</div>
                          <div className="text-muted-foreground font-body text-sm">{info.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://wa.me/5511981669115?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto%20de%20automação%20industrial.%20Poderia%20me%20passar%20mais%20informações%20sobre%20serviços,%20valores%20e%20prazos?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[hsl(142_70%_45%)] text-accent-foreground rounded-xl p-5 hover:bg-[hsl(142_70%_40%)] transition-colors"
                >
                  <MessageCircle className="w-8 h-8" />
                  <div>
                    <div className="font-heading font-bold text-lg">WhatsApp</div>
                    <div className="text-sm opacity-80 font-body">Atendimento rápido e direto</div>
                  </div>
                </a>

                {/* Map placeholder */}
                <div className="rounded-xl overflow-hidden border border-border">
                  <iframe
                    title="Localização HBR"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.0967467867185!2d-47.30271832438354!3d-23.20314457904766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf51f9ac50af5f%3A0xf9bf63e190b0c6bd!2sR.%20Monteiro%20Lobato%2C%20205%20-%20Jardim%20Tres%20Marias%2C%20Salto%20-%20SP%2C%2013320-552!5e0!3m2!1spt-BR!2sbr!4v1771561321270!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
