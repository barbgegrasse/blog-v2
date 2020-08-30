import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from '../styles/global/Global'
import Header from './Header'
import {
  MainContainer,
  GlobalWrapper,
  FooterWrapper,
} from '../styles/global/layout'

const Layout = ({ children }) => (
  <GlobalWrapper>
    <GlobalStyle />
    <Header />

    <MainContainer className="max-container">{children}</MainContainer>
    <FooterWrapper className="max-container">
      © {new Date().getFullYear()}, Construit avec passion
      <a href="https://www.gatsbyjs.org"> Gatsby</a> et{' '}
      <a href="https://prismic.io/">Prismic</a>
    </FooterWrapper>
  </GlobalWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
