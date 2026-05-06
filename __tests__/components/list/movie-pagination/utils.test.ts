import { getVisiblePages } from "@/components/list/movie-pagination/utils"

describe("getVisiblePages()", () => {
  it("returns all pages when total = 1", () => {
    expect(getVisiblePages(1, 1)).toEqual([1])
  })

  it("returns all pages when total = 3", () => {
    expect(getVisiblePages(1, 3)).toEqual([1, 2, 3])
  })

  it("returns all pages when total = 5", () => {
    expect(getVisiblePages(1, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it("returns all pages regardless of the current page", () => {
    expect(getVisiblePages(3, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it("returns the correct window on the tenth page", () => {
    expect(getVisiblePages(10, 20)).toEqual([8, 9, 10, 11, 12])
  })

  it("returns the correct window on the last page", () => {
    expect(getVisiblePages(20, 20)).toEqual([16, 17, 18, 19, 20])
  })
})
