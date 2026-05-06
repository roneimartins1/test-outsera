import {
  GetMoviesRequest,
  GetMoviesResponse,
} from "@/services/server/movies-api/types"

interface MoviesApiService {
  getMovies(request: GetMoviesRequest): Promise<GetMoviesResponse>
}

export type { MoviesApiService }
