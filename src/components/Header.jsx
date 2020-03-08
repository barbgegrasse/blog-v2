import { Link } from 'gatsby'
import React from 'react'
import { HeaderContainer } from '../styles/components/header/header'

const Header = () => (
  <HeaderContainer>
    <Link to="/">Johan Petrikovsky</Link>
    <nav>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </HeaderContainer>
)

export default Header
