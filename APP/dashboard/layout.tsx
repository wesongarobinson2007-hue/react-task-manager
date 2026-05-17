import Dashboardlayout from "@/component/layout/Dashboardlayout"
import type { ReactNode } from "react"

export default function DashboardRouteLayout({ children }: { children: ReactNode }) {
  return <Dashboardlayout>{children}</Dashboardlayout>
}
