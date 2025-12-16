import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, MessageSquare, ArrowRight } from "lucide-react";
import { useRef } from "react";

const useCases = [
  {
    icon: ShoppingCart,
    scenario: "Minha loja tinha filas e o estoque nunca batia.",
    title: "O Varejo Organizado",
    solution: "Implantação de PDV ágil com controle de estoque em tempo real.",
    result: "Fim das divergências de caixa e atendimento 3x mais rápido.",
    color: "primary",
  },
  {
    icon: MessageSquare,
    scenario: "Perdíamos muito tempo respondendo perguntas repetitivas no WhatsApp.",
    title: "A Empresa Inovadora",
    solution: "Desenvolvimento de um Agente de IA para triagem e atendimento.",
    result: "Equipe focada em vendas complexas e atendimento disponível 24/7.",
    color: "accent",
  },
];

const UseCasesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="casos" ref={sectionRef} className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        style={{ x: backgroundX }}
        className="absolute inset-0 opacity-[0.02]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
          >
            Transformando negócios{" "}
            <span className="text-gradient">na prática</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Veja como ajudamos empresas reais a resolver problemas reais
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, x: index === 0 ? -80 : 80, rotateY: index === 0 ? 10 : -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <div className="h-full rounded-2xl border border-border/50 bg-card p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Animated icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    delay: 0.3 + index * 0.2 
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-12 h-12 rounded-xl ${
                    useCase.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                  } flex items-center justify-center mb-6`}
                >
                  <useCase.icon
                    className={`w-6 h-6 ${
                      useCase.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className="text-xl font-bold text-foreground mb-4"
                >
                  {useCase.title}
                </motion.h3>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    className="bg-muted/50 rounded-lg p-4"
                  >
                    <p className="text-sm text-muted-foreground italic">
                      "{useCase.scenario}"
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        Solução Andres Tech:
                      </p>
                      <p className="text-foreground">{useCase.solution}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                    className="pt-4 border-t border-border"
                  >
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      Resultado:
                    </p>
                    <motion.p
                      initial={{ scale: 0.95 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="text-primary font-semibold"
                    >
                      {useCase.result}
                    </motion.p>
                  </motion.div>
                </div>

                {/* Decorative corner element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
