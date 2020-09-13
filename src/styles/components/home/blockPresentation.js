import styled from '@emotion/styled'
import theme from '../../global/theme'

const PresentationWrapper = styled('div')`
  margin-top: 64px;
  font-size: 3vw;
  letter-spacing: 0.03em;
  p {
    line-height: 1.5;
  }
  .highlight {
    font-family: ${theme.fonts.title};
    color: ${theme.colors.secondary};
  }
`

export { PresentationWrapper }
