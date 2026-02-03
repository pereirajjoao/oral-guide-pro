import { createContext, useContext, useState, type ReactNode } from "react";

type AuthDialogContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openAuthDialog: () => void;
};

const AuthDialogContext = createContext<AuthDialogContextType | null>(null);

export const AuthDialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <AuthDialogContext.Provider
      value={{ open, setOpen, openAuthDialog: () => setOpen(true) }}
    >
      {children}
    </AuthDialogContext.Provider>
  );
};

export const useAuthDialog = () => {
  const ctx = useContext(AuthDialogContext);
  if (!ctx) throw new Error("useAuthDialog must be used within AuthDialogProvider");
  return ctx;
};
