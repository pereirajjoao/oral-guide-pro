import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  Heart, 
  Shield, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Users
} from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="relative">
          <Card className="p-8 md:p-12 bg-gradient-hero text-primary-foreground shadow-floating border-0 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/20 rounded-full" />
              <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/10 rounded-full" />
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/15 rounded-full" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Smartphone className="h-4 w-4" />
                  Baixe agora e comece sua jornada
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Transforme sua experiência odontológica hoje mesmo
                </h2>
                
                <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Junte-se a milhares de pacientes que já descobriram uma forma mais 
                  humana e tranquila de cuidar da saúde bucal.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="floating" size="xl" className="group bg-white text-primary hover:bg-white/90">
                    <Calendar className="h-5 w-5 group-hover:animate-gentle-bounce" />
                    Agendar Primeira Consulta
                  </Button>
                  <Button variant="floating" size="xl" className="group bg-white text-primary hover:bg-white/90">
                    <Heart className="h-5 w-5 group-hover:animate-gentle-bounce" />
                    Conhecer o App
                  </Button>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Dados seguros
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    5 estrelas
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    +10k usuários
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success-foreground" />
                    <span className="text-primary-foreground">Agendamento inteligente com IA</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success-foreground" />
                    <span className="text-primary-foreground">Pré-consulta digital interativa</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success-foreground" />
                    <span className="text-primary-foreground">Área educativa personalizada</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success-foreground" />
                    <span className="text-primary-foreground">Acompanhamento do tratamento</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Secondary CTAs */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="p-6 hover:shadow-gentle transition-all border border-border/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary-light rounded-xl">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Para Pacientes</h3>
                <p className="text-muted-foreground text-sm">Uma experiência mais humana</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Reduza a ansiedade, entenda melhor seus tratamentos e fortaleça 
              a relação com seu dentista através de nossa plataforma.
            </p>
            <Button variant="hero" className="w-full">
              <ArrowRight className="h-4 w-4" />
              Começar como Paciente
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-gentle transition-all border border-border/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary-accent/20 rounded-xl">
                <Shield className="h-6 w-6 text-secondary-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Para Dentistas</h3>
                <p className="text-muted-foreground text-sm">Consultas mais eficientes</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Acesse informações dos pacientes antecipadamente, otimize seu 
              tempo de consulta e melhore a experiência do atendimento.
            </p>
            <Button variant="calm" className="w-full">
              <ArrowRight className="h-4 w-4" />
              Área do Profissional
            </Button>
          </Card>
        </div>

        {/* Final Trust Message */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Lembre-se: Este app é uma ferramenta de apoio</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Todos os questionários e informações ajudam seu dentista a atendê-lo melhor 
              e com mais agilidade. Tudo é sempre revisado pelo profissional antes da sua consulta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};