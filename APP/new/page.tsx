import TaskForm from "@/component/TaskForm"

export default function NewTaskPage() {
  return (
    <main className="page-shell">
      <section className="dashboard-header">
        <div>
          <p className="eyebrow">New task</p>
          <h1 className="section-title">Create a new task</h1>
          <p>Capture details, set priority, and add a due date for your next action item.</p>
        </div>
      </section>

      <section className="form-shell">
        <TaskForm />
      </section>
    </main>
  )
}
