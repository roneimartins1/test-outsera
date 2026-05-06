import { render, screen } from "@testing-library/react"
import PreviousPageButton from "@/components/list/movie-pagination/previous-page-button"

describe("PreviousPageButton", () => {
  const mockOnPageChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders correctly", () => {
    render(
      <PreviousPageButton
        onPageChange={mockOnPageChange}
        currentPage={2}
        isDisabled={false}
      />
    )
    expect(screen.getByTestId("previous-page-button")).toBeInTheDocument()
  })

  it("disables when currentPage is 1", () => {
    render(
      <PreviousPageButton
        onPageChange={mockOnPageChange}
        currentPage={1}
        isDisabled={false}
      />
    )
    expect(screen.getByTestId("previous-page-button")).toBeDisabled()
  })

  it("disables when isDisabled is true", () => {
    render(
      <PreviousPageButton
        onPageChange={mockOnPageChange}
        currentPage={3}
        isDisabled={true}
      />
    )
    expect(screen.getByTestId("previous-page-button")).toBeDisabled()
  })
})
