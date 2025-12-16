import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo-andres.png";
import { useRef } from "react";

const Footer = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-hero-gradient relative">
        <motion.div
          style={{ scale: backgroundScale, opacity: backgroundOpacity }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
            >
              Sua empresa pronta para{" "}
              <span className="text-gradient">vender mais</span> e{" "}
              <span className="text-gradient">operar melhor</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-10"
            >
              Fale com nossos consultores e descubra como a Andres Tech pode
              transformar seu negócio.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="whatsapp"
                size="xl"
                onClick={() =>
                  window.open(
                    "https://wa.me/5592995096571?text=Olá! Gostaria de falar com um consultor.",
                    "_blank"
                  )
                }
                className="group"
              >
                Falar com Consultor
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={logo}
                alt="Andres Tech"
                className="h-12 w-auto mb-4"
              />
              <p className="text-muted-foreground text-sm">
                Tecnologia completa para o seu negócio. Do PDV à Inteligência
                Artificial.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-foreground font-semibold mb-4">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                {["beneficios", "solucoes", "casos", "sobre"].map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <a
                      href={`#${link}`}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link === "beneficios"
                        ? "Benefícios"
                        : link === "solucoes"
                        ? "Soluções"
                        : link === "casos"
                        ? "Casos de Uso"
                        : "Sobre Nós"}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-foreground font-semibold mb-4">Contato</h4>
              <ul className="space-y-3">
                {[
                  {
                    icon: Phone,
                    text: "(92) 99509-6571",
                    href: "tel:+5592995096571",
                  },
                  {
                    icon: Mail,
                    text: "contato@andrestech.com.br",
                    href: "mailto:contato@andrestech.com.br",
                  },
                  {
                    icon: MapPin,
                    text: "Santarém, Pará - Brasil",
                    href: null,
                  },
                ].map((item, i) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="flex items-center gap-3 text-muted-foreground text-sm"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-foreground transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-8 border-t border-border/50 text-center"
          >
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Andres Technologies. Todos os
              direitos reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
