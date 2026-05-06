"use client"

import { Movie } from "@/services/server/movies-api/types"
import { cn } from "@/lib/utils"
import Table from "../../shared/table"
import Thead from "../../shared/table/thead"
import Tbody from "../../shared/table/tbody"
import Tr from "../../shared/table/tr"
import IdColumn from "./id-column"
import YearColumn from "./year-column"
import TitleColumn from "./title-column"
import WinnerColumn from "./winner-column"
import MovieTableRow from "./movie-table-row"
import NoMoviesResult from "./no-movies-result"

interface MovieTableProps {
  movies: Movie[]
  isPending: boolean
  isPlaceholderData: boolean
}

export default function MovieTable({
  movies,
  isPending,
  isPlaceholderData,
}: MovieTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Thead>
          <Tr variant="head" className="text-center">
            <IdColumn />
            <YearColumn />
            <TitleColumn />
            <WinnerColumn />
          </Tr>
        </Thead>
        <Tbody className={cn(isPlaceholderData && "opacity-50")}>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieTableRow key={movie.id} movie={movie} />
            ))
          ) : (
            <NoMoviesResult isPending={isPending} />
          )}
        </Tbody>
      </Table>
    </div>
  )
}
