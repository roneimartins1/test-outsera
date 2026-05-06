import { MoviesApiServiceImpl } from "@/services/client/movies-api/implementations"

function makeFetchMock(body: unknown, ok = true, status = 200) {
  return jest.fn().mockResolvedValue({
    ok,
    status,
    statusText: ok ? "OK" : "Error",
    json: jest.fn().mockResolvedValue(body),
    text: jest.fn().mockResolvedValue("Error body"),
  })
}

describe("MoviesApiServiceImpl (client)", () => {
  let service: MoviesApiServiceImpl

  beforeEach(() => {
    service = new MoviesApiServiceImpl()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe("getMovies()", () => {
    const validResponse = {
      content: [],
      totalPages: 5,
      number: 0,
      totalElements: 50,
    }

    it("should return the data when the response is valid", async () => {
      global.fetch = makeFetchMock(validResponse)
      const result = await service.getMovies({ page: 1, size: 15 })
      expect(result).toEqual(validResponse)
    })

    it("should throw an error when response.ok is false", async () => {
      global.fetch = makeFetchMock({}, false, 500)
      await expect(service.getMovies({ page: 1, size: 15 })).rejects.toThrow(
        "Request failed with status 500"
      )
    })
  })
})
