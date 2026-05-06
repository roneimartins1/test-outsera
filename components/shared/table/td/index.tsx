import { cn } from "@/lib/utils"

type TdProps = React.ComponentProps<"td">

export default function Td({ children, className, ...props }: TdProps) {
  return (
    <td className={cn("px-4 py-2 text-gray-600", className)} {...props}>
      {children}
    </td>
  )
}
