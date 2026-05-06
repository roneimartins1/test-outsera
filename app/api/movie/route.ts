import Container, { TOKENS } from "@/lib/di/server"
import { GetMoviesResponse } from "@/services/server/movies-api/types"
import { NextResponse } from "next/server"

const moviesApiService = Container.get(TOKENS.moviesApiService)

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const page = url.searchParams.get("page")
    const size = url.searchParams.get("size")
    const winnerParam = url.searchParams.get("winner")
    const winner =
      winnerParam === "true"
        ? true
        : winnerParam === "false"
          ? false
          : undefined
    const year = url.searchParams.get("year")

    const response = await moviesApiService.getMovies({
      page: Number(page) - 1,
      size: Number(size),
      winner,
      year: year ? Number(year) : undefined,
    })

    return NextResponse.json<GetMoviesResponse>(response)
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    }
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
