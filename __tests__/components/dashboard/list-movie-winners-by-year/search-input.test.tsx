import { render, screen } from "@testing-library/react"
import { SearchInput } from "@/components/dashboard/list-movie-winners-by-year/search-input"

describe("SearchInput", () => {
  it("render the input and the button correctly", () => {
    render(<SearchInput />)

    expect(screen.getByTestId("year-input")).toBeInTheDocument()
    expect(screen.getByTestId("search-button")).toBeInTheDocument()
  })

  it("render the default year value if provided", () => {
    render(<SearchInput year={2020} />)

    const input = screen.getByTestId("year-input")
    expect(input).toHaveValue(2020)
  })
})
