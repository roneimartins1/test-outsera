import {
  GetMaxMinWinIntervalForProducersResponse,
  GetMoviesRequest,
  GetMoviesResponse,
  GetStudiosWithWinCountResponse,
  GetWinnersByYearResponse,
  GetYearsWithMultipleWinnersResponse,
} from "./types"

interface MoviesApiService {
  getMovies(request: GetMoviesRequest): Promise<GetMoviesResponse>
  getYearsWithMultipleWinners(): Promise<GetYearsWithMultipleWinnersResponse>
  getStudiosWithWinCount(): Promise<GetStudiosWithWinCountResponse>
  getMaxMinWinIntervalForProducers(): Promise<GetMaxMinWinIntervalForProducersResponse>
  getWinnersByYear(year: number): Promise<GetWinnersByYearResponse>
}

export type { MoviesApiService }
