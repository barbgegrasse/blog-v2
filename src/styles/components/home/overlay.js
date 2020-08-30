import styled from '@emotion/styled'
import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const OverlayItem = styled('div')`
  position: absolute;
  width: calc(100% / 3);
  height: 100%;
  top: 0%;
  z-index: 99;
  &.first {
    background: #efbb35;
  }
  &.second {
    background: #efbb35;
    left: calc(100% / 3);
  }
  &.third {
    background: #efbb35;
    left: calc((100% / 3) * 2);
  }
`

export { OverlayItem }
