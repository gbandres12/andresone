import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo-andres.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <section className="py-24 bg-hero-gradient relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Sua empresa pronta para <span className="text-gradient">vender mais</span> e <span className="text-gradient">operar melhor</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Fale com nossos consultores e descubra como a Andres Tech pode transformar seu negócio.
            </p>
            <Button
              variant="whatsapp"
              size="xl"
              onClick={() => window.open("https://wa.me/5592995096571?text=Olá! Gostaria de falar com um consultor.", "_blank")}
              className="group"
            >
              Falar com Consultor
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={logo} alt="Andres Tech" className="h-12 w-auto mb-4" />
              <p className="text-muted-foreground text-sm">
                Tecnologia completa para o seu negócio. Do PDV à Inteligência Artificial.
              </p>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#solucoes" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Soluções
                  </a>
                </li>
                <li>
                  <a href="#casos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Casos de Uso
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Sobre Nós
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+5592995096571" className="hover:text-foreground transition-colors">
                    (92) 99509-6571
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:contato@andrestech.com.br" className="hover:text-foreground transition-colors">
                    contato@andrestech.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span>Manaus, Amazonas - Brasil</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Andres Technologies. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
