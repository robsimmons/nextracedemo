'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Nav() {
  const pathname = usePathname()
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])
  return (
    <nav data-hydrated={hydrated}>
      {pathname === "/b" ? "On Page B" : <Link href="/b">Go to B</Link>}
      <div>usePathname() returns <output>{pathname}</output></div>
    </nav>
  )
}
