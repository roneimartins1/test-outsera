import { queryOptions } from "@tanstack/react-query"
import { GetMoviesRequest } from "@/services/server/movies-api/types"
import Container, { TOKENS } from "@/lib/di/client"
const moviesApiService = Container.get(TOKENS.moviesApiService)

export function fetchMoviesQuery(params: GetMoviesRequest) {
  return queryOptions({
    queryKey: ["movies", params],
    queryFn: () => moviesApiService.getMovies(params),
  })
}
