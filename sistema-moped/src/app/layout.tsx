import type { Metadata } from "next";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Sistema MOPED",
  description: "Sistema de Monitoreo Pedagógico y Gestión Educativa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
