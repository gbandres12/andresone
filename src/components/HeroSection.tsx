import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";
import heroImage from "@/assets/hero-astronaut.png";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const whatsappMessage = language === "pt"
    ? "Olá! Gostaria de agendar uma demonstração."
    : "Hello! I would like to schedule a demonstration.";

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-[110vh] flex items-center justify-center overflow-hidden py-20 md:py-0"
    >
      {/* Mesh Background */}
      <div className="hero-mesh opacity-60" />

      {/* Background Image with Parallax & Mask */}
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <img
          src={heroImage}
          alt={t.hero.heroImageAlt}
          className="w-full h-full object-cover object-center opacity-30 md:opacity-40 mix-blend-screen"
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, -150, 0],
              x: [0, Math.random() * 80 - 40, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 15px hsl(var(--primary))",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: textY }}
        className="container mx-auto px-4 relative z-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 md:px-6 md:py-2 rounded-full glass-card border-glow text-primary mb-6 md:mb-10 overflow-hidden"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <Rocket size={16} className="md:w-5 md:h-5" />
            </motion.div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              {t.hero.badge}
            </span>
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles size={14} className="md:w-[18px] md:h-[18px]" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold mb-6 md:mb-10 leading-[1] md:leading-[0.9] tracking-tighter"
          >
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-foreground block"
            >
              {t.hero.title1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gradient block italic"
            >
              {t.hero.title2}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-base sm:text-xl lg:text-3xl text-foreground/70 max-w-4xl mx-auto mb-10 md:mb-16 leading-relaxed font-light tracking-tight"
          >
            {t.hero.subtitle}{" "}
            <strong className="text-foreground font-medium underline decoration-primary/30 decoration-2 underline-offset-8">
              {t.hero.subtitleBold1}
            </strong>{" "}
            {t.hero.subtitleAnd}{" "}
            <strong className="text-foreground font-medium underline decoration-accent/30 decoration-2 underline-offset-8">
              {t.hero.subtitleBold2}
            </strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="whatsapp"
                size="xl"
                onClick={() =>
                  window.open(
                    `https://wa.me/5592995096571?text=${encodeURIComponent(whatsappMessage)}`,
                    "_blank"
                  )
                }
                className="group w-full sm:w-auto px-6 py-6 md:px-10 md:py-8 text-lg md:text-xl rounded-xl md:rounded-2xl shadow-[0_0_40px_-10px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_-10px_rgba(34,197,94,0.6)] transition-all"
              >
                {t.hero.ctaDemo}
                <ArrowRight
                  className="ml-2 group-hover:translate-x-2 transition-transform"
                  size={20}
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="glass"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("solucoes")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl rounded-xl md:rounded-2xl backdrop-blur-2xl border-white/20 hover:bg-white/5 transition-colors"
              >
                {t.hero.ctaSolutions}
              </Button>
            </motion.div>
          </motion.div>

          {/* Improved Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-12 md:mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-muted-foreground/50 uppercase text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em]"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-emerald-500 rounded-full glow-purple shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <span>{t.hero.support}</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
              <span>{t.hero.clients}</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-accent rounded-full shadow-[0_0_10px_hsl(var(--accent)/0.5)]" />
              <span>{t.hero.customAi}</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Better Scroll indicator - hidden on very small height screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ opacity }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-primary/60 to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 80] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-full h-1/2 bg-white"
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
