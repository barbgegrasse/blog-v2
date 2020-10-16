import styled from '@emotion/styled'
import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const ExperiencesWrapper = styled('section')`
  position: relative;
  z-index: 20;
  padding: 0 20vw 64px;

  letter-spacing: 0.03em;

  ${mediaQueries.mobile} {
    padding: 0 8px;
  }

  p {
    line-height: 1.7;
    margin-bottom: 16px;
  }
  .highlight {
    font-family: ${theme.fonts.title};
    color: ${theme.colors.secondary};
  }
`

export { ExperiencesWrapper }
