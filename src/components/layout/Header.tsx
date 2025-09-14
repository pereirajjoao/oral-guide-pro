import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-xl shadow-soft">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">DentalCare+</h1>
              <p className="text-sm text-muted-foreground">Cuidado que tranquiliza</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#agendamento" className="text-foreground hover:text-primary transition-colors">
              Agendamento
            </a>
            <a href="#educativo" className="text-foreground hover:text-primary transition-colors">
              Área Educativa
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="gentle" size="sm">
              Área do Dentista
            </Button>
            <Button variant="hero" size="sm">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 animate-slide-up">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors py-2">
                Início
              </a>
              <a href="#agendamento" className="text-foreground hover:text-primary transition-colors py-2">
                Agendamento
              </a>
              <a href="#educativo" className="text-foreground hover:text-primary transition-colors py-2">
                Área Educativa
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors py-2">
                Sobre
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="gentle" size="sm">
                  Área do Dentista
                </Button>
                <Button variant="hero" size="sm">
                  Agendar Consulta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};