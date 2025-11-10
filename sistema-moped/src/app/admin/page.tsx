import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function AdminDashboardPage() {
  return (
    <DashboardLayout role="ADMIN" title="Panel de Administración">
      <p className="text-sm text-slate-700">
        Desde aquí el administrador podrá gestionar usuarios, revisar fichas,
        configurar momentos y acceder al repositorio.
      </p>
    </DashboardLayout>
  );
}
