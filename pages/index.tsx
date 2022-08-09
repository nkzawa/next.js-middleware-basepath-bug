import Link from 'next/link'

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <Link href="/hello">
      <a>Go to hello but should be redirected</a>
    </Link>
  )
}
