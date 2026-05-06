"use client"

import { Suspense } from "react"
import useMoviesList from "@/components/list/hooks/use-movies-list"
import MovieTable from "@/components/list/movie-table"
import MoviePagination from "@/components/list/movie-pagination"
import { Typography } from "@/components/ui/typography"

function ListMoviesContent() {
  const { movies, currentPage, totalPages, isPending, isPlaceholderData } =
    useMoviesList()

  return (
    <main className="w-full overflow-y-auto p-4">
      <div className="flex flex-col gap-2 rounded border border-gray-100 bg-white p-4 shadow-sm">
        <Typography variant="h2" type="h2">
          List movies
        </Typography>

        <div>
          <MovieTable
            movies={movies}
            isPending={isPending}
            isPlaceholderData={isPlaceholderData}
          />

          <MoviePagination
            currentPage={currentPage}
            totalPages={totalPages}
            isPending={isPending}
            isPlaceholderData={isPlaceholderData}
          />
        </div>
      </div>
    </main>
  )
}

export default function ListMoviesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListMoviesContent />
    </Suspense>
  )
}
