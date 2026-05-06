import { render, screen } from "@testing-library/react"
import NextPageButton from "@/components/list/movie-pagination/next-page-button"

describe("NextPageButton", () => {
  const mockOnPageChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders NextPageButton correctly", () => {
    render(
      <NextPageButton
        onPageChange={mockOnPageChange}
        currentPage={1}
        totalPages={10}
        isDisabled={false}
      />
    )
    expect(screen.getByTestId("next-page-button")).toBeInTheDocument()
  })

  it("disables when currentPage >= totalPages", () => {
    render(
      <NextPageButton
        onPageChange={mockOnPageChange}
        currentPage={10}
        totalPages={10}
        isDisabled={false}
      />
    )
    expect(screen.getByTestId("next-page-button")).toBeDisabled()
  })

  it("disables when isDisabled is true", () => {
    render(
      <NextPageButton
        onPageChange={mockOnPageChange}
        currentPage={1}
        totalPages={10}
        isDisabled={true}
      />
    )
    expect(screen.getByTestId("next-page-button")).toBeDisabled()
  })
})
