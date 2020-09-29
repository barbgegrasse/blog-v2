import PropTypes from 'prop-types'
import React, { useRef, useEffect, useContext } from 'react'
import gsap, { Power1 } from 'gsap'

import Twitter from '../../images/assets/twitter.svg'
import Linkedin from '../../images/assets/linkedin.svg'
import { myContext } from '../../../provider'

import {
  SocialWrapper,
  LogoWrapper,
} from '../../styles/components/header/social'

const SocialIcons = () => {
  const { current: socialTL } = useRef(gsap.timeline({ paused: true }))
  const contextValues = useContext(myContext)
  const { shouldLayoutAnimate } = contextValues
  useEffect(() => {
    if (shouldLayoutAnimate) {
      socialTL.from(
        '.logo-wrapper',
        {
          opacity: 0,
          left: '-=50%',
          duration: 0.5,
          ease: Power1.easeOut,
          stagger: 0.5,
        },
        '+=0.2'
      )
      socialTL.play()
    }
  })

  return (
    <SocialWrapper>
      <div className="o-hidden">
        <LogoWrapper className="logo-wrapper">
          <Linkedin />
        </LogoWrapper>
      </div>
      <div className="o-hidden">
        <LogoWrapper className="logo-wrapper">
          <Twitter />
        </LogoWrapper>
      </div>
    </SocialWrapper>
  )
}

SocialIcons.propTypes = {
  layoutTL: PropTypes.shape({
    from: PropTypes.func,
  }),
}
export default SocialIcons
