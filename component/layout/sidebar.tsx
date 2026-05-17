import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="dashboard-sidebar">
      <h2>Navigation</h2>
      <nav>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/new">New task</Link>
        <Link href="/">Home</Link>
      </nav>
    </aside>
  )
}
