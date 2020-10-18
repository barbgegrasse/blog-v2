import { useEffect } from 'react'

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from 'locomotive-scroll'

const scroll = {
  // Locomotive Scroll
  // https://github.com/locomotivemtl/locomotive-scroll#instance-options
  container: '#___gatsby',
  options: {
    smooth: true,
    smoothMobile: false,
    getDirection: true,
    touchMultiplier: 2.5,
    lerp: 0.15,
  },
}

const Scroll = ({ callbacks, scrollRef }) => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      // el: document.querySelector(scroll.container),
      // el: scrollRef.current,
      el: document.querySelector(scroll.container),
      ...scroll.options,
    })
    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    locomotiveScroll.on('scroll', func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute('data-direction', 'up')
    })

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks, scrollRef])

  return null
}

export default Scroll
