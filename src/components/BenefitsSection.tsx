import { motion } from "framer-motion";
import { Store, Bot, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Store,
    title: "Controle Total (PDV)",
    description: "Gerencie estoque, vendas e financeiro com um PDV rápido, seguro e fácil de usar. Chega de furos no caixa.",
  },
  {
    icon: Bot,
    title: "Automação Inteligente (IA)",
    description: "Reduza tarefas manuais e repetitivas com Inteligência Artificial criada sob medida para sua operação.",
  },
  {
    icon: TrendingUp,
    title: "Decisões Estratégicas",
    description: "Una os dados do seu comercial com a análise da IA para vender mais e errar menos.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Gestão eficiente <span className="text-gradient">hoje</span>, inovação para <span className="text-gradient">amanhã</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conectamos as necessidades do seu negócio com soluções tecnológicas de ponta
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card-gradient border border-border/50 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
