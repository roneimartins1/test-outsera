type Movie = {
  id: number
  year: number
  title: string
  studios: string[]
  producers: string[]
  winner: boolean
}

type Sort = {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

type Pageable = {
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  sort: Sort
  unpaged: boolean
}

type GetMoviesResponse = {
  content: Movie[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: Pageable
  size: number
  sort: Sort
  totalElements: number
  totalPages: number
}

type GetMoviesRequest = {
  page: number
  size: number
  winner?: boolean | null
  year?: number | null
}

type YearWithMultipleWinners = {
  year: number
  winnerCount: number
}

type GetYearsWithMultipleWinnersResponse = {
  years: YearWithMultipleWinners[]
}

type StudioWithWinCount = {
  name: string
  winCount: number
}

type GetStudiosWithWinCountResponse = {
  studios: StudioWithWinCount[]
}

type Producer = {
  producer: string
  interval: number
  previousWin: number
  followingWin: number
}

type GetMaxMinWinIntervalForProducersResponse = {
  min: Producer[]
  max: Producer[]
}

type GetWinnersByYearResponse = Movie[]

export type {
  Movie,
  Sort,
  Pageable,
  GetMoviesResponse,
  GetMoviesRequest,
  GetYearsWithMultipleWinnersResponse,
  GetStudiosWithWinCountResponse,
  GetMaxMinWinIntervalForProducersResponse,
  Producer,
  GetWinnersByYearResponse,
}
