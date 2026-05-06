import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="mt-3 text-blue-500 underline" href="/">
        Return Home
      </Link>
    </div>
  )
}
