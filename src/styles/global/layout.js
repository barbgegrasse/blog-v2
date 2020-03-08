import styled from '@emotion/styled'
import mediaQueries from './mediaQueries'

const MainContainer = styled('main')`
  padding-top: 80px;

  ${mediaQueries.tabletLandscape} {
    padding-top: 40px;
  }
  ${mediaQueries.mobile} {
    padding-top: 20px;
  }
`

export { MainContainer }
