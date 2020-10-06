import styled from '@emotion/styled'
import Link from 'gatsby-plugin-transition-link'

import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const HeaderTopWrapper = styled('div')`
  z-index: 990;
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 32px;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  mix-blend-mode: exclusion;
  background-color: ${theme.colors.primary};

  ${mediaQueries.mobile} {
    padding: 0 8px;
  }

  ul {
    font-size: 16px;
    display: flex;
    li {
      margin-left: 32px;
      &:first-of-type {
        margin-left: 0;
      }
    }
  }

  &:after {
    content: '';
    position: fixed;
    width: 100%;
    top: 34px;
    left: 34px;
    height: 1px;
    bottom: -2px;
    background-color: ${theme.colors.primary};

    ${mediaQueries.mobile} {
      left: 0px;
    }
  }
`

const LinkGatsby = styled(Link)`
  color: ${theme.bg.main};
  font-family: ${theme.fonts.title};
  text-transform: uppercase;
`

const Name = styled('div')`
  display: block;
  color: #000;
  font-size: 16px;
  margin-left: 8px;
  .name {
    font-family: ${theme.fonts.title};
    text-transform: uppercase;
  }

  ${mediaQueries.mobile} {
    display: none;
  }
`
const LogoWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    max-width: 30px;
    max-height: 30px;
  }
`

export { HeaderTopWrapper, LogoWrapper, Name, LinkGatsby }
