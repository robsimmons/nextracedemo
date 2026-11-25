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

Claude authored a patch to demonstrate the Claude-authored fix ([react#36595](https://github.com/react/react/pull/36595)).

To run:

```sh
npm run react-36595:apply
npm run build
npm start
```

To undo the patch, run `npm run react-36595:remove` and rebuild.
