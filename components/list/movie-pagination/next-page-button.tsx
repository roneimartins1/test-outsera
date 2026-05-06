import { ArrowRight } from "lucide-react"

interface NextPageButtonProps {
  onPageChange: (page: number) => void
  currentPage: number
  totalPages: number
  isDisabled: boolean
}

export default function NextPageButton({
  onPageChange,
  currentPage,
  totalPages,
  isDisabled,
}: NextPageButtonProps) {
  return (
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage >= totalPages || isDisabled}
      className="flex h-8 w-8 items-center justify-center text-gray-400 hover:bg-gray-50 disabled:opacity-50"
      aria-label="Next page"
      data-testid="next-page-button"
    >
      <ArrowRight className="h-3 w-3" />
    </button>
  )
}
