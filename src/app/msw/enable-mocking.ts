export async function enableMocking() {
  try {
    if (process && process.env.MOCK !== "true") {
      return
    }

    const { worker } = await import("./browser")

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    await worker.start({
      onUnhandledRequest(req, print) {
        if (req.url.match(/\.(png|jpg|svg|tsx?|css|scss|jsx?|woff2)/)) {
          return
        }

        print.warning()
      },
    })
  } catch (e) {
    console.error(e)
  }
}
