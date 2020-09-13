import styled from '@emotion/styled'
import theme from '../global/theme'
import mediaQueries from '../global/mediaQueries'

const MainTitle = styled('h1')`
  margin-bottom: 1em;

  text-align: center;
  font-size: 4.8vw;
  line-height: 1;

  .highlight {
    display: block;
  }
  .toulouse {
    font-size: 3.5vw;
    font-family: ${theme.fonts.main};
  }
`

export { MainTitle }
