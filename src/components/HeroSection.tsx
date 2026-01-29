import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Typewriter } from "./ui/typewriter";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const whatsappMessage = language === "pt"
    ? "Olá! Gostaria de agendar uma demonstração."
    : "Hello! I would like to schedule a demonstration.";

  // Animation variants for the "Blocks" reveal
  const blockVariants = {
    hidden: { clipPath: "inset(100% 0 0 0)", y: 50, opacity: 0 },
    visible: (i: number) => ({
      clipPath: "inset(0% 0 0 0)",
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.5 + i * 0.2,
        ease: [0.16, 1, 0.3, 1] as any, // Fixing Framer Motion typing
      },
    }),
  };

  const typewriterWords = language === "pt"
    ? ["Inteligência Artificial", "Sistemas Inteligentes", "Automação Preditiva", "Futuro Digital"]
    : ["Artificial Intelligence", "Smart Systems", "Predictive Automation", "Digital Future"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Perspective Grid Background (The Horizon) */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background z-10" />

        {/* Floor Grid */}
        <div
          className="absolute bottom-0 left-[-50%] w-[200%] h-[100%] origin-bottom transition-transform duration-1000"
          style={{
            perspective: "1000px",
            transform: "rotateX(60deg)",
            background: `
              linear-gradient(to right, hsl(var(--primary)/0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)/0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "grid-move 20s linear infinite"
          }}
        />

        {/* Floating Light Beams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: "200%",
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
              className="absolute h-[1px] w-[500px] bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{ top: `${15 + i * 10}%` }}
            />
          ))}
        </div>
      </div>

      <motion.div
        style={{ y: textY, scale, opacity }}
        className="container mx-auto px-4 relative z-20"
      >
        <motion.div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card border-glow text-primary mb-12 overflow-hidden shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Rocket size={16} />
            </motion.div>
            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Main Heading - Kinetic Block Reveal + Typewriter */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] md:leading-[1] tracking-tighter">
            <motion.span
              custom={0}
              variants={blockVariants}
              initial="hidden"
              animate="visible"
              className="text-foreground block mb-2"
            >
              {t.hero.title1}
            </motion.span>
            <motion.div
              custom={1}
              variants={blockVariants}
              initial="hidden"
              animate="visible"
              className="text-gradient min-h-[1.2em]"
            >
              <Typewriter
                text={typewriterWords}
                speed={70}
                waitTime={2500}
                deleteSpeed={40}
                className="text-gradient"
                cursorChar="_"
                cursorClassName="text-primary font-light"
              />
            </motion.div>
          </h1>

          {/* Subtitle with reveal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 font-light tracking-tight leading-relaxed"
          >
            {t.hero.subtitle}{" "}
            <strong className="text-primary/80 font-medium underline decoration-primary/20 decoration-2 underline-offset-8">
              {t.hero.subtitleBold1}
            </strong>{" "}
            {t.hero.subtitleAnd}{" "}
            <strong className="text-primary/80 font-medium underline decoration-primary/20 decoration-2 underline-offset-8">
              {t.hero.subtitleBold2}
            </strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
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
                className="group w-full sm:w-auto px-10 py-6 text-lg rounded-2xl shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] hover:shadow-primary/40 transition-all border border-primary/20"
              >
                {t.hero.ctaDemo}
                <ArrowRight
                  className="ml-3 group-hover:translate-x-2 transition-transform"
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
                className="w-full sm:w-auto px-10 py-6 text-lg rounded-2xl backdrop-blur-3xl border-white/5 hover:bg-white/10 transition-all"
              >
                {t.hero.ctaSolutions}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hero-specific styles for the 3D Grid */}
      <style>{`
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 0 60px; }
        }
      `}</style>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
