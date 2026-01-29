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

  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -250]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);

  return (
    <section
      id="solucoes"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background Orbs */}
      <motion.div
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -300]) }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            {t.solutions.title} <span className="text-gradient italic">{t.solutions.titleHighlight}</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t.solutions.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
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
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group"
              >
                <div className="relative h-full rounded-[2.5rem] p-10 glass-card glass-card-hover overflow-hidden transition-all duration-700">
                  {/* Glowing top line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                    >
                      <Icon className="w-10 h-10 text-primary" />
                    </motion.div>

                    <h3 className="text-3xl font-bold mb-6 text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">
                      {solution.title}
                    </h3>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-light">
                      {solution.description}
                    </p>

                    <div className="space-y-4">
                      {solution.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          custom={featureIndex}
                          variants={featureVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="flex items-center gap-4 py-2 px-4 rounded-xl bg-white/5 opacity-80 hover:opacity-100 hover:bg-white/10 transition-all cursor-default"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-sm font-medium tracking-wide">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Deep background glow on hover */}
                  <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
