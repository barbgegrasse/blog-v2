import styled from '@emotion/styled'
import mediaQueries from './mediaQueries'

const MainContainer = styled('main')`
  /* padding-top: 80px; */
  flex-grow: 1;
  ${mediaQueries.tabletLandscape} {
    padding-top: 40px;
  }
  ${mediaQueries.mobile} {
    padding: 20px 0 60px 0;
  }
`

const GlobalWrapper = styled('div')`
  display: grid;
  grid-template-rows: 100px auto 100px;
  min-height: 100vh;
`

const FooterWrapper = styled('footer')`
  margin-top: 2em;
  margin-bottom: 1em;
`

export { MainContainer, GlobalWrapper, FooterWrapper }
