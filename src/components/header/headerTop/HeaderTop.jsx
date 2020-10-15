import React from 'react'

import Logo from '../../../images/assets/logo.svg'
import {
  HeaderTopWrapper,
  LogoWrapper,
  Name,
  LinkGatsby,
} from '../../../styles/components/header/headerTop'

const HeaderTop = () => (
  <HeaderTopWrapper>
    <LogoWrapper>
      <Logo />
      {/* <Name>
        Johan <span className="name">Petrikovsky</span>
      </Name> */}
    </LogoWrapper>
    <nav>
      <ul>
        <li>
          <LinkGatsby to="/">Développeur Web</LinkGatsby>
        </li>
        <li>
          <LinkGatsby to="/blog/">Blog</LinkGatsby>
        </li>
      </ul>
    </nav>
  </HeaderTopWrapper>
)

export default HeaderTop
