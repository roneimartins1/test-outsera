import { render, screen } from "@testing-library/react"
import LastPageButton from "@/components/list/movie-pagination/last-page-button"

describe("LastPageButton", () => {
  const mockOnPageChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders correctly", () => {
    render(
      <LastPageButton
        onPageChange={mockOnPageChange}
        currentPage={1}
        totalPages={10}
        isDisabled={false}
      />
    )
    expect(screen.getByTestId("last-page-button")).toBeInTheDocument()
  })

  it("disables when currentPage >= totalPages", () => {
    render(
      <LastPageButton
        onPageChange={mockOnPageChange}
        currentPage={10}
        totalPages={10}
        isDisabled={false}
      />
    )
    expect(screen.getByTestId("last-page-button")).toBeDisabled()
  })

  it("disables when isDisabled is true", () => {
    render(
      <LastPageButton
        onPageChange={mockOnPageChange}
        currentPage={1}
        totalPages={10}
        isDisabled={true}
      />
    )
    expect(screen.getByTestId("last-page-button")).toBeDisabled()
  })
})
