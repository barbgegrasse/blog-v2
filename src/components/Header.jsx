import { Link } from 'gatsby'
import React from 'react'

import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/all'

import Logo from '../images/assets/logo.svg'

import {
  WrapperHeader,
  LineWrapper,
  Line,
  LogoWrapper,
} from '../styles/components/header/header'

gsap.registerPlugin(DrawSVGPlugin)

const Header = () => (
  <>
    <LineWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Line className="line horizontal1" />
      <Line className="line horizontal2" />
      <Line className="line close1" />
      <Line className="line vertical1" />
      <Line className="line vertical2" />
      <Line className="line close2" />
    </LineWrapper>
    <WrapperHeader>
      <nav>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/">Bio</Link>
          </li>
        </ul>
      </nav>
    </WrapperHeader>
  </>
)

export default Header
