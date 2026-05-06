import Table from "@/components/shared/table"
import Section from "@/components/shared/table/section"
import Tbody from "@/components/shared/table/tbody"
import Td from "@/components/shared/table/td"
import Th from "@/components/shared/table/th"
import Thead from "@/components/shared/table/thead"
import Tr from "@/components/shared/table/tr"
import { Typography } from "@/components/ui/typography"
import Container, { TOKENS } from "@/lib/di/server"
import { GetStudiosWithWinCountResponse } from "@/services/server/movies-api/types"
const moviesApiService = Container.get(TOKENS.moviesApiService)

const STUDIO_QUANTITY = Number(process.env.TOP_STUDIOS_WITH_WINNERS) || 3

export default async function TopStudiosWithWinners() {
  let studiosWithWinCount: GetStudiosWithWinCountResponse

  try {
    studiosWithWinCount = await moviesApiService.getStudiosWithWinCount()
  } catch {
    return (
      <Section className="flex flex-col gap-4">
        <Typography variant="h2" type="h2">
          {getHeaderText()}
        </Typography>
        <div
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
          role="alert"
        >
          Failed to fetch data
        </div>
      </Section>
    )
  }

  const data = studiosWithWinCount.studios
    .sort((a, b) => b.winCount - a.winCount)
    .slice(0, STUDIO_QUANTITY)

  return (
    <Section>
      <Typography variant="h2" type="h2">
        {getHeaderText()}
      </Typography>
      <div className="overflow-x-auto">
        <Table>
          <Thead className="border-b border-stone-300 bg-taupe-100">
            <Tr variant="head">
              <Th className="border-r border-stone-300">Name</Th>
              <Th>Win Count</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => (
              <Tr variant="body" key={row.name}>
                <Td className="border-r border-stone-300">{row.name}</Td>
                <Td>{row.winCount}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </Section>
  )
}

function getHeaderText() {
  if (STUDIO_QUANTITY === 1) return "Top studio with winner"

  return `Top ${STUDIO_QUANTITY} studios with winners`
}
