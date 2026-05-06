import { Movie } from "@/services/server/movies-api/types"
import Tr from "@/components/shared/table/tr"
import Td from "@/components/shared/table/td"

export function TableBody({ data }: { data: Movie[] }) {
  return (
    <>
      {data.map((row: Movie) => (
        <Tr key={row.id}>
          <Td className="border-r border-stone-300">{row.id}</Td>
          <Td className="border-r border-stone-300">{row.year}</Td>
          <Td>{row.title}</Td>
        </Tr>
      ))}
    </>
  )
}
