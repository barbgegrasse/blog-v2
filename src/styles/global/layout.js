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
  ${mediaQueries.tabletLandscape} {
    padding: 60px 0 0 60px;
  }
  ${mediaQueries.mobile} {
    padding: 30px 0 0 30px;
  }
`

const MainContainer = styled('main')`
  padding: 120px 64px 0 64px;
  ${mediaQueries.tabletLandscape} {
    padding: 60px 32px 0 32px;
  }
  ${mediaQueries.mobile} {
    padding: 30px 16px 0 16px;
  }
`

export { MainContainer, GlobalWrapper, ScrollWrapper }
