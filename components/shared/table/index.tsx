import { cn } from "@/lib/utils"

type TableProps = React.ComponentProps<"table"> & {
  children: React.ReactNode
}

export default function Table({ children, className, ...props }: TableProps) {
  return (
    <table
      className={cn(
        "w-full table-fixed border border-stone-300 text-left text-sm",
        className
      )}
      {...props}
    >
      {children}
    </table>
  )
}
