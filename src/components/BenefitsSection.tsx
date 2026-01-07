import { motion, useScroll, useTransform } from "framer-motion";
import { Store, Bot, TrendingUp } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Store, Bot, TrendingUp];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="beneficios"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Parallax background decoration */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {t.benefits.title1} <span className="text-gradient">{t.benefits.titleToday}</span>,{" "}
            {t.benefits.title2} <span className="text-gradient">{t.benefits.titleTomorrow}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t.benefits.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {t.benefits.items.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-card-gradient border border-border/50 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"
                  />

                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 relative z-10"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground relative z-10">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {benefit.description}
                  </p>

                  {/* Corner decoration */}
                  <motion.div
                    initial={{ opacity: 0, x: 20, y: 20 }}
                    whileInView={{ opacity: 0.1, x: 0, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
