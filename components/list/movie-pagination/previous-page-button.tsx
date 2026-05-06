import { ArrowLeft } from "lucide-react"

interface PreviousPageButtonProps {
  onPageChange: (page: number) => void
  currentPage: number
  isDisabled: boolean
}

export default function PreviousPageButton({
  onPageChange,
  currentPage,
  isDisabled,
}: PreviousPageButtonProps) {
  return (
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1 || isDisabled}
      className="flex h-8 w-8 items-center justify-center text-gray-400 hover:bg-gray-50 disabled:opacity-50"
      aria-label="Previous page"
      data-testid="previous-page-button"
    >
      <ArrowLeft className="h-3 w-3" />
    </button>
  )
}
