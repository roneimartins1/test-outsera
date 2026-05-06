import { parseAsInteger, useQueryState } from "nuqs"

export default function usePage() {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1))
  return {
    page,
    setPage,
  }
}
