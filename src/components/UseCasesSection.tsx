import { motion } from "framer-motion";
import { ShoppingCart, MessageSquare, ArrowRight } from "lucide-react";

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
  return (
    <section id="casos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Transformando negócios <span className="text-gradient">na prática</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja como ajudamos empresas reais a resolver problemas reais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="h-full rounded-2xl border border-border/50 bg-card p-8 hover:border-primary/30 transition-all duration-500">
                <div className={`w-12 h-12 rounded-xl ${useCase.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mb-6`}>
                  <useCase.icon className={`w-6 h-6 ${useCase.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">{useCase.title}</h3>

                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground italic">
                      "{useCase.scenario}"
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Solução Andres Tech:</p>
                      <p className="text-foreground">{useCase.solution}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Resultado:</p>
                    <p className="text-primary font-semibold">{useCase.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
