"use client"

import FirstPageButton from "./first-page-button"
import PreviousPageButton from "./previous-page-button"
import VisiblePagesButtons from "./visible-pages-buttons"
import NextPageButton from "./next-page-button"
import LastPageButton from "./last-page-button"
import { getVisiblePages } from "./utils"
import usePage from "../params/use-page"

interface MoviePaginationProps {
  currentPage: number
  totalPages: number
  isPending: boolean
  isPlaceholderData: boolean
}

export default function MoviePagination({
  currentPage,
  totalPages,
  isPending,
  isPlaceholderData,
}: MoviePaginationProps) {
  const { setPage } = usePage()
  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const visiblePages = getVisiblePages(currentPage, totalPages)
  const isDisabled = isPending || isPlaceholderData

  return (
    <div className="flex justify-center border-x border-b border-stone-300 bg-taupe-100">
      <nav
        aria-label="Pagination"
        className="flex items-center overflow-hidden text-xs"
      >
        <FirstPageButton
          onPageChange={handlePageChange}
          currentPage={currentPage}
          isDisabled={isDisabled}
        />

        <PreviousPageButton
          onPageChange={handlePageChange}
          currentPage={currentPage}
          isDisabled={isDisabled}
        />

        <VisiblePagesButtons
          onPageChange={handlePageChange}
          currentPage={currentPage}
          isDisabled={isDisabled}
          visiblePages={visiblePages}
        />

        <NextPageButton
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
          isDisabled={isDisabled}
        />

        <LastPageButton
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
          isDisabled={isDisabled}
        />
      </nav>
    </div>
  )
}
