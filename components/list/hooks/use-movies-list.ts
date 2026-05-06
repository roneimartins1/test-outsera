"use client"

import { useQuery, keepPreviousData } from "@tanstack/react-query"
import { fetchMoviesQuery } from "@/lib/tanstack-query/queries/movies/movie-query"
import usePage from "@/components/list/params/use-page"
import useWinner from "@/components/list/params/use-winner"
import useYear from "@/components/list/params/use-year"

const PAGE_SIZE = process.env.NEXT_PUBLIC_LIST_PAGE_SIZE || 15

export default function useMoviesList() {
  const { page } = usePage()
  const { winner } = useWinner()
  const { year } = useYear()

  const { data, isPending, isPlaceholderData } = useQuery({
    ...fetchMoviesQuery({
      page,
      size: Number(PAGE_SIZE),
      winner,
      year,
    }),
    placeholderData: keepPreviousData,
  })

  const movies = data?.content || []
  const currentPage = (data?.number || 0) + 1
  const totalPages = data?.totalPages || 0

  return {
    movies,
    currentPage,
    totalPages,
    isPending,
    isPlaceholderData,
  }
}
