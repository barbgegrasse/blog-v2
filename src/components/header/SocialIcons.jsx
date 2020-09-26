import React, { useRef, useEffect, useContext } from 'react'

import Twitter from '../../images/assets/twitter.svg'
import Linkedin from '../../images/assets/linkedin.svg'
import { myContext } from '../../../provider'

import {
  SocialWrapper,
  LogoWrapper,
} from '../../styles/components/header/social'

const SocialIcons = () => (
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

export default SocialIcons
