import { render, screen } from "@testing-library/react"
import NoMoviesResult from "@/components/list/movie-table/no-movies-result"

describe("NoMoviesResult", () => {
  it("renders 'Loading...' when isPending is true", () => {
    render(
      <table>
        <tbody>
          <NoMoviesResult isPending={true} />
        </tbody>
      </table>
    )

    const cell = screen.getByTestId("no-movies-result")
    expect(cell).toHaveTextContent("Loading...")
  })

  it("renders empty message when isPending is false", () => {
    render(
      <table>
        <tbody>
          <NoMoviesResult isPending={false} />
        </tbody>
      </table>
    )

    const cell = screen.getByTestId("no-movies-result")
    expect(cell).toHaveTextContent("No movies match your filters")
  })
})
