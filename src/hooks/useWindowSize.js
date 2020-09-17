import { useState, useEffect } from 'react'
import { isBrowser } from '../utils/isBrowser'

export default function useWindowSize() {
  function getSize() {
    if (isBrowser) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }
    return {
      width: 1920,
      height: 1080,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  function handleResize() {
    setWindowSize(getSize())
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
