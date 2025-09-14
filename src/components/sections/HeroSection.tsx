import { Button } from "@/components/ui/button";
import { Calendar, Shield, Users, Heart } from "lucide-react";
import heroImage from "@/assets/dental-hero.jpg";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-success-light text-success px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Shield className="h-4 w-4" />
            Seu cuidado odontológico, mais humano e tranquilo
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Transforme sua experiência 
            <span className="text-primary"> odontológica</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
            Nosso aplicativo conecta você ao seu dentista de forma mais próxima e 
            tranquilizadora. Agende consultas, prepare-se melhor e acompanhe seu 
            tratamento com total transparência.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button variant="hero" size="xl" className="group">
              <Calendar className="h-5 w-5 group-hover:animate-gentle-bounce" />
              Agendar Primeira Consulta
            </Button>
            <Button variant="floating" size="xl">
              <Heart className="h-5 w-5" />
              Conhecer o App
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Pacientes mais tranquilos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">+1000</div>
              <div className="text-sm text-muted-foreground">Consultas agendadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">5⭐</div>
              <div className="text-sm text-muted-foreground">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-gentle-bounce">
        <div className="bg-card p-4 rounded-2xl shadow-floating border border-border/50">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <div className="text-sm font-medium text-foreground">Maria está agendando</div>
              <div className="text-xs text-muted-foreground">há 2 minutos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};