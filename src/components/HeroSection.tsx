import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-glow/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: "-1.5s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-8"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Tecnologia para o seu negócio crescer</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Do Ponto de Venda à</span>
            <br />
            <span className="text-gradient">Inteligência Artificial</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Tenha controle total com nossos <strong className="text-foreground">Sistemas de PDV</strong> e impulsione 
            seus resultados com soluções personalizadas de <strong className="text-foreground">Inteligência Artificial</strong>. 
            A Andres Tech une gestão robusta com inovação.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="whatsapp"
              size="xl"
              onClick={() => window.open("https://wa.me/5592995096571?text=Olá! Gostaria de agendar uma demonstração.", "_blank")}
              className="group"
            >
              Agende uma Demonstração
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossas Soluções
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
