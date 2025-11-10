import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function EspecialistaDashboardPage() {
  return (
    <DashboardLayout role="ESPECIALISTA" title="Panel del Especialista">
      <p className="text-sm text-slate-700">
        Aquí el especialista podrá registrar fichas, ver IEs asignadas y
        consultar sus propios gráficos estadísticos.
      </p>
    </DashboardLayout>
  );
}
