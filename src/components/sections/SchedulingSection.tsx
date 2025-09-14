import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  User, 
  MessageCircle, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: Calendar,
    title: "Escolha a Data",
    description: "Selecione o dia que melhor se encaixa na sua agenda",
    isActive: true
  },
  {
    icon: Clock,
    title: "Horário Ideal",
    description: "Nossa IA sugere os melhores horários para você",
    isActive: false
  },
  {
    icon: User,
    title: "Profissional",
    description: "Escolha o dentista mais adequado ao seu perfil",
    isActive: false
  },
  {
    icon: MessageCircle,
    title: "Motivo da Consulta",
    description: "Conte-nos brevemente o que te traz aqui",
    isActive: false
  }
];

const availableTimes = [
  { time: "09:00", available: true, recommended: true },
  { time: "10:30", available: true, recommended: false },
  { time: "14:00", available: true, recommended: true },
  { time: "15:30", available: false, recommended: false },
  { time: "16:00", available: true, recommended: false },
  { time: "17:30", available: true, recommended: true }
];

export const SchedulingSection = () => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section id="agendamento" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="h-4 w-4" />
            Agendamento Inteligente
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Agende sua consulta em 
            <span className="text-primary"> poucos cliques</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa inteligência artificial analisa sua agenda, preferências e necessidades 
            para sugerir o melhor horário e profissional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps Process */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Como funciona:</h3>
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                  index === currentStep 
                    ? 'bg-primary-light border-2 border-primary/20' 
                    : 'bg-muted/50 hover:bg-muted'
                }`}
              >
                <div className={`p-3 rounded-xl ${
                  index === currentStep ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground'
                }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index === currentStep && (
                  <div className="text-primary animate-pulse-gentle">
                    <Sparkles className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}

            <div className="bg-success-light p-4 rounded-xl border border-success/20">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <div>
                  <div className="font-medium text-success">Confirmação Instantânea</div>
                  <div className="text-sm text-success/80">Receba confirmação por SMS e email</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <Card className="p-6 shadow-gentle border border-border/50">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Demonstração Interativa</h3>
              <p className="text-muted-foreground text-sm">
                Veja como é simples agendar sua consulta
              </p>
            </div>

            {/* Calendar Preview */}
            <div className="bg-muted/50 p-4 rounded-xl mb-6">
              <div className="text-center mb-4">
                <div className="text-lg font-semibold text-foreground">Dezembro 2024</div>
                <div className="text-sm text-muted-foreground">Escolha sua data preferida</div>
              </div>
              
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                  <div key={day} className="p-2 text-muted-foreground font-medium">{day}</div>
                ))}
                {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                  <button 
                    key={day}
                    className={`p-2 rounded-lg transition-colors ${
                      day === 15 
                        ? 'bg-primary text-primary-foreground' 
                        : day > 10 && day < 25 
                          ? 'hover:bg-accent text-foreground' 
                          : 'text-muted-foreground cursor-not-allowed'
                    }`}
                    disabled={day <= 10 || day >= 25}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Available Times */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">Horários Disponíveis - 15/12</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      !slot.available 
                        ? 'bg-muted text-muted-foreground cursor-not-allowed'
                        : selectedTime === slot.time
                          ? 'bg-primary text-primary-foreground'
                          : slot.recommended
                            ? 'bg-success-light text-success border-2 border-success/20 hover:bg-success hover:text-success-foreground'
                            : 'bg-background border border-border hover:bg-accent'
                    }`}
                  >
                    {slot.time}
                    {slot.recommended && slot.available && (
                      <div className="text-xs mt-1 flex items-center justify-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        IA
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full" 
              disabled={!selectedTime}
            >
              <ArrowRight className="h-5 w-5" />
              Continuar Agendamento
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};