export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-2">Sistema MOPED</h1>
        <p className="text-sm text-slate-600 mb-4">
          Sistema de Monitoreo Pedagógico y Gestión Educativa.
        </p>
        <p className="text-sm text-slate-700">
          Esta es la base reconstruida del proyecto. Desde aquí iremos integrando
          autenticación, dashboards y fichas según el diseño original.
        </p>
      </div>
    </main>
  );
}
