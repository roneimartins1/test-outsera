import { useState } from "react"
import Th from "../../shared/table/th"
import usePage from "../params/use-page"
import useYear from "../params/use-year"

export default function YearColumn() {
  const [yearInput, setYearInput] = useState("")

  const { setPage } = usePage()
  const { setYear } = useYear()

  const handleYearSearch = () => {
    const value = yearInput.trim()
    setPage(1)
    if (value === "") {
      setYear(null)
      return
    }
    const convertedYear = Number(value)
    if (Number.isInteger(convertedYear) && convertedYear > 0) {
      setYear(convertedYear)
    } else {
      setYear(null)
    }
  }

  const handleYearKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "NumpadEnter") {
      event.preventDefault()
      handleYearSearch()
    }
  }

  return (
    <Th className="border-r border-stone-300">
      <div className="flex flex-col gap-1">
        <span className="text-center">Year</span>
        <input
          type="number"
          placeholder="Filter by year"
          aria-label="Filter by year"
          className="w-full rounded-sm border border-stone-300 bg-white px-2 py-1.5 text-xs font-normal"
          value={yearInput}
          onChange={(event) => setYearInput(event.target.value)}
          onKeyDown={handleYearKeyDown}
        />
      </div>
    </Th>
  )
}
