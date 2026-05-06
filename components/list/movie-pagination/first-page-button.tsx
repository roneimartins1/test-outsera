import { ArrowLeftToLine } from "lucide-react"

interface FirstPageButtonProps {
  onPageChange: (page: number) => void
  currentPage: number
  isDisabled: boolean
}

export default function FirstPageButton({
  onPageChange,
  currentPage,
  isDisabled,
}: FirstPageButtonProps) {
  return (
    <button
      onClick={() => onPageChange(1)}
      disabled={currentPage === 1 || isDisabled}
      className="flex h-8 w-8 items-center justify-center text-gray-400 hover:bg-gray-50 disabled:opacity-50"
      aria-label="First page"
    >
      <ArrowLeftToLine className="h-3 w-3" />
    </button>
  )
}
