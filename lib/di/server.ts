import { MoviesApiServiceImpl } from "@/services/server/movies-api/implementations"
import { MoviesApiService } from "@/services/server/movies-api/service"
import { Container, injected, token } from "brandi"

const TOKENS = {
  moviesApiUrl: token<string>("movies_api_url"),
  moviesApiService: token<MoviesApiService>("movies_api_service"),
}

const container = new Container()

container.bind(TOKENS.moviesApiUrl).toConstant(process.env.MOVIES_API_URL ?? "")

injected(MoviesApiServiceImpl, TOKENS.moviesApiUrl)

container
  .bind(TOKENS.moviesApiService)
  .toInstance(MoviesApiServiceImpl)
  .inTransientScope()

export default container
export { TOKENS }
