import { motion } from "framer-motion";
import { Zap, Shield, Users } from "lucide-react";

const stats = [
  { icon: Zap, label: "Atendimento Ágil", value: "24/7" },
  { icon: Shield, label: "Segurança", value: "100%" },
  { icon: Users, label: "Clientes Atendidos", value: "50+" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Tecnologia de <span className="text-gradient">ponta a ponta</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Andres Tech entende que uma empresa precisa de <strong className="text-foreground">base sólida</strong> e <strong className="text-foreground">visão de futuro</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Por isso, somos especialistas em <strong className="text-foreground">Sistemas de PDV</strong>, garantindo que sua operação comercial rode perfeitamente hoje, enquanto desenvolvemos <strong className="text-foreground">soluções de IA</strong> para garantir sua competitividade amanhã.
            </p>
            <p className="text-xl text-foreground font-medium">
              Do caixa da loja ao algoritmo inteligente, somos seu parceiro tecnológico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-card-gradient border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
