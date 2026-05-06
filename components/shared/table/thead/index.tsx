import { cn } from "@/lib/utils"

type TheadProps = React.ComponentProps<"thead"> & {
  children: React.ReactNode
}

export default function Thead({ children, className, ...props }: TheadProps) {
  return (
    <thead
      className={cn("border-b border-stone-300 bg-taupe-100", className)}
      {...props}
    >
      {children}
    </thead>
  )
}
