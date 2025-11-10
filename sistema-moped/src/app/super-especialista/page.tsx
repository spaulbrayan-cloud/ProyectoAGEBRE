import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function SuperEspecialistaDashboardPage() {
  return (
    <DashboardLayout role="SUPER_ESPECIALISTA" title="Panel del Super Especialista">
      <p className="text-sm text-slate-700">
        Aquí se mostrarán los gráficos globales con filtros por especialista,
        nivel educativo, momento y red educativa.
      </p>
    </DashboardLayout>
  );
}
