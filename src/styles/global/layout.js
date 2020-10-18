import styled from '@emotion/styled'
import mediaQueries from './mediaQueries'

const MainContainer = styled('main')`
  padding: 120px 0 0 0px;
  ${mediaQueries.tabletLandscape} {
    padding: 60px 32px 0 32px;
  }
  ${mediaQueries.mobile} {
    padding: 30px 8px 0 8px;
  }
`

const Footer = styled('footer')`
  padding: 64px 120px 64px 64px;
  line-height: 1.2;
  text-align: center;

  ${mediaQueries.tabletLandscape} {
    padding: 32px 60 32px 32px;
  }
  ${mediaQueries.mobile} {
    padding: 16px 30 16px 16px;
  }
`

export { MainContainer, Footer }
