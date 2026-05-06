import { render, screen } from "@testing-library/react"
import MovieTableRow from "@/components/list/movie-table/movie-table-row"

describe("MovieTableRow", () => {
  const mockMovie = {
    id: 1,
    year: 1980,
    title: "Can't Stop the Music",
    studios: ["Associated Film Distribution"],
    producers: ["Allan Carr"],
    winner: true,
  }

  it("should render the movie information correctly", () => {
    render(
      <table>
        <tbody>
          <MovieTableRow movie={mockMovie} />
        </tbody>
      </table>
    )

    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("1980")).toBeInTheDocument()
    expect(screen.getByText("Can't Stop the Music")).toBeInTheDocument()
    expect(screen.getByText("Yes")).toBeInTheDocument()
  })
})
