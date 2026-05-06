import Table from "@/components/shared/table"
import Tbody from "@/components/shared/table/tbody"
import Td from "@/components/shared/table/td"
import Th from "@/components/shared/table/th"
import Thead from "@/components/shared/table/thead"
import Tr from "@/components/shared/table/tr"
import { Producer } from "@/services/server/movies-api/types"

interface TableProps {
  data: Producer[]
}

export default function TableLongestAndShortestIntervalBetweenWins({
  data,
}: TableProps) {
  return (
    <Table>
      <Thead>
        <Tr variant="head">
          <Th className="border-r border-stone-300">Producer</Th>
          <Th className="border-r border-stone-300">Interval</Th>
          <Th className="border-r border-stone-300">Previous Year</Th>
          <Th>Following Year</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row) => (
          <Tr key={row.producer} variant="body">
            <Td className="border-r border-stone-300">{row.producer}</Td>
            <Td className="border-r border-stone-300">{row.interval}</Td>
            <Td className="border-r border-stone-300">{row.previousWin}</Td>
            <Td>{row.followingWin}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
