import { motion } from "framer-motion";
import { Monitor, Brain, Lightbulb, Check } from "lucide-react";

const solutions = [
  {
    icon: Monitor,
    title: "Automação Comercial & PDV",
    description: "O coração da sua loja. Oferecemos sistemas robustos para frente de caixa, emissão fiscal (NFC-e/NF-e), controle de estoque rigoroso e gestão financeira integrada. Ideal para mercados, varejo e comércio em geral.",
    features: ["Emissão Fiscal Rápida", "Controle de Estoque", "Relatórios Financeiros"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Brain,
    title: "Desenvolvimento de IA Sob Medida",
    description: "Levamos sua empresa para o próximo nível. Desenvolvemos agentes de IA, chatbots avançados para atendimento e algoritmos que automatizam processos complexos do seu escritório ou operação.",
    features: ["Chatbots de Atendimento", "Automação de Processos", "Análise de Dados"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Lightbulb,
    title: "Integração e Consultoria",
    description: "Não sabe por onde começar? Analisamos seu negócio para implementar o sistema de PDV ideal e identificar onde a IA pode trazer mais lucro para sua operação.",
    features: ["Diagnóstico Completo", "Implementação Guiada", "Suporte Contínuo"],
    gradient: "from-cyan-accent/20 to-cyan-accent/5",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Nossas <span className="text-gradient">Tecnologias</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas que se complementam para transformar seu negócio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${solution.gradient}`} />
                
                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
