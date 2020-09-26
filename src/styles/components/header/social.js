import styled from '@emotion/styled'
import mediaQueries from '../../global/mediaQueries'

const SocialWrapper = styled('div')`
  position: fixed;
  bottom: 88px;
  width: 88px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px 0;

  .item-logo {
    background: yellow;
  }

  ${mediaQueries.tabletLandscape} {
    width: 44px;
  }

  ${mediaQueries.mobile} {
    width: 22px;
  }
`

const LogoWrapper = styled('div')`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  pointer-events: auto;
  opacity: 1;
  left: 0;
  svg {
    fill: #fff;
  }
`

export { LogoWrapper, SocialWrapper }
