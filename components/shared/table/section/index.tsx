import { cn } from "@/lib/utils"

type SectionProps = React.ComponentProps<"section"> & {
  children: React.ReactNode
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col gap-2 rounded border border-gray-100 bg-white p-4 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
