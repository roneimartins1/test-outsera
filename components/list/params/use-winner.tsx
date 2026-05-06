import { parseAsBoolean, useQueryState } from "nuqs"

export default function useWinner() {
  const [winner, setWinner] = useQueryState("winner", parseAsBoolean)

  return {
    winner,
    setWinner,
  }
}
