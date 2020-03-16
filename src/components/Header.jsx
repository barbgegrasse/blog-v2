import { Link } from 'gatsby'
import React from 'react'
import { HeaderContainer } from '../styles/components/header/header'
import logo from '../images/logo.svg'

const Header = () => (
  <HeaderContainer>
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </HeaderContainer>
)

export default Header
