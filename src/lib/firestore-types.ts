import type { Timestamp } from "firebase/firestore";

export type ConsultaStatus = "scheduled" | "completed" | "cancelled";

export type TratamentoEtapaStatus = "completed" | "current" | "pending";

export interface Consulta {
  id?: string;
  date: string; // ISO or "DD/MM/YYYY"
  time: string;
  motivo: string; // reason for the consultation
  duration: number; // minutes
  status: ConsultaStatus;
  createdAt: Timestamp | Date;
  userId: string;
}

export interface TratamentoEtapa {
  id: string;
  title: string;
  description: string;
  status: TratamentoEtapaStatus;
  date: string;
  duration: string;
  details: string;
}

export interface ProximoPasso {
  text: string;
  completed: boolean;
}

export interface TratamentoProgress {
  completedSteps: number;
  totalSteps: number;
  nextConsultaDate?: string;
  nextConsultaDuration?: string;
  historico: TratamentoEtapa[];
  proximosPassos: ProximoPasso[];
  updatedAt: Timestamp | Date;
}

export interface PreConsultaData {
  painLevel: number;
  questionAnswers: Record<string, string | number | boolean>;
  completedAt: Timestamp | Date;
}
