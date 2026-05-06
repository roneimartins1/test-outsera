import ListYearsWithMultipleWinners from "@/components/dashboard/list-years-with-multiple-winners"
import TopStudiosWithWinners from "@/components/dashboard/top-studios-with-winners"
import ProducersWithLongestAndShortestIntervalBetweenWins from "@/components/dashboard/producers-with-longest-and-shortest-interval-between-wins"
import ListMovieWinnersByYear from "@/components/dashboard/list-movie-winners-by-year"

export default async function Dashboard(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  const yearStr = searchParams.year as string | undefined
  const year = yearStr ? parseInt(yearStr, 10) : undefined

  return (
    <main className="w-full overflow-y-auto px-8 py-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ListYearsWithMultipleWinners />
        <TopStudiosWithWinners />
        <ProducersWithLongestAndShortestIntervalBetweenWins />
        <ListMovieWinnersByYear year={year} />
      </div>
    </main>
  )
}
