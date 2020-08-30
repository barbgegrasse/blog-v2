import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Expo } from 'gsap'
import { MainTitle } from '../../styles/tags/title'

const BlockMaintTitle = ({ tl }) => {
  const refTitle1 = useRef(null)
  const refTitle2 = useRef(null)

  useEffect(() => {
    tl.current.from(
      refTitle1.current,
      1,
      {
        y: '100%',
        ease: Expo.easeInOut,
      },
      '-=0.8'
    )

    tl.current.from(
      refTitle2.current,
      1,
      {
        y: '100%',
        ease: Expo.easeInOut,
      },
      '-=0.8'
    )
  })

  return (
    <MainTitle as="h1">
      <span className="hide-text">
        <span className="d-block" ref={refTitle1}>
          Développeur
        </span>
      </span>
      <span className="hide-text">
        <span className="d-block" ref={refTitle2}>
          front-end à Toulouse.
        </span>
      </span>
    </MainTitle>
  )
}

BlockMaintTitle.propTypes = {
  tl: PropTypes.object.isRequired,
}

export default BlockMaintTitle
