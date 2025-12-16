import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, Users } from "lucide-react";
import { useRef } from "react";

const stats = [
  { icon: Zap, label: "Atendimento Ágil", value: "24/7" },
  { icon: Shield, label: "Segurança", value: "100%" },
  { icon: Users, label: "Clientes Atendidos", value: "50+" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [-30, 0]);
  const statsX = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Parallax background decoration */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 100]) }}
        className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ x: textX }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
            >
              Tecnologia de{" "}
              <span className="text-gradient">ponta a ponta</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              A Andres Tech entende que uma empresa precisa de{" "}
              <strong className="text-foreground">base sólida</strong> e{" "}
              <strong className="text-foreground">visão de futuro</strong>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              Por isso, somos especialistas em{" "}
              <strong className="text-foreground">Sistemas de PDV</strong>,
              garantindo que sua operação comercial rode perfeitamente hoje,
              enquanto desenvolvemos{" "}
              <strong className="text-foreground">soluções de IA</strong> para
              garantir sua competitividade amanhã.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-foreground font-medium"
            >
              Do caixa da loja ao algoritmo inteligente, somos seu parceiro
              tecnológico.
            </motion.p>
          </motion.div>

          <motion.div
            style={{ x: statsX }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ 
                  x: 10, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-card-gradient border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.4 + index * 0.15,
                  }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                >
                  <stat.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    className="text-3xl font-bold text-foreground"
                  >
                    {stat.value}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 + index * 0.15 }}
                    className="text-muted-foreground"
                  >
                    {stat.label}
                  </motion.p>
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
