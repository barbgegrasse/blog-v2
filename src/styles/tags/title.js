import styled from '@emotion/styled'
import theme from '../global/theme'

const MainTitle = styled('h1')`
  margin-bottom: 1em;
  text-align: center;
  color: ${theme.colors.primary};
  font-size: 3.7em;
  line-height: 1;
  font-family: ${theme.fonts.title};
  font-weight: 200;
  font-style: italic;
`

export { MainTitle }
