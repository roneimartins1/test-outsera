type TbodyProps = React.ComponentProps<"tbody">

export default function Tbody({ children, ...props }: TbodyProps) {
  return (
    <tbody className="divide-y divide-stone-300" {...props}>
      {children}
    </tbody>
  )
}
