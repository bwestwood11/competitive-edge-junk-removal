import Link from "next/link";


export default function NotFound() {
  return (
    <>
    <h1 className="pt-48">The requested post does not exist.</h1>
    <Link href='/'>Back to Home </Link>
    </>
  )
}
