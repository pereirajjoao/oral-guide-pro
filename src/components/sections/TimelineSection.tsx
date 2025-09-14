import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Calendar,
  ArrowRight,
  Zap,
  Target,
  Medal,
  Camera,
  FileText
} from "lucide-react";

const timelineSteps = [
  {
    id: 1,
    title: "Consulta Inicial",
    description: "Avaliação completa e diagnóstico",
    status: "completed",
    date: "15/11/2024",
    duration: "45 min",
    details: "Exame clínico, radiografias e plano de tratamento"
  },
  {
    id: 2,
    title: "Limpeza Profissional",
    description: "Remoção de tártaro e polimento",
    status: "completed",
    date: "22/11/2024",
    duration: "30 min",
    details: "Profilaxia completa e orientações de higiene"
  },
  {
    id: 3,
    title: "Tratamento de Cárie",
    description: "Restauração do dente 16",
    status: "current",
    date: "29/11/2024",
    duration: "60 min",
    details: "Remoção da cárie e restauração em resina"
  },
  {
    id: 4,
    title: "Controle",
    description: "Verificação e polimento final",
    status: "pending",
    date: "06/12/2024",
    duration: "20 min",
    details: "Ajustes finais e recomendações"
  }
];

export const TimelineSection = () => {
  const completedSteps = timelineSteps.filter(step => step.status === "completed").length;
  const totalSteps = timelineSteps.length;
  const progressPercentage = (completedSteps / totalSteps) * 100;

  return (
    <section className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            Linha do Tempo do Tratamento
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Acompanhe cada etapa do 
            <span className="text-primary"> seu progresso</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Visualize claramente cada fase do seu tratamento, entenda o motivo de cada 
            procedimento e celebre suas conquistas na jornada para um sorriso saudável.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Overview */}
          <div className="lg:col-span-1 space-y-6">
            {/* Progress Card */}
            <Card className="p-6 shadow-gentle border border-border/50">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Target className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Seu Progresso</h3>
                <div className="text-3xl font-bold text-primary mb-1">{Math.round(progressPercentage)}%</div>
                <p className="text-muted-foreground text-sm">
                  {completedSteps} de {totalSteps} etapas concluídas
                </p>
              </div>
              
              <Progress value={progressPercentage} className="mb-4" />
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Próxima consulta:</span>
                  <span className="font-medium text-foreground">29/11/2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duração estimada:</span>
                  <span className="font-medium text-foreground">60 min</span>
                </div>
              </div>
            </Card>

            {/* Achievement */}
            <Card className="p-6 bg-success-light border border-success/20">
              <div className="flex items-center gap-3 mb-4">
                <Medal className="h-6 w-6 text-success" />
                <h4 className="font-bold text-success">Parabéns!</h4>
              </div>
              <p className="text-success text-sm mb-4">
                Você está seguindo o tratamento perfeitamente. Continue assim!
              </p>
              <Button variant="success" size="sm" className="w-full">
                <Zap className="h-4 w-4" />
                Ver Conquistas
              </Button>
            </Card>

            {/* Next Steps */}
            <Card className="p-6 bg-accent border border-accent-warm/20">
              <h4 className="font-bold text-accent-foreground mb-4">Próximos Passos</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-accent-foreground">Não comer 2h antes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-accent-foreground">Escovar bem os dentes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-accent-foreground">Chegar 15min antes</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-6">Histórico do Tratamento</h3>
            
            <div className="space-y-6">
              {timelineSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Connector Line */}
                  {index < timelineSteps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-border" />
                  )}
                  
                  <Card className={`p-6 border transition-all ${
                    step.status === 'completed' 
                      ? 'border-success/20 bg-success-light' 
                      : step.status === 'current'
                        ? 'border-primary/20 bg-primary-light shadow-gentle'
                        : 'border-border/50 bg-muted/50'
                  }`}>
                    <div className="flex gap-4">
                      {/* Status Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        step.status === 'completed'
                          ? 'bg-success text-success-foreground'
                          : step.status === 'current'
                            ? 'bg-primary text-primary-foreground animate-pulse-gentle'
                            : 'bg-muted text-muted-foreground'
                      }`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : step.status === 'current' ? (
                          <Zap className="h-6 w-6" />
                        ) : (
                          <Clock className="h-6 w-6" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className={`font-semibold ${
                              step.status === 'completed' ? 'text-success' :
                              step.status === 'current' ? 'text-primary' :
                              'text-foreground'
                            }`}>
                              {step.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                          </div>
                          <div className="text-right text-sm">
                            <div className={`font-medium ${
                              step.status === 'completed' ? 'text-success' :
                              step.status === 'current' ? 'text-primary' :
                              'text-muted-foreground'
                            }`}>
                              {step.date}
                            </div>
                            <div className="text-muted-foreground">{step.duration}</div>
                          </div>
                        </div>
                        
                        <p className="text-foreground text-sm mb-4">{step.details}</p>
                        
                        {/* Actions */}
                        <div className="flex gap-2">
                          {step.status === 'completed' && (
                            <>
                              <Button variant="outline" size="sm">
                                <Camera className="h-4 w-4" />
                                Ver Fotos
                              </Button>
                              <Button variant="outline" size="sm">
                                <FileText className="h-4 w-4" />
                                Relatório
                              </Button>
                            </>
                          )}
                          {step.status === 'current' && (
                            <Button variant="hero" size="sm">
                              <Calendar className="h-4 w-4" />
                              Reagendar se necessário
                            </Button>
                          )}
                          {step.status === 'pending' && (
                            <Button variant="gentle" size="sm" disabled>
                              <Clock className="h-4 w-4" />
                              Aguardando
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Why This Treatment */}
            <Card className="p-6 mt-8 bg-card border border-border/50">
              <h4 className="font-bold text-foreground mb-4">Por que esse tratamento é feito em etapas?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Tempo de cicatrização</div>
                    <div className="text-muted-foreground">Cada tecido precisa de tempo adequado para se recuperar</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Maior conforto</div>
                    <div className="text-muted-foreground">Sessões menores são mais confortáveis para o paciente</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Melhor resultado</div>
                    <div className="text-muted-foreground">Permite ajustes e garante a qualidade do tratamento</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};