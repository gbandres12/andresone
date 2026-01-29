export const translations = {
  pt: {
    // Header
    nav: {
      benefits: "Benefícios",
      solutions: "Soluções",
      useCases: "Casos de Uso",
      about: "Sobre Nós",
      contactUs: "Fale Conosco",
    },

    // Hero Section
    hero: {
      badge: "Tecnologia para o seu negócio crescer",
      title1: "Do Ponto de Venda à",
      title2: "Inteligência Artificial",
      subtitle: "Tenha controle total com nossos",
      subtitleBold1: "Sistemas de PDV",
      subtitleAnd: "e impulsione seus resultados com",
      subtitleBold2: "Inteligência Artificial",
      ctaDemo: "Agende uma Demonstração",
      ctaSolutions: "Conheça Nossas Soluções",
      support: "Suporte 24/7",
      clients: "+50 Clientes Ativos",
      customAi: "IA Personalizada",
      scroll: "Scroll",
      heroImageAlt: "Astronauta em espaço futurístico",
    },

    // Benefits Section
    benefits: {
      title1: "Gestão eficiente",
      titleToday: "hoje",
      title2: "inovação para",
      titleTomorrow: "amanhã",
      subtitle: "Conectamos as necessidades do seu negócio com soluções tecnológicas de ponta",
      items: [
        {
          title: "Controle Total (PDV)",
          description: "Gerencie estoque, vendas e financeiro com um PDV rápido, seguro e fácil de usar. Chega de furos no caixa.",
        },
        {
          title: "Automação Inteligente (IA)",
          description: "Reduza tarefas manuais e repetitivas com Inteligência Artificial criada sob medida para sua operação.",
        },
        {
          title: "Decisões Estratégicas",
          description: "Una os dados do seu comercial com a análise da IA para vender mais e errar menos.",
        },
      ],
    },

    // Solutions Section
    solutions: {
      title: "Nossas",
      titleHighlight: "Tecnologias",
      subtitle: "Soluções completas que se complementam para transformar seu negócio",
      items: [
        {
          title: "Automação Comercial & PDV",
          description: "O coração da sua loja. Oferecemos sistemas robustos para frente de caixa, emissão fiscal (NFC-e/NF-e), controle de estoque rigoroso e gestão financeira integrada. Ideal para mercados, varejo e comércio em geral.",
          features: ["Emissão Fiscal Rápida", "Controle de Estoque", "Relatórios Financeiros"],
        },
        {
          title: "Desenvolvimento de IA Sob Medida",
          description: "Levamos sua empresa para o próximo nível. Desenvolvemos agentes de IA, chatbots avançados para atendimento e algoritmos que automatizam processos complexos do seu escritório ou operação.",
          features: ["Chatbots de Atendimento", "Automação de Processos", "Análise de Dados"],
        },
        {
          title: "Integração e Consultoria",
          description: "Não sabe por onde começar? Analisamos seu negócio para implementar o sistema de PDV ideal e identificar onde a IA pode trazer mais lucro para sua operação.",
          features: ["Diagnóstico Completo", "Implementação Guiada", "Suporte Contínuo"],
        },
      ],
    },

    // Use Cases Section
    useCases: {
      title: "Transformando negócios",
      titleHighlight: "na prática",
      subtitle: "Veja como ajudamos empresas reais a resolver problemas reais",
      solutionLabel: "Solução Andres Tech:",
      resultLabel: "Resultado:",
      items: [
        {
          scenario: "Minha loja tinha filas e o estoque nunca batia.",
          title: "O Varejo Organizado",
          solution: "Implantação de PDV ágil com controle de estoque em tempo real.",
          result: "Fim das divergências de caixa e atendimento 3x mais rápido.",
        },
        {
          scenario: "Perdíamos muito tempo respondendo perguntas repetitivas no WhatsApp.",
          title: "A Empresa Inovadora",
          solution: "Desenvolvimento de um Agente de IA para triagem e atendimento.",
          result: "Equipe focada em vendas complexas e atendimento disponível 24/7.",
        },
      ],
    },

    // About Section
    about: {
      title: "Tecnologia de",
      titleHighlight: "ponta a ponta",
      paragraph1: "A Andres Tech entende que uma empresa precisa de",
      paragraph1Bold1: "base sólida",
      paragraph1And: "e",
      paragraph1Bold2: "visão de futuro",
      paragraph2: "Por isso, somos especialistas em",
      paragraph2Bold1: "Sistemas de PDV",
      paragraph2Middle: "garantindo que sua operação comercial rode perfeitamente hoje, enquanto desenvolvemos",
      paragraph2Bold2: "soluções de IA",
      paragraph2End: "para garantir sua competitividade amanhã.",
      tagline: "Do caixa da loja ao algoritmo inteligente, somos seu parceiro tecnológico.",
      stats: [
        { label: "Atendimento Ágil", value: "24/7" },
        { label: "Segurança", value: "100%" },
        { label: "Clientes Atendidos", value: "50+" },
      ],
    },

    // Footer
    footer: {
      ctaTitle: "Sua empresa pronta para",
      ctaHighlight1: "vender mais",
      ctaAnd: "e",
      ctaHighlight2: "operar melhor",
      ctaSubtitle: "Fale com nossos consultores e descubra como a Andres Tech pode transformar seu negócio.",
      ctaButton: "Falar com Consultor",
      tagline: "Tecnologia completa para o seu negócio. Do PDV à Inteligência Artificial.",
      quickLinks: "Links Rápidos",
      contact: "Contato",
      location: "Santarém, Pará - Brasil",
      copyright: "Andres Technologies. Todos os direitos reservados.",
    },

    // Simulator Section
    simulator: {
      title: "Simulador de",
      titleHighlight: "Estratégia AI",
      subtitle: "Descubra como a Inteligência Artificial pode revolucionar sua operação em segundos.",
      steps: {
        step1: {
          question: "Qual área da sua empresa você quer revolucionar?",
          options: [
            { id: "sales", label: "Vendas & Marketing", icon: "TrendingUp" },
            { id: "ops", label: "Operações & Logística", icon: "Settings" },
            { id: "service", label: "Atendimento ao Cliente", icon: "MessageSquare" },
            { id: "finance", label: "Financeiro & RH", icon: "BarChart" },
          ]
        },
        step2: {
          question: "Qual é o seu maior desafio atual?",
          options: {
            sales: ["Leads demoram a ser atendidos", "Processo de CRM é muito manual", "Dificuldade em personalizar propostas"],
            ops: ["Controle de estoque ineficiente", "Processos dependem de papel/planilha", "Falta de visibilidade da operação"],
            service: ["Muitas perguntas repetitivas no WhatsApp", "Tempo de espera elevado", "Falta de suporte após o horário comercial"],
            finance: ["Erros na emissão de notas/impostos", "Dificuldade em conciliar o caixa", "Processos de RH lentos (folha/contratação)"],
          }
        },
        step3: {
          processing: "Analisando processos...",
          magic: "Criando arquitetura de IA personalizada...",
        },
        step4: {
          resultPrefix: "Sua empresa pode automatizar até",
          resultSuffix: "da operação nesta área.",
          recommendation: "Recomendação Estratégica",
          cta: "Baixar Diagnóstico no WhatsApp",
          reset: "Novo Diagnóstico",
          solutions: {
            sales: {
              title: "Agente SDR Autônomo 24/7",
              desc: "Implementação de IA que qualifica leads e agenda reuniões automaticamente direto no seu CRM."
            },
            ops: {
              title: "Gestão Preditiva com PDV Inteligente",
              desc: "Integração total do estoque com análise de IA para prever compras e evitar rupturas."
            },
            service: {
              title: "Atendimento Híbrido Avançado",
              desc: "Chatbots que resolvem 80% das dúvidas e escalam para humanos apenas em casos complexos."
            },
            finance: {
              title: "Backoffice Inteligente",
              desc: "Automação total de lançamentos e integração fiscal para erro zero na sua contabilidade."
            }
          }
        }
      }
    }
  },

  en: {
    // Header
    nav: {
      benefits: "Benefits",
      solutions: "Solutions",
      useCases: "Use Cases",
      about: "About Us",
      contactUs: "Contact Us",
    },

    // Hero Section
    hero: {
      badge: "Technology to grow your business",
      title1: "From Point of Sale to",
      title2: "Artificial Intelligence",
      subtitle: "Take full control with our",
      subtitleBold1: "POS Systems",
      subtitleAnd: "and boost your results with",
      subtitleBold2: "Artificial Intelligence",
      ctaDemo: "Schedule a Demo",
      ctaSolutions: "Explore Our Solutions",
      support: "24/7 Support",
      clients: "+50 Active Clients",
      customAi: "Custom AI",
      scroll: "Scroll",
      heroImageAlt: "Astronaut in futuristic space",
    },

    // Benefits Section
    benefits: {
      title1: "Efficient management",
      titleToday: "today",
      title2: "innovation for",
      titleTomorrow: "tomorrow",
      subtitle: "We connect your business needs with cutting-edge technological solutions",
      items: [
        {
          title: "Total Control (POS)",
          description: "Manage inventory, sales and finances with a fast, secure and easy-to-use POS. No more cash discrepancies.",
        },
        {
          title: "Intelligent Automation (AI)",
          description: "Reduce manual and repetitive tasks with Artificial Intelligence tailored to your operation.",
        },
        {
          title: "Strategic Decisions",
          description: "Combine your sales data with AI analysis to sell more and make fewer mistakes.",
        },
      ],
    },

    // Solutions Section
    solutions: {
      title: "Our",
      titleHighlight: "Technologies",
      subtitle: "Complete solutions that complement each other to transform your business",
      items: [
        {
          title: "Commercial Automation & POS",
          description: "The heart of your store. We offer robust systems for checkout, tax issuance (NFC-e/NF-e), rigorous inventory control and integrated financial management. Ideal for markets, retail and commerce in general.",
          features: ["Fast Tax Issuance", "Inventory Control", "Financial Reports"],
        },
        {
          title: "Custom AI Development",
          description: "We take your company to the next level. We develop AI agents, advanced chatbots for customer service and algorithms that automate complex processes in your office or operation.",
          features: ["Customer Service Chatbots", "Process Automation", "Data Analysis"],
        },
        {
          title: "Integration and Consulting",
          description: "Don't know where to start? We analyze your business to implement the ideal POS system and identify where AI can bring more profit to your operation.",
          features: ["Complete Diagnosis", "Guided Implementation", "Continuous Support"],
        },
      ],
    },

    // Use Cases Section
    useCases: {
      title: "Transforming businesses",
      titleHighlight: "in practice",
      subtitle: "See how we help real companies solve real problems",
      solutionLabel: "Andres Tech Solution:",
      resultLabel: "Result:",
      items: [
        {
          scenario: "My store had long lines and inventory never matched.",
          title: "Organized Retail",
          solution: "Implementation of agile POS with real-time inventory control.",
          result: "End of cash discrepancies and 3x faster service.",
        },
        {
          scenario: "We wasted a lot of time answering repetitive questions on WhatsApp.",
          title: "The Innovative Company",
          solution: "Development of an AI Agent for triage and customer service.",
          result: "Team focused on complex sales and 24/7 customer service available.",
        },
      ],
    },

    // About Section
    about: {
      title: "End-to-end",
      titleHighlight: "technology",
      paragraph1: "Andres Tech understands that a company needs a",
      paragraph1Bold1: "solid foundation",
      paragraph1And: "and",
      paragraph1Bold2: "vision for the future",
      paragraph2: "That's why we specialize in",
      paragraph2Bold1: "POS Systems",
      paragraph2Middle: "ensuring your commercial operation runs perfectly today, while developing",
      paragraph2Bold2: "AI solutions",
      paragraph2End: "to ensure your competitiveness tomorrow.",
      tagline: "From the store checkout to intelligent algorithms, we are your technology partner.",
      stats: [
        { label: "Agile Support", value: "24/7" },
        { label: "Security", value: "100%" },
        { label: "Clients Served", value: "50+" },
      ],
    },

    // Footer
    footer: {
      ctaTitle: "Is your company ready to",
      ctaHighlight1: "sell more",
      ctaAnd: "and",
      ctaHighlight2: "operate better",
      ctaSubtitle: "Talk to our consultants and discover how Andres Tech can transform your business.",
      ctaButton: "Talk to Consultant",
      tagline: "Complete technology for your business. From POS to Artificial Intelligence.",
      quickLinks: "Quick Links",
      contact: "Contact",
      location: "Santarém, Pará - Brazil",
      copyright: "Andres Technologies. All rights reserved.",
    },

    // Simulator Section
    simulator: {
      title: "AI Strategy",
      titleHighlight: "Simulator",
      subtitle: "Discover how Artificial Intelligence can revolutionize your operation in seconds.",
      steps: {
        step1: {
          question: "Which area of your business do you want to revolutionize?",
          options: [
            { id: "sales", label: "Sales & Marketing", icon: "TrendingUp" },
            { id: "ops", label: "Operations & Logistics", icon: "Settings" },
            { id: "service", label: "Customer Service", icon: "MessageSquare" },
            { id: "finance", label: "Finance & HR", icon: "BarChart" },
          ]
        },
        step2: {
          question: "What is your biggest current challenge?",
          options: {
            sales: ["Leads take too long to be answered", "CRM process is very manual", "Difficulty in personalizing proposals"],
            ops: ["Inefficient inventory control", "Processes depend on paper/spreadsheets", "Lack of operational visibility"],
            service: ["Many repetitive questions on WhatsApp", "High waiting time", "Lack of after-hours support"],
            finance: ["Errors in issuing invoices/taxes", "Difficulty in reconciling cash", "Slow HR processes (payroll/hiring)"],
          }
        },
        step3: {
          processing: "Analyzing processes...",
          magic: "Creating custom AI architecture...",
        },
        step4: {
          resultPrefix: "Your company can automate up to",
          resultSuffix: "of operations in this area.",
          recommendation: "Strategic Recommendation",
          cta: "Download Diagnosis on WhatsApp",
          reset: "New Diagnosis",
          solutions: {
            sales: {
              title: "24/7 Autonomous SDR Agent",
              desc: "AI implementation that qualifies leads and schedules meetings automatically directly in your CRM."
            },
            ops: {
              title: "Predictive Management with Smart POS",
              desc: "Total inventory integration with AI analysis to predict purchases and avoid stockouts."
            },
            service: {
              title: "Advanced Hybrid Support",
              desc: "Chatbots that solve 80% of questions and scale to humans only for complex cases."
            },
            finance: {
              title: "Intelligent Backoffice",
              desc: "Total automation of entries and tax integration for zero error in your accounting."
            }
          }
        }
      }
    }
  },
};

export type Language = "pt" | "en";
export type Translations = typeof translations.pt;
