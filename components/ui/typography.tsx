import * as React from "react"
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

const typographyVariants = cva("text-slate-800", {
  variants: {
    variant: {
      h2: "text-lg font-bold text-gray-800",
      h3: "text-xl font-medium text-gray-700",
    },
  },
  defaultVariants: {
    variant: "h2",
  },
})

export enum TranslationSpanTypes {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  span = "span",
  p = "p",
}

export type TypographyProps = React.ComponentProps<"span"> &
  VariantProps<typeof typographyVariants> & {
    children?: React.ReactNode
    type?: `${TranslationSpanTypes}`
  }

function Typography({
  variant,
  className,
  children,
  type = TranslationSpanTypes.span,
  ...props
}: TypographyProps) {
  return React.createElement(
    type,
    {
      className: cn(typographyVariants({ variant, className })),
      ...props,
    },
    children
  )
}

export { Typography }
