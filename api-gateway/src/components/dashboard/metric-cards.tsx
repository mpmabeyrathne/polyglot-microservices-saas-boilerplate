import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Metric = {
  service: string
  status: string
  detail: string
  uptime: string
}

const metrics: Metric[] = [
  {
    service: "Node.js Gateway",
    status: "12ms",
    detail: "Routing 1.2k req/s · p99 latency healthy",
    uptime: "99.98%",
  },
  {
    service: "Go Worker",
    status: "Active",
    detail: "8 workers online · 0 jobs queued",
    uptime: "99.95%",
  },
  {
    service: "Python AI Engine",
    status: "Idle",
    detail: "Model warm · awaiting inference jobs",
    uptime: "99.90%",
  },
]

export function MetricCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((m) => (
        <Card key={m.service} className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{m.service}</CardTitle>
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Healthy
            </span>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-2xl font-semibold text-foreground">{m.status}</span>
              <span className="text-xs text-muted-foreground">uptime {m.uptime}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{m.detail}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
