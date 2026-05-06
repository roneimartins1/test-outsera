"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const LINKS = [
  { href: "/", label: "Dashboard" },
  { href: "/list", label: "List" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="max-w-[50%] min-w-[15%] bg-slate-100">
      <nav
        aria-label="Main navigation"
        className="flex flex-col gap-0.5 px-2 py-4"
      >
        {LINKS.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm hover:bg-gray-100",
                isActive ? "font-bold text-blue-500" : "text-gray-500"
              )}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
