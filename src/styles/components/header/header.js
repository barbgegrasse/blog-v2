import styled from '@emotion/styled'
import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const HeaderBg = styled('header')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
`

const HeaderContainer = styled('div')`
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

  ${mediaQueries.tabletLandscape} {
    padding: 0 10px;
  }
`

export { HeaderContainer, HeaderBg }
