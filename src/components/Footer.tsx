import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark-gradient text-navy-foreground border-t border-accent/10">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
<div className="mb-4">
  <img
    src={logoImg}
    alt="HBR Automação Industrial"
    className="h-22w-auto object-contain"
  />
</div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Serviços", href: "/servicos" },
                { label: "Cases", href: "/cases" },
                { label: "Contato", href: "/contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-navy-foreground/50 hover:text-cyan-glow text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/50 font-body">
              <li>Automação Industrial</li>
              <li>Integração de Sistemas</li>
              <li>Programação de CLP</li>
              <li>Robótica Industrial</li>
              <li>Painéis Elétricos</li>
              <li>Manutenção e Suporte</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/50 font-body">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-glow" />
                (11) 98166-9115
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-glow" />
                contato@hbrautomacaoindustrial.com.br
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-glow mt-0.5" />
                Salto , SP — Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/10 mt-12 pt-8 text-center text-xs text-navy-foreground/30 font-body">
          © {new Date().getFullYear()} HBR Automação Industrial. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
