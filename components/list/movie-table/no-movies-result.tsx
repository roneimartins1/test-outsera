import Tr from "../../shared/table/tr"
import Td from "../../shared/table/td"

interface NoMoviesResultProps {
  isPending: boolean
}

export default function NoMoviesResult({ isPending }: NoMoviesResultProps) {
  return (
    <Tr variant="head">
      <Td
        colSpan={4}
        role="status"
        aria-live="polite"
        className="px-4 py-8 text-center text-gray-400 italic"
        data-testid="no-movies-result"
      >
        {isPending ? "Loading..." : "No movies match your filters"}
      </Td>
    </Tr>
  )
}
