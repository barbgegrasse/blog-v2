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
  min-height: 100px;
  align-items: center;
  justify-content: space-between;
  max-width: ${theme.maxWidth};
  margin-left: auto;
  margin-right: auto;

  nav a {
    color: ${theme.colors.main};
    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  ${mediaQueries.tabletLandscape} {
    padding: 0 10px;
  }
`

export { HeaderContainer, HeaderBg }
