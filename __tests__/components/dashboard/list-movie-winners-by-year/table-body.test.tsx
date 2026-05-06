import { render, screen } from "@testing-library/react"
import { TableBody } from "@/components/dashboard/list-movie-winners-by-year/table-body"

describe("TableBody (Winners By Year)", () => {
  const mockData = [
    {
      id: 1,
      year: 2020,
      title: "Movie A",
      studios: [],
      producers: [],
      winner: true,
    },
    {
      id: 2,
      year: 2020,
      title: "Movie B",
      studios: [],
      producers: [],
      winner: true,
    },
  ]

  it("renderizes the movie rows correctly", () => {
    render(
      <table>
        <tbody>
          <TableBody data={mockData} />
        </tbody>
      </table>
    )

    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getAllByText("2020")).toHaveLength(2)
    expect(screen.getByText("Movie A")).toBeInTheDocument()

    expect(screen.getByText("2")).toBeInTheDocument()
    expect(screen.getByText("Movie B")).toBeInTheDocument()
  })

  it("does not render anything when the array is empty", () => {
    render(
      <table>
        <tbody data-testid="tbody">
          <TableBody data={[]} />
        </tbody>
      </table>
    )

    const tbody = screen.getByTestId("tbody")
    expect(tbody).toBeEmptyDOMElement()
  })
})
