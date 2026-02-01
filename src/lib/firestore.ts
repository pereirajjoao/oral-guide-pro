import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import type { Consulta, TratamentoProgress, PreConsultaData } from "./firestore-types";

const CONSULTAS = "consultas";
const TRATAMENTO = "tratamento";
const PRECONSULTA = "preConsulta";

export async function createConsulta(
  userId: string,
  data: Omit<Consulta, "id" | "createdAt" | "userId">
) {
  const consultasRef = collection(db, "users", userId, CONSULTAS);
  const docRef = await addDoc(consultasRef, {
    ...data,
    userId,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getConsultas(userId: string) {
  const consultasRef = collection(db, "users", userId, CONSULTAS);
  const q = query(consultasRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Consulta & { id: string }));
}

export async function getTratamento(userId: string) {
  const tratRef = doc(db, "users", userId, TRATAMENTO, "progress");
  const snapshot = await getDoc(tratRef);
  return snapshot.exists() ? (snapshot.data() as TratamentoProgress) : null;
}

export async function setTratamento(userId: string, data: Partial<TratamentoProgress>) {
  const tratRef = doc(db, "users", userId, TRATAMENTO, "progress");
  await setDoc(tratRef, { ...data, updatedAt: serverTimestamp() }, { merge: true });
}

export async function initTratamento(userId: string, data: TratamentoProgress) {
  const tratRef = doc(db, "users", userId, TRATAMENTO, "progress");
  await setDoc(tratRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function savePreConsulta(userId: string, data: Omit<PreConsultaData, "completedAt">) {
  const preRef = doc(db, "users", userId, PRECONSULTA, "latest");
  await setDoc(preRef, {
    ...data,
    completedAt: serverTimestamp(),
  });
}

export async function getPreConsulta(userId: string) {
  const preRef = doc(db, "users", userId, PRECONSULTA, "latest");
  const snapshot = await getDoc(preRef);
  return snapshot.exists() ? (snapshot.data() as PreConsultaData) : null;
}
