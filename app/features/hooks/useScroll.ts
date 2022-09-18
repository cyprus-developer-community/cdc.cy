import React from 'react'

export const useScroll = () => {
  const isServer = typeof window === 'undefined'
  const [scroll, setScroll] = React.useState({
    x: isServer ? 0 : window.scrollX,
    y: isServer ? 0 : window.scrollY
  })

  React.useEffect(() => {
    const onScroll = () => {
      setScroll({ x: window.screenX, y: window.scrollY })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scroll
}
