"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Role = "ADMIN" | "SUPER_ESPECIALISTA" | "ESPECIALISTA" | null;

interface User {
  username: string;
  role: Role;
}

interface AuthContextValue {
  user: User | null;
  login: (username: string, role: Exclude<Role, null>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function login(username: string, role: Exclude<Role, null>) {
    setUser({ username, role });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return ctx;
}
