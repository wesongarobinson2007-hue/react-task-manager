export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Task Manager</p>
          <h1>Organize work with a modern React task system.</h1>
          <p>
            Track tasks, move work through stages, and create new items with a clean
            dashboard experience.
          </p>
          <div className="hero-actions">
            <a href="/dashboard" className="button button-primary">
              Open dashboard
            </a>
            <a href="/new" className="button button-secondary">
              Create task
            </a>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <h2>Visual workflow</h2>
          <p>Drag tasks through the board with status controls and keep priorities visible.</p>
        </article>
        <article className="feature-card">
          <h2>Quick creation</h2>
          <p>Build new tasks fast with contextual status, priority and due date support.</p>
        </article>
        <article className="feature-card">
          <h2>Modern UI</h2>
          <p>Responsive layout with a dashboard, sidebar and lightweight styling.</p>
        </article>
      </section>
    </main>
  )
}
