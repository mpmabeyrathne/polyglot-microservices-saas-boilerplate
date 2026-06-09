import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Service = "Node" | "Go" | "Python"

type SystemEvent = {
  event: string
  service: Service
  timestamp: string
}

const events: SystemEvent[] = [
  { event: "Incoming request authenticated", service: "Node", timestamp: "2026-06-09 14:32:08" },
  { event: "File batch #4821 processed", service: "Go", timestamp: "2026-06-09 14:31:55" },
  { event: "Inference job completed (sentiment)", service: "Python", timestamp: "2026-06-09 14:30:41" },
  { event: "Rate limit applied to /v1/upload", service: "Node", timestamp: "2026-06-09 14:29:17" },
  { event: "Worker pool scaled to 8 instances", service: "Go", timestamp: "2026-06-09 14:27:02" },
  { event: "Model weights reloaded from cache", service: "Python", timestamp: "2026-06-09 14:25:48" },
  { event: "WebSocket session established", service: "Node", timestamp: "2026-06-09 14:24:30" },
]

const badgeStyles: Record<Service, string> = {
  Node: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Go: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Python: "bg-amber-500/10 text-amber-400 border-amber-500/20",
}

function ServiceBadge({ service }: { service: Service }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        badgeStyles[service],
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {service}
    </span>
  )
}

export function EventsTable() {
  return (
    <Card className="bg-card p-0">
      <div className="flex flex-col gap-1 border-b border-border px-6 py-4">
        <h2 className="text-base font-semibold text-foreground">Recent System Events</h2>
        <p className="text-sm text-muted-foreground">Live activity across all microservices</p>
      </div>
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="min-w-[240px]">Event</TableHead>
              <TableHead className="min-w-[140px]">Processed By</TableHead>
              <TableHead className="min-w-[180px] text-right">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((e, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium text-foreground">{e.event}</TableCell>
                <TableCell>
                  <ServiceBadge service={e.service} />
                </TableCell>
                <TableCell className="text-right font-mono text-sm text-muted-foreground">
                  {e.timestamp}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
