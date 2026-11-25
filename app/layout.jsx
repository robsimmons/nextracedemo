import { Suspense } from 'react'
import { Nav } from './nav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Suspense fallback={<p>Loading! If usePathname() is returning "/", then hit "Go to B" before loading finishes to trigger the bug.</p>}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
