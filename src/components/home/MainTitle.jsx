import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Expo } from 'gsap'
import { MainTitle } from '../../styles/tags/title'

const BlockMaintTitle = ({ tl, homeAnimation }) => {
  const refTitle1 = useRef(null)
  const refTitle2 = useRef(null)

  useEffect(() => {
    if (homeAnimation) {
      tl.current.from(
        refTitle1.current,
        1,
        {
          opacity: 0,
          y: '50%',
          ease: Expo.easeInOut,
        },
        '-=0.8'
      )

      tl.current.from(
        refTitle2.current,
        1,
        {
          opacity: 0,
          y: '50%',
          ease: Expo.easeInOut,
        },
        '-=0.8'
      )
    }
  })

  return (
    <MainTitle as="h1">
      Développeur Web à Toulouse.
      {/* <span className="hide-text">
        <span className="d-block" ref={refTitle1}>
 
        </span>
      </span>
      <span className="hide-text">
        <span className="d-block" ref={refTitle2}>
          
        </span>
      </span> */}
    </MainTitle>
  )
}

BlockMaintTitle.propTypes = {
  homeAnimation: PropTypes.bool.isRequired,
  tl: PropTypes.object.isRequired,
}

export default BlockMaintTitle
