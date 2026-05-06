const PAGINATION_BUTTONS_LIMIT =
  Number(process.env.NEXT_PUBLIC_LIST_PAGE_PAGINATION_BUTTONS_LIMIT) || 5

export function getVisiblePages(current: number, total: number) {
  if (total <= PAGINATION_BUTTONS_LIMIT)
    return Array.from({ length: total }, (_, i) => i + 1)

  let start = Math.max(1, current - Math.floor(PAGINATION_BUTTONS_LIMIT / 2))

  if (start + PAGINATION_BUTTONS_LIMIT > total) {
    start = total - PAGINATION_BUTTONS_LIMIT + 1
  }

  return Array.from({ length: PAGINATION_BUTTONS_LIMIT }, (_, i) => start + i)
}
