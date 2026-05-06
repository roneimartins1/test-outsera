import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

const trVariants = cva("text-slate-800", {
  variants: {
    variant: {
      body: "text-left even:bg-taupe-100",
      head: "text-left",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

type TrProps = React.ComponentProps<"tr"> &
  VariantProps<typeof trVariants> & {
    children?: React.ReactNode
  }

export default function Tr({
  children,
  variant,
  className,
  ...props
}: TrProps) {
  return (
    <tr className={cn(trVariants({ variant }), className)} {...props}>
      {children}
    </tr>
  )
}
