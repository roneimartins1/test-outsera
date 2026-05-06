import Container, { TOKENS } from "@/lib/di/server"
import { Typography } from "@/components/ui/typography"
import Section from "@/components/shared/table/section"
import Table from "@/components/shared/table"
import Thead from "@/components/shared/table/thead"
import Tbody from "@/components/shared/table/tbody"
import { SearchInput } from "./search-input"
import { TableHeader } from "./table-header"
import { TableBody } from "./table-body"
import { GetWinnersByYearResponse } from "@/services/server/movies-api/types"

const moviesApiService = Container.get(TOKENS.moviesApiService)

export default async function ListMovieWinnersByYear({
  year,
}: {
  year?: number
}) {
  let data: GetWinnersByYearResponse = []

  if (year) {
    try {
      data = await moviesApiService.getWinnersByYear(year)
    } catch {
      return (
        <Section className="flex flex-col gap-4">
          <Typography variant="h2" type="h2">
            List movie winners by year
          </Typography>
          <div
            className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
            role="alert"
          >
            Failed to fetch winners
          </div>
        </Section>
      )
    }
  }

  return (
    <Section>
      <Typography variant="h2" type="h2">
        List movie winners by year
      </Typography>
      <div>
        <SearchInput year={year} />

        <div className="overflow-x-auto">
          <Table>
            <Thead>
              <TableHeader />
            </Thead>
            <Tbody>
              <TableBody data={data} />
            </Tbody>
          </Table>
        </div>
      </div>
    </Section>
  )
}
