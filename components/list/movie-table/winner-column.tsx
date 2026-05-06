import { ChevronDown } from "lucide-react"
import Th from "../../shared/table/th"
import useWinner from "../params/use-winner"
import usePage from "../params/use-page"

export default function WinnerColumn() {
  const { setPage } = usePage()
  const { setWinner } = useWinner()

  const onWinnerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setPage(1)

    if (value === "yes") {
      setWinner(true)
      return
    }
    if (value === "no") {
      setWinner(false)
      return
    }

    setWinner(null)
  }

  return (
    <Th>
      <div className="flex flex-col gap-1">
        <span className="text-center">Winner?</span>
        <div className="relative">
          <select
            aria-label="Filter by winner"
            className="w-full appearance-none rounded-sm border border-gray-300 bg-white px-2 py-1.5 text-center text-xs font-normal"
            onChange={onWinnerChange}
          >
            <option value="all">Yes/No</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 text-gray-600" />
        </div>
      </div>
    </Th>
  )
}
