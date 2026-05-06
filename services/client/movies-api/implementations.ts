import {
  GetMoviesRequest,
  GetMoviesResponse,
} from "@/services/server/movies-api/types"
import type { MoviesApiService } from "./service"

class MoviesApiServiceImpl implements MoviesApiService {
  constructor() {}

  async getMovies(params: GetMoviesRequest): Promise<GetMoviesResponse> {
    const query = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        query.append(key, value.toString())
      }
    })

    const url = `/api/movie?${query.toString()}`

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
}

export { MoviesApiServiceImpl }
