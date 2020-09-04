import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { Expo } from 'gsap'
import illu from '../../images/web_developer222.svg'

const IllustrationWrapper = styled('div')``

const BlockIllu = ({ tl, homeAnimation }) => {
  const refIllu = useRef(null)

  useEffect(() => {
    if (homeAnimation) {
      tl.current.from(
        refIllu.current,
        1.0,
        {
          opacity: 0,
          x: '10%',
          ease: Expo.easeOut,
        },
        '-=0.5'
      )
    }
  })

  return (
    <IllustrationWrapper className="hide-text">
      <img
        ref={refIllu}
        src={illu}
        alt="Développeur web à Toulouse"
        title="Développeur Web à Toulouse"
      />
    </IllustrationWrapper>
  )
}

BlockIllu.propTypes = {
  homeAnimation: PropTypes.any,
  tl: PropTypes.shape({
    current: PropTypes.shape({
      from: PropTypes.func,
    }),
  }),
}

export default BlockIllu
