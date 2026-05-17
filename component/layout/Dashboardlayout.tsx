import Header from "./header"
import Sidebar from "./sidebar"
import type { ReactNode } from "react"

export default function Dashboardlayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-shell">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}
