import styled from '@emotion/styled'
import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const Logo = styled('p')`
  font-size: 16px;
  font-weight: 200;
`

const HeaderBg = styled('header')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
`

const WrapperHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${theme.maxWidth};
  margin-left: auto;
  margin-right: auto;

  nav a {
    color: ${theme.colors.main};
    margin-left: 20px;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`

export { WrapperHeader, HeaderBg, Logo }
