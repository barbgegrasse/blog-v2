import styled from '@emotion/styled'
import theme from '../global/theme'
import mediaQueries from '../global/mediaQueries'

const MainTitle = styled('h1')`
  margin-bottom: 1em;

  text-align: center;
  color: ${theme.colors.primary};
  font-size: 3.7em;
  line-height: 1;
  font-family: ${theme.fonts.title};
  font-weight: 200;
  font-style: italic;

  ${mediaQueries.desktopFlorent} {
    font-size: 3.5em;
  }

  ${mediaQueries.tabletLandscape} {
    font-size: 3.2em;
  }

  ${mediaQueries.mobile} {
    font-size: 2em;
  }
`

export { MainTitle }
