import styled from '@emotion/styled'
import mediaQueries from './mediaQueries'

const ScrollWrapper = styled('div')`
  min-height: 100vh;
`

const GlobalWrapper = styled('div')`
  height: 100%;
  width: 100%;
  overflow: auto;

  min-height: 100vh;
  /* visibility: hidden; */
  padding: 120px 0 0 120px;
`

const MainContainer = styled('main')`
  padding: 120px 64px 0 64px;
  ${mediaQueries.tabletLandscape} {
    padding-top: 40px;
  }
  ${mediaQueries.mobile} {
    padding: 20px 0 60px 0;
  }
`

export { MainContainer, GlobalWrapper, ScrollWrapper }
