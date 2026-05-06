import Section from "@/components/shared/table/section"
import { Typography } from "@/components/ui/typography"
import Container, { TOKENS } from "@/lib/di/server"
import { GetMaxMinWinIntervalForProducersResponse } from "@/services/server/movies-api/types"
import TableLongestAndShortestIntervalBetweenWins from "./table"

const moviesApiService = Container.get(TOKENS.moviesApiService)

export default async function ProducersWithLongestAndShortestIntervalBetweenWins() {
  let data: GetMaxMinWinIntervalForProducersResponse

  try {
    data = await moviesApiService.getMaxMinWinIntervalForProducers()
  } catch {
    return (
      <Section className="flex flex-col gap-4">
        <Typography variant="h2" type="h2">
          Producers with longest and shortest interval between wins
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
    <Section className="flex flex-col gap-4">
      <Typography variant="h2" type="h2">
        Producers with longest and shortest interval between wins
      </Typography>
      <div>
        <Typography className="mb-1" variant="h3" type="h3">
          Maximum
        </Typography>
        <div className="overflow-x-auto">
          <TableLongestAndShortestIntervalBetweenWins data={data.max} />
        </div>
      </div>

      <div>
        <Typography className="mb-1" variant="h3" type="h3">
          Minimum
        </Typography>
        <div className="overflow-x-auto">
          <TableLongestAndShortestIntervalBetweenWins data={data.min} />
        </div>
      </div>
    </Section>
  )
}
