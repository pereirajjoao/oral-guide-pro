import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { 
  Clipboard, 
  Heart, 
  Clock, 
  FileText,
  Camera,
  Mic,
  Shield,
  CheckCircle2,
  ArrowRight,
  User
} from "lucide-react";
import { useState, useEffect  } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useAuthDialog } from "@/contexts/AuthDialogContext";
import { useSavePreConsulta } from "@/hooks/useUserTreatment";
import { toast } from "sonner";

const questions = [
  {
    id: 1,
    title: "Como você se sente hoje?",
    type: "pain-scale",
    description: "Nos ajude a entender seu nível de desconforto",
    current: true
  },
  {
    id: 2,
    title: "Há quanto tempo você tem esse problema?",
    type: "duration",
    description: "Tempo é importante para o diagnóstico",
    current: false
  },
  {
    id: 3,
    title: "Você tem alguma alergia ou fobia?",
    type: "allergies",
    description: "Para garantir um atendimento seguro",
    current: false
  }
];

export const PreConsultationSection = () => {
  const { user } = useAuth();
  const { openAuthDialog } = useAuthDialog();
  const savePreConsulta = useSavePreConsulta();

  const [painLevel, setPainLevel] = useState([3]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string | number | boolean>>({});

  const totalQuestions = questions.length;
  const q = questions.find((qq) => qq.id === currentQuestion) ?? questions[0];

  const setAnswer = (key: string, value: string | number | boolean) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    setAnswer("painLevel", painLevel[0]);
  }, [painLevel[0]]);

  useEffect(() => {
    const saved = answers.painLevel;
    if (typeof saved === "number") {
      setPainLevel([saved]);
    }
  }, [currentQuestion]);

  const handleSubmit = async () => {
    if (!user) return;
    try {
      await savePreConsulta.mutateAsync({
        painLevel: painLevel[0],
        questionAnswers: { ...answers, painLevel: painLevel[0] },
      });
      toast.success("Pré-consulta enviada! Seu dentista já foi informado.");
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    }
  };

  const handleNextOrSubmit = async () => {
    if (!user) {
      openAuthDialog();
      return;
    }

    if (currentQuestion < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
      return;
    }

    await handleSubmit();
  };

  const handleSkip = () => {
    if (currentQuestion < totalQuestions) setCurrentQuestion((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentQuestion((prev) => Math.max(1, prev - 1));
  };
  


  

  return (
    <section className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clipboard className="h-4 w-4" />
            Pré-consulta Digital
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Prepare-se melhor para 
            <span className="text-primary"> sua consulta</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma anamnese guiada e interativa que ajuda seu dentista a conhecê-lo 
            melhor antes mesmo de você chegar ao consultório.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Por que isso é importante?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft border border-border/50">
                <div className="p-2 bg-primary-light rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Consultas mais rápidas</h4>
                  <p className="text-muted-foreground text-sm">
                    Seu dentista já conhece seu histórico e pode focar no que realmente importa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft border border-border/50">
                <div className="p-2 bg-success-light rounded-lg">
                  <Heart className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Atendimento personalizado</h4>
                  <p className="text-muted-foreground text-sm">
                    Cada paciente é único, e seu tratamento também será
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft border border-border/50">
                <div className="p-2 bg-accent rounded-lg">
                  <Shield className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Segurança garantida</h4>
                  <p className="text-muted-foreground text-sm">
                    Identificamos alergias e fobias para um atendimento mais seguro
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-light p-6 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-semibold text-primary">Lembre-se</span>
              </div>
              <p className="text-primary text-sm leading-relaxed">
                Este questionário ajuda seu dentista a te atender melhor e com mais agilidade. 
                Todos os dados serão revisados pelo dentista antes da sua consulta.
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <Card className="p-6 shadow-gentle border border-border/50">
            {!user ? (
              <div className="text-center py-8">
                <User className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Entre para continuar</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Faça login para preencher a pré-consulta e ajudar seu dentista
                </p>
                <Button variant="hero" onClick={openAuthDialog}>
                  Entrar
                </Button>
              </div>
            ) : (
            <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary">Progresso</span>
                <span className="text-sm text-muted-foreground">{currentQuestion}/3</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary rounded-full h-2 transition-all duration-300"
                  style={{ width: `${(currentQuestion / 3) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-6">
              {/* Current Question */}
              <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">{q.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{q.description}</p>
              </div>

              {q.type === "pain-scale" && (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{painLevel[0]}/10</div>
                    <div className="text-sm text-muted-foreground">
                      {painLevel[0] <= 3 ? "Sem dor ou desconforto leve" :
                      painLevel[0] <= 6 ? "Desconforto moderado" :
                      "Dor intensa"}
                    </div>
                  </div>

                  <Slider
                    value={painLevel}
                    onValueChange={(v) => {
                      setPainLevel(v);
                      setAnswer("painLevel", v[0]);
                    }}
                    max={10}
                    min={0}
                    step={1}
                    className="w-full"
                  />

                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>😊 Sem dor</span>
                    <span>😐 Moderada</span>
                    <span>😣 Intensa</span>
                  </div>
                </div>
              )}

              {q.type === "duration" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tempo do problema</label>
                  <input
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Ex: 2 semanas, 3 meses"
                    value={(answers.duration as string) ?? ""}
                    onChange={(e) => setAnswer("duration", e.target.value)}
                  />
                </div>
              )}

              {q.type === "allergies" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Alergias ou fobias</label>
                  <textarea
                    className="min-h-[96px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Ex: alergia a algum remédio, medo de agulha"
                    value={(answers.allergies as string) ?? ""}
                    onChange={(e) => setAnswer("allergies", e.target.value)}
                  />
                </div>
              )}


              {/* Additional Input Options */}
              <div className="grid grid-cols-3 gap-3">
                <Button variant="gentle" size="sm" className="flex-col h-16">
                  <Camera className="h-5 w-5 mb-1" />
                  <span className="text-xs">Foto</span>
                </Button>
                <Button variant="gentle" size="sm" className="flex-col h-16">
                  <Mic className="h-5 w-5 mb-1" />
                  <span className="text-xs">Áudio</span>
                </Button>
                <Button variant="gentle" size="sm" className="flex-col h-16">
                  <FileText className="h-5 w-5 mb-1" />
                  <span className="text-xs">Texto</span>
                </Button>
              </div>

              {/* Navigation */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={handleBack}
                  disabled={currentQuestion === 1}
                >
                  Voltar
                </Button>

                <Button variant="outline" className="flex-1" onClick={handleSkip}>
                  Pular Pergunta
                </Button>

                <Button
                  variant="hero"
                  className="flex-1"
                  onClick={handleNextOrSubmit}
                  disabled={savePreConsulta.isPending}
                >
                  <ArrowRight className="h-4 w-4" />
                  {currentQuestion >= totalQuestions ? "Enviar" : "Próxima"}
                </Button>
              </div>



              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-4 border-t border-border/50">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Suas informações são seguras e confidenciais
              </div>
            </div>
            </>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};