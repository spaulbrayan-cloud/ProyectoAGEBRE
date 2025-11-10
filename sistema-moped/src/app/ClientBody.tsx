"use client";

import { AuthProvider } from "@/lib/auth-context";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
