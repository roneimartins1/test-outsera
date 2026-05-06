import { parseAsInteger, useQueryState } from "nuqs"

export default function useYear() {
  const [year, setYear] = useQueryState("year", parseAsInteger)

  return {
    year,
    setYear,
  }
}
