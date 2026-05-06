import Th from "@/components/shared/table/th"
import Tr from "@/components/shared/table/tr"

export function TableHeader() {
  return (
    <Tr variant="head">
      <Th className="border-r border-stone-300">Id</Th>
      <Th className="border-r border-stone-300">Year</Th>
      <Th>Title</Th>
    </Tr>
  )
}
