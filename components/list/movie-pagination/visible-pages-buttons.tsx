import { cn } from "@/lib/utils"

interface VisiblePagesButtonsProps {
  onPageChange: (page: number) => void
  currentPage: number
  isDisabled: boolean
  visiblePages: number[]
}

export default function VisiblePagesButtons({
  onPageChange,
  currentPage,
  isDisabled,
  visiblePages,
}: VisiblePagesButtonsProps) {
  return (
    <>
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={isDisabled}
          className={cn(
            "flex h-8 w-8 items-center justify-center disabled:opacity-50",
            currentPage === page
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-50"
          )}
          aria-label={`Page ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}
    </>
  )
}
