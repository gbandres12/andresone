import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    TrendingUp,
    Settings,
    MessageSquare,
    BarChart,
    ArrowRight,
    ArrowLeft,
    Check,
    Sparkles,
    Brain,
    Clock,
    Loader2,
    ChevronRight
} from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

type Step = 1 | 2 | 3 | 4;
type SectorId = "sales" | "ops" | "service" | "finance";

const iconMap = {
    TrendingUp,
    Settings,
    MessageSquare,
    BarChart,
};

const SimulatorSection = () => {
    const { t, language } = useLanguage();
    const [step, setStep] = useState<Step>(1);
    const [selectedSector, setSelectedSector] = useState<SectorId | null>(null);
    const [selectedObstacle, setSelectedObstacle] = useState<string | null>(null);
    const [loadingText, setLoadingText] = useState("");

    const content = t.simulator;

    useEffect(() => {
        if (step === 3) {
            setLoadingText(content.steps.step3.processing);
            const timer1 = setTimeout(() => {
                setLoadingText(content.steps.step3.magic);
            }, 1500);
            const timer2 = setTimeout(() => {
                setStep(4);
            }, 3500);
            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
            };
        }
    }, [step, content]);

    const handleSectorSelect = (id: SectorId) => {
        setSelectedSector(id);
        setStep(2);
    };

    const handleObstacleSelect = (obstacle: string) => {
        setSelectedObstacle(obstacle);
        setStep(3);
    };

    const reset = () => {
        setStep(1);
        setSelectedSector(null);
        setSelectedObstacle(null);
    };

    const containerVariants = {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 1.05, y: -20 },
    };

    const whatsappMessage = language === "pt"
        ? `Olá! Fiz o simulador e o resultado foi ${selectedSector} com automação de 85%. Gostaria de um diagnóstico real.`
        : `Hello! I used the simulator and the result for ${selectedSector} was 85% automation. I'd like a real diagnosis.`;

    return (
        <section id="simulador" className="py-24 relative overflow-hidden bg-background/50">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        {content.title} <span className="text-gradient italic">{content.titleHighlight}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-xl font-light"
                    >
                        {content.subtitle}
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="glass-card rounded-[2.5rem] p-8 md:p-12 min-h-[500px] flex flex-col justify-center relative overflow-hidden">
                        {/* Progress Bar */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5">
                            <motion.div
                                className="h-full bg-primary shadow-[0_0_15px_hsl(var(--primary))]"
                                initial={{ width: "0%" }}
                                animate={{ width: `${(step / 4) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    variants={containerVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="space-y-8"
                                >
                                    <div className="text-center">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">
                                            {content.steps.step1.question}
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
                                            {content.steps.step1.options.map((option) => {
                                                const Icon = iconMap[option.icon as keyof typeof iconMap];
                                                return (
                                                    <motion.button
                                                        key={option.id}
                                                        whileHover={{ scale: 1.02, y: -4 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => handleSectorSelect(option.id as SectorId)}
                                                        className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:bg-primary/10 hover:border-primary/30 transition-all group"
                                                    >
                                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                            <Icon className="w-6 h-6 text-primary" />
                                                        </div>
                                                        <span className="text-lg font-medium">{option.label}</span>
                                                        <ChevronRight className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                                    </motion.button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && selectedSector && (
                                <motion.div
                                    key="step2"
                                    variants={containerVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="space-y-8"
                                >
                                    <button
                                        onClick={() => setStep(1)}
                                        className="flex items-center gap-2 text-primary hover:gap-3 transition-all mb-4 text-sm font-medium"
                                    >
                                        <ArrowLeft size={16} /> {content.steps.step4.reset}
                                    </button>
                                    <div className="text-center">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">
                                            {content.steps.step2.question}
                                        </h3>
                                        <div className="flex flex-col gap-4 max-w-2xl mx-auto text-left">
                                            {content.steps.step2.options[selectedSector].map((obstacle) => (
                                                <motion.button
                                                    key={obstacle}
                                                    whileHover={{ scale: 1.01, x: 8 }}
                                                    whileTap={{ scale: 0.99 }}
                                                    onClick={() => handleObstacleSelect(obstacle)}
                                                    className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:bg-primary/10 hover:border-primary/30 transition-all group"
                                                >
                                                    <div className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary">
                                                        <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100" />
                                                    </div>
                                                    <span className="text-lg">{obstacle}</span>
                                                    <Check className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 text-primary" />
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    variants={containerVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="flex flex-col items-center justify-center space-y-10 py-12"
                                >
                                    <div className="relative">
                                        <motion.div
                                            animate={{
                                                rotate: 360,
                                                scale: [1, 1.1, 1],
                                            }}
                                            transition={{
                                                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                                                scale: { duration: 2, repeat: Infinity }
                                            }}
                                            className="w-32 h-32 rounded-full border-t-2 border-primary border-r-2 border-r-transparent shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Brain size={48} className="text-primary animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-medium text-gradient animate-pulse">
                                            {loadingText}
                                        </h3>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && selectedSector && (
                                <motion.div
                                    key="step4"
                                    variants={containerVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="space-y-10"
                                >
                                    <div className="text-center space-y-6">
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-bold uppercase tracking-widest mb-4">
                                            <Sparkles size={14} /> {content.steps.step4.recommendation}
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold">
                                            {content.steps.step4.resultPrefix} <span className="text-primary text-5xl md:text-7xl block my-4">85%</span> {content.steps.step4.resultSuffix}
                                        </h3>

                                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] max-w-2xl mx-auto shadow-2xl">
                                            <h4 className="text-2xl font-bold text-primary mb-3">
                                                {content.steps.step4.solutions[selectedSector].title}
                                            </h4>
                                            <p className="text-muted-foreground text-lg leading-relaxed mb-0 font-light">
                                                {content.steps.step4.solutions[selectedSector].desc}
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8">
                                            <Button
                                                variant="whatsapp"
                                                size="xl"
                                                className="w-full sm:w-auto px-10 py-8 rounded-2xl group shadow-2xl"
                                                onClick={() => window.open(`https://wa.me/5592995096571?text=${encodeURIComponent(whatsappMessage)}`, "_blank")}
                                            >
                                                {content.steps.step4.cta}
                                                <TrendingUp className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </Button>
                                            <button
                                                onClick={reset}
                                                className="text-muted-foreground hover:text-foreground transition-colors font-medium flex items-center gap-2"
                                            >
                                                <Clock size={16} /> {content.steps.step4.reset}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimulatorSection;
