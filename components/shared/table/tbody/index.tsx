import { cn } from "@/lib/utils"

type TbodyProps = React.ComponentProps<"tbody">

export default function Tbody({ children, className, ...props }: TbodyProps) {
  return (
    <tbody className={cn("divide-y divide-stone-300", className)} {...props}>
      {children}
    </tbody>
  )
}
