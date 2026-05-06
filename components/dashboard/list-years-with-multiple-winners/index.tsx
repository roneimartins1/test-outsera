import Table from "@/components/shared/table"
import Section from "@/components/shared/table/section"
import Tbody from "@/components/shared/table/tbody"
import Td from "@/components/shared/table/td"
import Th from "@/components/shared/table/th"
import Thead from "@/components/shared/table/thead"
import Tr from "@/components/shared/table/tr"
import { Typography } from "@/components/ui/typography"
import Container, { TOKENS } from "@/lib/di/server"
import { GetYearsWithMultipleWinnersResponse } from "@/services/server/movies-api/types"
const moviesApiService = Container.get(TOKENS.moviesApiService)

export default async function ListYearsWithMultipleWinners() {
  let movies: GetYearsWithMultipleWinnersResponse

  try {
    movies = await moviesApiService.getYearsWithMultipleWinners()
  } catch {
    return (
      <Section className="flex flex-col gap-4">
        <Typography variant="h2" type="h2">
          List years with multiple winners
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

  return (
    <Section>
      <Typography variant="h2" type="h2">
        List years with multiple winners
      </Typography>
      <div className="overflow-x-auto">
        <Table>
          <Thead>
            <Tr variant="head">
              <Th className="border-r border-stone-300">Year</Th>
              <Th>Win Count</Th>
            </Tr>
          </Thead>
          <Tbody>
            {movies.years.map((row) => (
              <Tr variant="body" key={row.year}>
                <Td className="border-r border-stone-300">{row.year}</Td>
                <Td>{row.winnerCount}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </Section>
  )
}
