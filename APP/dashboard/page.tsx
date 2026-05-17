import TaskBoard from "@/component/TaskBoard"

export default function DashboardPage() {
  return (
    <main className="page-shell">
      <section className="dashboard-header">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1 className="section-title">Task workflow board</h1>
          <p>Organize tasks by status and move work forward with a single click.</p>
        </div>
      </section>

      <section>
        <TaskBoard />
      </section>
    </main>
  )
}
