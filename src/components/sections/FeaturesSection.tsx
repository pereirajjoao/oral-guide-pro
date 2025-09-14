import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  Clipboard, 
  BookOpen, 
  TrendingUp, 
  Stethoscope, 
  Heart,
  Clock,
  Shield,
  Smile
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agendamento Inteligente",
    description: "IA que sugere o melhor horário e profissional baseado no seu perfil e necessidades",
    benefit: "Economia de tempo e melhor adequação",
    color: "primary"
  },
  {
    icon: Clipboard,
    title: "Pré-consulta Digital",
    description: "Anamnese guiada e interativa que prepara você e seu dentista antes da consulta",
    benefit: "Consultas mais eficientes e focadas",
    color: "secondary-accent"
  },
  {
    icon: BookOpen,
    title: "Área Educativa",
    description: "Vídeos, animações 3D e explicações claras sobre procedimentos odontológicos",
    benefit: "Redução da ansiedade e maior confiança",
    color: "success"
  },
  {
    icon: TrendingUp,
    title: "Linha do Tempo",
    description: "Acompanhe cada etapa do seu tratamento com progresso visual e comparativo",
    benefit: "Maior engajamento no tratamento",
    color: "accent-warm"
  },
  {
    icon: Stethoscope,
    title: "Painel do Dentista",
    description: "Acesso antecipado às informações do paciente para consultas mais preparadas",
    benefit: "Atendimento personalizado e eficaz",
    color: "primary"
  },
  {
    icon: Heart,
    title: "Cuidado Humano",
    description: "Interface empática que combate o medo e fortalece a relação dentista-paciente",
    benefit: "Experiência mais acolhedora",
    color: "success"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Smile className="h-4 w-4" />
            Funcionalidades pensadas para você
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Uma nova forma de 
            <span className="text-primary"> cuidar da sua saúde bucal</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada funcionalidade foi desenvolvida para tornar sua jornada odontológica 
            mais tranquila, transparente e humanizada.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-gentle transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-${feature.color}/10 flex-shrink-0`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs bg-accent px-2 py-1 rounded-md">
                    <Clock className="h-3 w-3" />
                    {feature.benefit}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-card p-8 rounded-2xl shadow-gentle border border-border/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-success mb-4">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Compromisso com o cuidado</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Este app é uma ferramenta de apoio, nunca uma substituição
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Todos os questionários e informações ajudam seu dentista a atendê-lo 
                melhor e com mais agilidade. Tudo é revisado pelo profissional antes 
                da sua consulta.
              </p>
              
              <Button variant="hero" size="lg">
                <Heart className="h-5 w-5" />
                Começar Agora
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-success-light rounded-xl">
                <div className="text-2xl font-bold text-success mb-1">100%</div>
                <div className="text-sm text-success">Seguro e confiável</div>
              </div>
              <div className="text-center p-4 bg-primary-light rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-primary">Sempre disponível</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-xl">
                <div className="text-2xl font-bold text-accent-foreground mb-1">Fácil</div>
                <div className="text-sm text-accent-foreground">De usar</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl">
                <div className="text-2xl font-bold text-secondary-foreground mb-1">+5⭐</div>
                <div className="text-sm text-secondary-foreground">Avaliações</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};