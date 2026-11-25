A small reproducer of [react#36594](https://github.com/react/react/issues/36594) in Next.js.

To demonstrate, do the following:

```sh
npm ci
npm run build
npm start
```

Then go to <http://localhost:3000> and click "Go to B" before the page finishes loading (you have five seconds).

The app will appear to navigate to "/b", and the navigation header will update, but the root page content will still be shown.

## Applying react#36595

Claude authored a patch to demonstrate the fix ([react#36595](https://github.com/react/react/pull/36595)).

To run:

```sh
npm run react-36595:apply
npm run build
npm start
```

To undo the patch, run `npm run react-36595:remove` and rebuild.

## Workaround

The `nextjs-workaround` branch demonstrates a workaround.
A suspense can be replaced by `NavigationSafeSuspense` if a page navigation event might change the expected contents of the suspense before the suspense finishes loading.
(If a page navigation would remove the suspense component itself, the workaround is not necessary.)
The workaround component calls `useSelectedLayoutSegments()`, which will force the suspense to re-render if the route changes.

If you are using React Compiler, `'use no memo'` is necessary to keep React Router from optimizing away the fix and thus reintroducing the bug.

```jsx
'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import { Suspense } from 'react'

/**
 * Workaround for https://github.com/react/react/issues/36594.
 */
export function NavigationSafeSuspense(props) {
  'use no memo'
  useSelectedLayoutSegments()
  return <Suspense {...props} />
}
```
