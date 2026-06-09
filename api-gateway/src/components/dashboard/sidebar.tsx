"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileCode2, BrainCircuit, Settings, Boxes } from "lucide-react"

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Go File Jobs", icon: FileCode2, active: false },
  { label: "Python AI Engine", icon: BrainCircuit, active: false },
  { label: "Settings", icon: Settings, active: false },
]

export function Sidebar() {
  const [active, setActive] = useState("Overview")

  return (
    <aside className="sticky top-0 hidden h-svh w-60 shrink-0 flex-col border-r border-border bg-sidebar md:flex">
      <div className="flex items-center gap-2 px-6 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Boxes className="h-5 w-5" />
        </div>
        <span className="text-base font-semibold tracking-tight text-sidebar-foreground">Mesh</span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-2" aria-label="Main navigation">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="border-t border-border px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
            AK
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-sidebar-foreground">Ava Khan</p>
            <p className="truncate text-xs text-muted-foreground">Platform Admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
