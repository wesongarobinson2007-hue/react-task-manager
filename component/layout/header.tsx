import Link from "next/link"

export default function Header() {
  return (
    <header className="dashboard-header">
      <div>
        <p className="eyebrow">Workspace</p>
        <h1 className="section-title">Project task board</h1>
        <p>Move work forward, manage priorities, and keep your team aligned.</p>
      </div>
      <Link href="/new" className="button button-primary">
        Add task
      </Link>
    </header>
  )
}
