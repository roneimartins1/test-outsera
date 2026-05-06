import { MoviesApiServiceImpl } from "@/services/client/movies-api/implementations"
import { MoviesApiService } from "@/services/client/movies-api/service"
import { Container, token } from "brandi"

const TOKENS = {
  moviesApiService: token<MoviesApiService>("movies_api_service"),
}

const container = new Container()

container
  .bind(TOKENS.moviesApiService)
  .toInstance(MoviesApiServiceImpl)
  .inTransientScope()

export default container
export { TOKENS }
