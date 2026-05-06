import { render, screen } from "@testing-library/react"
import TableLongestAndShortestIntervalBetweenWins from "@/components/dashboard/producers-with-longest-and-shortest-interval-between-wins/table"

describe("TableLongestAndShortestIntervalBetweenWins", () => {
  const mockData = [
    {
      producer: "Producer A",
      interval: 13,
      previousWin: 1980,
      followingWin: 1993,
    },
    {
      producer: "Producer B",
      interval: 10,
      previousWin: 1990,
      followingWin: 2000,
    },
  ]

  it("renders the data rows correctly", () => {
    render(<TableLongestAndShortestIntervalBetweenWins data={mockData} />)

    expect(screen.getByText("Producer A")).toBeInTheDocument()
    expect(screen.getByText("13")).toBeInTheDocument()
    expect(screen.getByText("1980")).toBeInTheDocument()
    expect(screen.getByText("1993")).toBeInTheDocument()

    expect(screen.getByText("Producer B")).toBeInTheDocument()
    expect(screen.getByText("10")).toBeInTheDocument()
    expect(screen.getByText("1990")).toBeInTheDocument()
    expect(screen.getByText("2000")).toBeInTheDocument()
  })
})
