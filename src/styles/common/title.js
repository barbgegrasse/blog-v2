import styled from '@emotion/styled'
import theme from '../global/theme'
import mediaQueries from '../global/mediaQueries'

const MainTitle = styled('h1')`
  margin-bottom: 1em;

  text-align: center;
  font-size: max(4.8vw, 45px);

  line-height: 1.1;
  overflow: hidden;

  ${mediaQueries.desktopFlorent} {
    font-size: max(4.7vw, 45px);
  }

  .highlight {
    display: block;
    color: ${theme.colors.primary};
  }

  .toulouse {
    font-size: max(3.5vw, 30px);
    font-family: ${theme.fonts.main};
  }
`

export { MainTitle }
