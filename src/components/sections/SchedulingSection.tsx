import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  User,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Brain,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useAuthDialog } from "@/contexts/AuthDialogContext";
import { useConsultas, useTratamento } from "@/hooks/useUserTreatment";
import { toast } from "sonner";

const steps = [
  { icon: Calendar, title: "Escolha a Data", description: "Selecione o dia que melhor se encaixa na sua agenda" },
  { icon: Clock, title: "Horário Ideal", description: "Escolha o horário disponível" },
  { icon: MessageCircle, title: "Motivo da Consulta", description: "Conte-nos brevemente o que te traz aqui" },
];

const availableTimes = [
  { time: "09:00", available: true, recommended: true },
  { time: "10:30", available: true, recommended: false },
  { time: "14:00", available: true, recommended: true },
  { time: "15:30", available: false, recommended: false },
  { time: "16:00", available: true, recommended: false },
  { time: "17:30", available: true, recommended: true },
];

const MONTHS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

export const SchedulingSection = () => {
  const { user } = useAuth();
  const { openAuthDialog } = useAuthDialog();
  const { createConsulta, isCreating } = useConsultas();
  const { tratamento, initTratamento, defaultEtapas, defaultProximosPassos } = useTratamento();

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [motivo, setMotivo] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const formatDate = (d: Date) => {
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleConfirm = async () => {
    if (!user || !selectedDate || !selectedTime || !motivo.trim()) return;

    try {
      const dateStr = formatDate(selectedDate);
      await createConsulta({
        date: dateStr,
        time: selectedTime,
        motivo: motivo.trim(),
        duration: 45,
        status: "scheduled",
      });

      if (!tratamento) {
        const firstEtapa = { ...defaultEtapas[0], status: "current" as const, date: dateStr };
        const historico = [firstEtapa, ...defaultEtapas.slice(1)];
        await initTratamento({
          completedSteps: 0,
          totalSteps: defaultEtapas.length,
          nextConsultaDate: dateStr,
          nextConsultaDuration: "45 min",
          historico,
          proximosPassos: defaultProximosPassos,
          updatedAt: new Date(),
        });
      }

      toast.success("Consulta agendada com sucesso!");
      setSelectedDate(null);
      setSelectedTime("");
      setMotivo("");
      setCurrentStep(0);
    } catch (err: unknown) {
      console.error("Erro ao agendar:", err);
      const code = err && typeof err === "object" && "code" in err ? (err as { code: string }).code : "";
      const isPermissionDenied = code === "permission-denied";
      toast.error(
        isPermissionDenied
          ? "Permissão negada. Configure as regras do Firestore no Firebase Console."
          : "Erro ao agendar. Tente novamente."
      );
    }
  };

  const canProceed =
    (currentStep === 0 && selectedDate) ||
    (currentStep === 1 && selectedTime) ||
    (currentStep === 2 && motivo.trim().length > 0);

  return (
    <section id="agendamento" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="h-4 w-4" />
            Agendamento Inteligente
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Agende sua consulta em <span className="text-primary"> poucos cliques</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa inteligência artificial analisa sua agenda, preferências e necessidades
            para sugerir o melhor horário e profissional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Como funciona:</h3>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                  index === currentStep
                    ? "bg-primary-light border-2 border-primary/20"
                    : "bg-muted/50 hover:bg-muted"
                }`}
              >
                <div
                  className={`p-3 rounded-xl ${
                    index === currentStep ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground"
                  }`}
                >
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

          <Card className="p-6 shadow-gentle border border-border/50">
            {!user ? (
              <div className="text-center py-8">
                <User className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Entre para agendar</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Faça login ou crie uma conta para agendar sua consulta e acompanhar seu tratamento
                </p>
                <Button variant="hero" onClick={openAuthDialog}>
                  Entrar
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">Agendar Consulta</h3>
                  <span className="text-sm text-muted-foreground">{currentStep + 1}/3</span>
                </div>

                {currentStep === 0 && (
                  <div className="space-y-4">
                    <div className="text-center mb-4">
                      <div className="text-lg font-semibold text-foreground">
                        {MONTHS[today.getMonth()]} {today.getFullYear()}
                      </div>
                      <div className="text-sm text-muted-foreground">Escolha sua data</div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                      {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
                        <div key={day} className="p-2 text-muted-foreground font-medium">
                          {day}
                        </div>
                      ))}
                      {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                        const d = new Date(today.getFullYear(), today.getMonth(), day);
                        const isPast = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                        const isSelected = selectedDate?.getDate() === day;
                        return (
                          <button
                            key={day}
                            onClick={() => !isPast && setSelectedDate(d)}
                            disabled={isPast}
                            className={`p-2 rounded-lg transition-colors ${
                              isPast
                                ? "text-muted-foreground cursor-not-allowed"
                                : isSelected
                                  ? "bg-primary text-primary-foreground"
                                  : "hover:bg-accent text-foreground"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">
                        Horários - {selectedDate && formatDate(selectedDate)}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimes.map((slot, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTime(slot.time)}
                          disabled={!slot.available}
                          className={`p-3 rounded-lg text-sm font-medium transition-all ${
                            !slot.available
                              ? "bg-muted text-muted-foreground cursor-not-allowed"
                              : selectedTime === slot.time
                                ? "bg-primary text-primary-foreground"
                                : "bg-background border border-border hover:bg-accent"
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Motivo da consulta
                      </label>
                      <Textarea
                        placeholder="Ex: dor de dente, limpeza, avaliação..."
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}
                        rows={4}
                        className="resize-none"
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Resumo: {selectedDate && formatDate(selectedDate)} às {selectedTime}
                    </div>
                  </div>
                )}

                <div className="flex gap-3 mt-6">
                  {currentStep > 0 ? (
                    <Button variant="outline" onClick={() => setCurrentStep((s) => s - 1)}>
                      <ArrowLeft className="h-4 w-4" />
                      Voltar
                    </Button>
                  ) : (
                    <div />
                  )}
                  <Button
                    variant="hero"
                    className="flex-1"
                    disabled={!canProceed || isCreating}
                    onClick={() => {
                      if (currentStep < 2) setCurrentStep((s) => s + 1);
                      else handleConfirm();
                    }}
                  >
                    {currentStep < 2 ? (
                      <>
                        Próximo
                        <ArrowRight className="h-4 w-4" />
                      </>
                    ) : isCreating ? (
                      "Agendando..."
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Confirmar Agendamento
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
