import { render, screen } from "@testing-library/react"
import FirstPageButton from "@/components/list/movie-pagination/first-page-button"

describe("FirstPageButton", () => {
  const mockOnPageChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders correctly", () => {
    render(
      <FirstPageButton
        onPageChange={mockOnPageChange}
        currentPage={2}
        isDisabled={false}
      />
    )
    expect(screen.getByTestId("first-page-button")).toBeInTheDocument()
  })

  it("disables when currentPage is 1", () => {
    render(
      <FirstPageButton
        onPageChange={mockOnPageChange}
        currentPage={1}
        isDisabled={false}
      />
    )
    expect(screen.getByTestId("first-page-button")).toBeDisabled()
  })

  it("disables when isDisabled is true", () => {
    render(
      <FirstPageButton
        onPageChange={mockOnPageChange}
        currentPage={3}
        isDisabled={true}
      />
    )
    expect(screen.getByTestId("first-page-button")).toBeDisabled()
  })
})
