import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Expo } from 'gsap'
import illu from '../../images/web_developer.svg'

const BlockIllu = ({ tl }) => {
  const refIllu = useRef(null)

  useEffect(() => {
    tl.current.from(
      refIllu.current,
      1.0,
      {
        opacity: 0,
        x: '20%',
        ease: Expo.easeInOut,
      },
      '-=0'
    )
  })

  return (
    <div className="hide-text">
      <img ref={refIllu} src={illu} alt="" />
    </div>
  )
}

BlockIllu.propTypes = {
  tl: PropTypes.shape({
    current: PropTypes.shape({
      from: PropTypes.func,
    }),
  }),
}

export default BlockIllu
