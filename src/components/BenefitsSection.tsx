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

  const backgroundY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="beneficios"
      ref={sectionRef}
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Dynamic Background Decoration */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] opacity-30"
      />
      <motion.div
        style={{ y: backgroundY }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[180px] opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            {t.benefits.title1} <span className="text-gradient underline decoration-primary/20 underline-offset-8">{t.benefits.titleToday}</span>,{" "}
            {t.benefits.title2} <br className="hidden md:block" /> <span className="text-gradient italic">{t.benefits.titleTomorrow}</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t.benefits.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-10"
        >
          {t.benefits.items.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                className="group"
              >
                <div className="relative p-10 rounded-3xl glass-card glass-card-hover h-full overflow-hidden">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground relative z-10 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10 text-lg font-light">
                    {benefit.description}
                  </p>

                  {/* Geometric decoration */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
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
