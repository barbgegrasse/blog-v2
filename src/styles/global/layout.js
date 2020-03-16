import styled from '@emotion/styled'
import mediaQueries from './mediaQueries'

const MainContainer = styled('main')`
  padding-top: 80px;

  ${mediaQueries.tabletLandscape} {
    padding-top: 40px;
  }
  ${mediaQueries.mobile} {
    padding: 20px 0 60px 0;
  }
`

export { MainContainer }
