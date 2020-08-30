import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from '../styles/global/Global'
import Header from './Header'
import { MainContainer, GlobalWrapper } from '../styles/global/layout'

const Layout = ({ children }) => (
  <GlobalWrapper>
    <GlobalStyle />
    <Header />

    <MainContainer className="max-container">{children}</MainContainer>
    <footer className="max-container">
      © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org"> Gatsby</a>
    </footer>
  </GlobalWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
