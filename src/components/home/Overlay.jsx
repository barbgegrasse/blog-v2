import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Expo } from 'gsap'
import { OverlayItem } from '../../styles/components/home/overlay'

const Overlay = ({ tl }) => {
  const overlay1 = useRef(null)
  const overlay2 = useRef(null)
  const overlay3 = useRef(null)

  useEffect(() => {
    tl.current.to(overlay1.current, 1.5, {
      delay: 0.5,
      top: '-100%',
      ease: Expo.easeInOut,
    })

    tl.current.to(
      overlay2.current,
      1.5,
      {
        top: '-100%',
        ease: Expo.easeInOut,
      },
      '-=1.3'
    )
    tl.current.to(
      overlay3.current,
      1.5,
      {
        top: '-100%',
        ease: Expo.easeInOut,
      },
      '-=1.3'
    )
  })

  return (
    <>
      <OverlayItem ref={overlay1} className="first" />
      <OverlayItem ref={overlay2} className="second" />
      <OverlayItem ref={overlay3} className="third" />
    </>
  )
}

Overlay.propTypes = {
  tl: PropTypes.object.isRequired,
}

export default Overlay
