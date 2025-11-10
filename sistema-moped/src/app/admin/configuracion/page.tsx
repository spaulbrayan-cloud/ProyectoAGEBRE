import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function AdminConfigPage() {
  return (
    <DashboardLayout role="ADMIN" title="Configuración del Sistema">
      <p className="text-sm text-slate-700">
        Pantalla placeholder para la configuración de momentos, año actual y
        otras opciones globales del sistema MOPED.
      </p>
    </DashboardLayout>
  );
}
