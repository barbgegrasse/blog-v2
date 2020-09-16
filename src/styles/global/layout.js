import styled from '@emotion/styled'
import mediaQueries from './mediaQueries'

const GlobalWrapper = styled('div')`
  min-height: 100vh;
  visibility: hidden;
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

export { MainContainer, GlobalWrapper }
