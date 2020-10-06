import styled from '@emotion/styled'
import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const WrapperHeaderLeft = styled('div')`
  z-index: 990;
  position: fixed;
  top: 32px;
  left: 0px;

  height: 100%;
  width: 32px;
  padding: 32 0px;

  display: flex;
  align-items: center;

  mix-blend-mode: exclusion;

  background-color: ${theme.colors.primary};

  &:after {
    content: '';
    position: fixed;
    top: 34px;
    left: 34px;

    width: 1px;
    height: 100%;

    right: -2px;
    background-color: ${theme.colors.primary};

    ${mediaQueries.mobile} {
      width: 100%;
      height: 1px;
      left: 0px;
      right: initial;
      top: initial;
      bottom: 34px;
    }
  }

  ${mediaQueries.mobile} {
    top: initial;
    bottom: 0;
    width: 100%;
    height: 32px;
  }

  nav {
    transform: rotate(-90deg);
    transform-origin: 16px;
    position: fixed;
    bottom: 64px;
    ul {
      font-size: 12px;
      display: flex;
      li {
        margin-left: 32px;
        a {
          color: ${theme.bg.main};
          font-family: ${theme.fonts.title};
          text-transform: uppercase;
        }
        &:first-of-type {
          margin-left: 0;
        }
      }
    }
  }
`

export { WrapperHeaderLeft }
