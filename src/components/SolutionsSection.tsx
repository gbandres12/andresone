import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor, Brain, Lightbulb, Check } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Monitor, Brain, Lightbulb];
const gradients = [
  "from-primary/20 to-primary/5",
  "from-accent/20 to-accent/5",
  "from-cyan-accent/20 to-cyan-accent/5",
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.5 + i * 0.1,
    },
  }),
};

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="solucoes"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Parallax background decoration */}
      <motion.div
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -150]) }}
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
          >
            {t.solutions.title} <span className="text-gradient">{t.solutions.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t.solutions.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {t.solutions.items.map((solution, index) => {
            const Icon = icons[index];
            const gradient = gradients[index];
            return (
              <motion.div
                key={solution.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="group"
              >
                <div className="relative h-full rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Top gradient bar with animation */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    className={`h-1.5 bg-gradient-to-r ${gradient} origin-left`}
                  />

                  <div className="p-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.2 + index * 0.15,
                      }}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6"
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                      className="text-2xl font-bold mb-4 text-foreground"
                    >
                      {solution.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                      className="text-muted-foreground leading-relaxed mb-6"
                    >
                      {solution.description}
                    </motion.p>

                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          custom={featureIndex}
                          variants={featureVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              delay: 0.6 + featureIndex * 0.1,
                            }}
                            className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"
                          >
                            <Check className="w-3 h-3 text-primary" />
                          </motion.div>
                          <span className="text-sm font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Animated border glow on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl border-2 border-primary/30 pointer-events-none"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
