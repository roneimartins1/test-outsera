import { Search } from "lucide-react"
import Form from "next/form"

export function SearchInput({ year }: { year?: number }) {
  return (
    <Form action="/">
      <div className="mx-3 mt-2 mb-4 flex flex-col gap-1">
        <label htmlFor="search-year-input" className="sr-only">
          Search by year
        </label>
        <div className="flex items-stretch gap-2">
          <input
            id="search-year-input"
            type="number"
            name="year"
            placeholder="Search by year"
            className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500"
            defaultValue={year || ""}
            data-testid="year-input"
          />
          <button
            type="submit"
            aria-label="Search movies by year"
            className="flex items-center justify-center rounded bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
            data-testid="search-button"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </Form>
  )
}
