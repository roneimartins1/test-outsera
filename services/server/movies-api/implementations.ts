import {
  GetMaxMinWinIntervalForProducersResponse,
  GetMoviesRequest,
  GetMoviesResponse,
  GetStudiosWithWinCountResponse,
  GetWinnersByYearResponse,
  GetYearsWithMultipleWinnersResponse,
} from "@/services/server/movies-api/types"
import type { MoviesApiService } from "./service"

class MoviesApiServiceImpl implements MoviesApiService {
  baseUrl: string = ""

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getMovies(params: GetMoviesRequest): Promise<GetMoviesResponse> {
    const query = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        query.append(key, value.toString())
      }
    })

    const url = `${this.baseUrl}/movies?${query.toString()}`

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(
          `Request failed with status ${response.status}: ${errorText || response.statusText}`
        )
      }

      const data = await response.json()

      if (!data || typeof data !== "object") {
        throw new Error("Invalid response: expected an object")
      }

      if (!Array.isArray(data.content)) {
        throw new Error(
          "Invalid response: 'content' property is missing or not an array"
        )
      }

      return data as GetMoviesResponse
    } catch (error) {
      console.error("Error fetching movies:", error)
      throw error instanceof Error
        ? error
        : new Error("Unknown error occurred while fetching movies")
    }
  }

  async getYearsWithMultipleWinners(): Promise<GetYearsWithMultipleWinnersResponse> {
    const url = `${this.baseUrl}/movies/yearsWithMultipleWinners`

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(
          `Request failed with status ${response.status}: ${errorText || response.statusText}`
        )
      }

      const data = await response.json()

      if (!data || typeof data !== "object") {
        throw new Error("Invalid response: expected an object")
      }

      if (!Array.isArray(data.years)) {
        throw new Error(
          "Invalid response: 'years' property is missing or not an array"
        )
      }

      return data as GetYearsWithMultipleWinnersResponse
    } catch (error) {
      console.error("Error fetching years with multiple winners:", error)
      throw error instanceof Error
        ? error
        : new Error(
            "Unknown error occurred while fetching years with multiple winners"
          )
    }
  }

  async getStudiosWithWinCount(): Promise<GetStudiosWithWinCountResponse> {
    const url = `${this.baseUrl}/movies/studiosWithWinCount`

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(
          `Request failed with status ${response.status}: ${errorText || response.statusText}`
        )
      }

      const data = await response.json()

      if (!data || typeof data !== "object") {
        throw new Error("Invalid response: expected an object")
      }

      if (!Array.isArray(data.studios)) {
        throw new Error(
          "Invalid response: 'studios' property is missing or not an array"
        )
      }

      return data as GetStudiosWithWinCountResponse
    } catch (error) {
      console.error("Error fetching studios with win count:", error)
      throw error instanceof Error
        ? error
        : new Error(
            "Unknown error occurred while fetching studios with win count"
          )
    }
  }

  async getMaxMinWinIntervalForProducers(): Promise<GetMaxMinWinIntervalForProducersResponse> {
    const url = `${this.baseUrl}/movies/maxMinWinIntervalForProducers`

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(
          `Request failed with status ${response.status}: ${errorText || response.statusText}`
        )
      }

      const data =
        (await response.json()) as GetMaxMinWinIntervalForProducersResponse

      if (!data || typeof data !== "object") {
        throw new Error("Invalid response: expected an object")
      }

      if (!Array.isArray(data.max)) {
        throw new Error(
          "Invalid response: 'max' property is missing or not an array"
        )
      }

      if (!Array.isArray(data.min)) {
        throw new Error(
          "Invalid response: 'min' property is missing or not an array"
        )
      }

      return data as GetMaxMinWinIntervalForProducersResponse
    } catch (error) {
      console.error("Error fetching studios with win count:", error)
      throw error instanceof Error
        ? error
        : new Error(
            "Unknown error occurred while fetching studios with win count"
          )
    }
  }

  async getWinnersByYear(year: number): Promise<GetWinnersByYearResponse> {
    const url = `${this.baseUrl}/movies/winnersByYear?year=${year}`

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(
          `Request failed with status ${response.status}: ${errorText || response.statusText}`
        )
      }

      const data = (await response.json()) as GetWinnersByYearResponse

      if (!data || typeof data !== "object") {
        throw new Error("Invalid response: expected an object")
      }

      if (!Array.isArray(data)) {
        throw new Error(
          "Invalid response: 'movies' property is missing or not an array"
        )
      }

      return data as GetWinnersByYearResponse
    } catch (error) {
      console.error("Error fetching studios with win count:", error)
      throw error instanceof Error
        ? error
        : new Error(
            "Unknown error occurred while fetching studios with win count"
          )
    }
  }
}

export { MoviesApiServiceImpl }
