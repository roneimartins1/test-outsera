import { MoviesApiServiceImpl } from "@/services/server/movies-api/implementations"

const BASE_URL = "https://api.example.com"

function makeFetchMock(body: unknown, ok = true, status = 200) {
  return jest.fn().mockResolvedValue({
    ok,
    status,
    statusText: ok ? "OK" : "Error",
    json: jest.fn().mockResolvedValue(body),
    text: jest.fn().mockResolvedValue("Error body"),
  })
}

describe("MoviesApiServiceImpl (server)", () => {
  let service: MoviesApiServiceImpl

  beforeEach(() => {
    service = new MoviesApiServiceImpl(BASE_URL)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe("getMovies()", () => {
    const validResponse = {
      content: [],
      totalPages: 10,
      number: 0,
      totalElements: 100,
    }

    it("returns data when response is valid", async () => {
      global.fetch = makeFetchMock(validResponse)
      const result = await service.getMovies({ page: 1, size: 15 })
      expect(result).toEqual(validResponse)
    })

    it("throws an error when response.ok is false", async () => {
      global.fetch = makeFetchMock({}, false, 500)
      await expect(service.getMovies({ page: 1, size: 15 })).rejects.toThrow(
        "Request failed with status 500"
      )
    })
  })

  describe("getYearsWithMultipleWinners()", () => {
    it("returns data when response is valid", async () => {
      const data = { years: [{ year: 1980, winnerCount: 2 }] }
      global.fetch = makeFetchMock(data)
      const result = await service.getYearsWithMultipleWinners()
      expect(result).toEqual(data)
    })

    it("throws an error when response.ok is false", async () => {
      global.fetch = makeFetchMock({}, false, 404)
      await expect(service.getYearsWithMultipleWinners()).rejects.toThrow(
        "Request failed with status 404"
      )
    })
  })

  describe("getStudiosWithWinCount()", () => {
    it("retorna dados quando resposta é válida", async () => {
      const data = { studios: [{ name: "Columbia", winCount: 10 }] }
      global.fetch = makeFetchMock(data)
      const result = await service.getStudiosWithWinCount()
      expect(result).toEqual(data)
    })

    it("throws an error when response.ok is false", async () => {
      global.fetch = makeFetchMock({}, false, 503)
      await expect(service.getStudiosWithWinCount()).rejects.toThrow(
        "Request failed with status 503"
      )
    })
  })

  describe("getMaxMinWinIntervalForProducers()", () => {
    it("returns data when response is valid", async () => {
      const data = {
        min: [
          { producer: "A", interval: 1, previousWin: 1990, followingWin: 1991 },
        ],
        max: [
          {
            producer: "B",
            interval: 13,
            previousWin: 1980,
            followingWin: 1993,
          },
        ],
      }
      global.fetch = makeFetchMock(data)
      const result = await service.getMaxMinWinIntervalForProducers()
      expect(result).toEqual(data)
    })

    it("throws an error when response.ok is false", async () => {
      global.fetch = makeFetchMock({}, false, 500)
      await expect(service.getMaxMinWinIntervalForProducers()).rejects.toThrow(
        "Request failed with status 500"
      )
    })
  })

  describe("getWinnersByYear()", () => {
    it("returns data when response is valid", async () => {
      global.fetch = makeFetchMock([])
      const result = await service.getWinnersByYear(1985)
      expect(result).toEqual([])
    })

    it("throws an error when response.ok is false", async () => {
      global.fetch = makeFetchMock({}, false, 400)
      await expect(service.getWinnersByYear(1985)).rejects.toThrow(
        "Request failed with status 400"
      )
    })
  })
})
