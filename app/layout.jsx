import { Nav } from './nav'
import { NavigationSafeSuspense } from './workaround'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <NavigationSafeSuspense fallback={<p>Loading! If usePathname() is returning "/", then hit "Go to B" before loading finishes to trigger the bug.</p>}>
          {children}
        </NavigationSafeSuspense>
      </body>
    </html>
  )
}
