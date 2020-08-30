import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { Expo } from 'gsap'
import illu from '../../images/web_developer.svg'

const IllustrationWrapper = styled('div')`
  flex-grow: 1;
`

const BlockIllu = ({ tl }) => {
  const refIllu = useRef(null)

  useEffect(() => {
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
  })

  return (
    <IllustrationWrapper className="hide-text">
      <img ref={refIllu} src={illu} alt="" />
    </IllustrationWrapper>
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
