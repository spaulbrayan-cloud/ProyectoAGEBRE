"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Role = "ADMIN" | "SUPER_ESPECIALISTA" | "ESPECIALISTA";

interface DashboardLayoutProps {
  role: Role;
  title: string;
  children: ReactNode;
}

const navByRole: Record<Role, { label: string; href: string }[]> = {
  ADMIN: [
    { label: "Dashboard", href: "/admin" },
    { label: "Configuración", href: "/admin/configuracion" },
  ],
  SUPER_ESPECIALISTA: [{ label: "Dashboard", href: "/super-especialista" }],
  ESPECIALISTA: [
    { label: "Dashboard", href: "/especialista" },
    { label: "Gráficos", href: "/especialista/graficos" },
  ],
};

export function DashboardLayout({ role, title, children }: DashboardLayoutProps) {
  const nav = navByRole[role];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div>
            <h1 className="text-lg font-semibold">Sistema MOPED</h1>
            <p className="text-xs text-slate-500">{title}</p>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Rol: {role.replace("_", " ")}
          </span>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-6">
        <nav className="w-48 shrink-0">
          <ul className="space-y-1 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="flex-1 rounded-2xl border bg-white p-6 shadow-sm">
          {children}
        </main>
      </div>
    </div>
  );
}
