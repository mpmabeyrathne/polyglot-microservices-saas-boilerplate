import { Sidebar } from "@/components/dashboard/sidebar"
import { MetricCards } from "@/components/dashboard/metric-cards"
import { EventsTable } from "@/components/dashboard/events-table"

export default function DashboardPage() {
  return (
    <div className="flex min-h-svh bg-background">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur">
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-foreground">Overview</h1>
            <p className="text-sm text-muted-foreground">Microservices health & activity</p>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            All systems operational
          </span>
        </header>

        <main className="flex flex-col gap-6 p-6">
          <MetricCards />
          <EventsTable />
        </main>
      </div>
    </div>
  )
}
