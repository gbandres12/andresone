import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "@/assets/logo-andres.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Benefícios", href: "#beneficios" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Casos de Uso", href: "#casos" },
    { label: "Sobre Nós", href: "#sobre" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Andres Tech" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              variant="hero"
              size="default"
              onClick={() => window.open("https://wa.me/5592995096571", "_blank")}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="hero"
              size="default"
              className="w-full mt-2"
              onClick={() => window.open("https://wa.me/5592995096571", "_blank")}
            >
              Fale Conosco
            </Button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
