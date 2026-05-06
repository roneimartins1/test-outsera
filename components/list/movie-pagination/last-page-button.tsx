import { ArrowRightToLine } from "lucide-react"

interface LastPageButtonProps {
  onPageChange: (page: number) => void
  currentPage: number
  totalPages: number
  isDisabled: boolean
}

export default function LastPageButton({
  onPageChange,
  currentPage,
  totalPages,
  isDisabled,
}: LastPageButtonProps) {
  return (
    <button
      onClick={() => onPageChange(totalPages)}
      disabled={currentPage >= totalPages || isDisabled}
      className="flex h-8 w-8 items-center justify-center text-gray-400 hover:bg-gray-50 disabled:opacity-50"
      aria-label="Last page"
    >
      <ArrowRightToLine className="h-3 w-3" />
    </button>
  )
}
