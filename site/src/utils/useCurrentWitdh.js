import { useState, useEffect } from "react"

const getWidth = () =>
  window.innerWidth ||
  document.documentElement?.clientWidth ||
  document.body?.clientWidth

/**
 * React hook to calculate the window width.
 *
 * Source: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c
 */
export default function useCurrentWitdh() {
  // save current window width in the state object
  const [width, setWidth] = useState(getWidth())

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId)
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }
    // set resize listener
    window.addEventListener("resize", resizeListener)

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return width
}
