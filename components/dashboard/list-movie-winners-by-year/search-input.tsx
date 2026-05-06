import { Search } from "lucide-react"
import Form from "next/form"

export function SearchInput({ year }: { year?: number }) {
  return (
    <Form action="/">
      <div className="mx-3 mt-2 mb-4 flex items-stretch gap-2">
        <input
          type="number"
          name="year"
          placeholder="Search by year"
          className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500"
          defaultValue={year || ""}
        />
        <button
          type="submit"
          className="flex items-center justify-center rounded bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </Form>
  )
}
