import { Link } from 'gatsby'
import React from 'react'
import { WrapperHeader, Logo } from '../styles/components/header/header'

const Header = () => (
  <WrapperHeader>
    <Logo>Johan Petrikovsky</Logo>
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </WrapperHeader>
)

export default Header
