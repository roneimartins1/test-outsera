import { Movie } from "@/services/server/movies-api/types"
import Tr from "../../shared/table/tr"
import Td from "../../shared/table/td"

interface MovieTableRowProps {
  movie: Movie
}

export default function MovieTableRow({ movie }: MovieTableRowProps) {
  return (
    <Tr variant="body">
      <Td className="border-t border-r border-stone-300">{movie.id}</Td>
      <Td className="border-t border-r border-stone-300">{movie.year}</Td>
      <Td className="border-t border-r border-stone-300">{movie.title}</Td>
      <Td className="border-t border-stone-300">
        {movie.winner ? "Yes" : "No"}
      </Td>
    </Tr>
  )
}
