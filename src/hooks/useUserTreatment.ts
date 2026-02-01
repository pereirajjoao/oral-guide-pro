import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import {
  createConsulta,
  getConsultas,
  getTratamento,
  initTratamento,
  setTratamento,
  savePreConsulta,
} from "@/lib/firestore";
import type { Consulta, TratamentoProgress, TratamentoEtapa } from "@/lib/firestore-types";

const DEFAULT_ETAPAS: TratamentoEtapa[] = [
  {
    id: "1",
    title: "Consulta Inicial",
    description: "Avaliação completa e diagnóstico",
    status: "pending",
    date: "",
    duration: "45 min",
    details: "Exame clínico, radiografias e plano de tratamento",
  },
  {
    id: "2",
    title: "Limpeza Profissional",
    description: "Remoção de tártaro e polimento",
    status: "pending",
    date: "",
    duration: "30 min",
    details: "Profilaxia completa e orientações de higiene",
  },
  {
    id: "3",
    title: "Tratamento",
    description: "Procedimento principal",
    status: "pending",
    date: "",
    duration: "60 min",
    details: "Conforme avaliação do dentista",
  },
  {
    id: "4",
    title: "Controle",
    description: "Verificação e polimento final",
    status: "pending",
    date: "",
    duration: "20 min",
    details: "Ajustes finais e recomendações",
  },
];

const DEFAULT_PROXIMOS_PASSOS = [
  { text: "Não comer 2h antes", completed: false },
  { text: "Escovar bem os dentes", completed: false },
  { text: "Chegar 15min antes", completed: false },
];

export function useConsultas() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: consultas = [], isLoading } = useQuery({
    queryKey: ["consultas", user?.uid],
    queryFn: () => getConsultas(user!.uid),
    enabled: !!user?.uid,
  });

  const createMutation = useMutation({
    mutationFn: (data: Omit<Consulta, "id" | "createdAt" | "userId">) =>
      createConsulta(user!.uid, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["consultas", user?.uid] });
      queryClient.invalidateQueries({ queryKey: ["tratamento", user?.uid] });
    },
  });

  return {
    consultas,
    isLoading,
    createConsulta: createMutation.mutateAsync,
    isCreating: createMutation.isPending,
  };
}

export function useTratamento() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: tratamento, isLoading } = useQuery({
    queryKey: ["tratamento", user?.uid],
    queryFn: () => getTratamento(user!.uid),
    enabled: !!user?.uid,
  });

  const updateMutation = useMutation({
    mutationFn: (data: Partial<TratamentoProgress>) =>
      setTratamento(user!.uid, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tratamento", user?.uid] });
    },
  });

  const initMutation = useMutation({
    mutationFn: (data: TratamentoProgress) => initTratamento(user!.uid, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tratamento", user?.uid] });
    },
  });

  const progress = tratamento
    ? {
        completedSteps: tratamento.completedSteps,
        totalSteps: tratamento.totalSteps,
        percentage: (tratamento.completedSteps / tratamento.totalSteps) * 100,
        historico: tratamento.historico,
        proximosPassos: tratamento.proximosPassos,
        nextConsultaDate: tratamento.nextConsultaDate,
        nextConsultaDuration: tratamento.nextConsultaDuration,
      }
    : null;

  return {
    tratamento,
    progress,
    isLoading,
    updateTratamento: updateMutation.mutateAsync,
    initTratamento: initMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
    defaultEtapas: DEFAULT_ETAPAS,
    defaultProximosPassos: DEFAULT_PROXIMOS_PASSOS,
  };
}

export function useSavePreConsulta() {
  const { user } = useAuth();

  return useMutation({
    mutationFn: (data: { painLevel: number; questionAnswers: Record<string, string | number | boolean> }) =>
      savePreConsulta(user!.uid, data),
  });
}
