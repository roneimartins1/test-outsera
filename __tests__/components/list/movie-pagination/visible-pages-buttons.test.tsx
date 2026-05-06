import { render, screen } from "@testing-library/react"
import VisiblePagesButtons from "@/components/list/movie-pagination/visible-pages-buttons"

describe("VisiblePagesButtons", () => {
  const mockOnPageChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders all visible pages", () => {
    render(
      <VisiblePagesButtons
        onPageChange={mockOnPageChange}
        currentPage={1}
        isDisabled={false}
        visiblePages={[1, 2, 3, 4, 5]}
      />
    )

    expect(screen.getByTestId("visible-pages-buttons-1")).toBeInTheDocument()
    expect(screen.getByTestId("visible-pages-buttons-2")).toBeInTheDocument()
    expect(screen.getByTestId("visible-pages-buttons-3")).toBeInTheDocument()
    expect(screen.getByTestId("visible-pages-buttons-4")).toBeInTheDocument()
    expect(screen.getByTestId("visible-pages-buttons-5")).toBeInTheDocument()
  })

  it("disables all buttons if isDisabled is true", () => {
    render(
      <VisiblePagesButtons
        onPageChange={mockOnPageChange}
        currentPage={1}
        isDisabled={true}
        visiblePages={[1, 2, 3]}
      />
    )

    const buttons = screen.getAllByRole("button")
    buttons.forEach((button) => {
      expect(button).toBeDisabled()
    })
  })
})
