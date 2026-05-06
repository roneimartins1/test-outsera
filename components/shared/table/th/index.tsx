import { cn } from "@/lib/utils"

type ThProps = React.ComponentProps<"th">

export default function Th({ children, className, ...props }: ThProps) {
  return (
    <th
      className={cn("px-4 py-2 font-bold text-gray-700", className)}
      {...props}
    >
      {children}
    </th>
  )
}
