import styled from '@emotion/styled'
import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const ExperiencesWrapper = styled('section')`
  position: relative;
  z-index: 20;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 0 64px 0;

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

const GridPresentation = styled('div')`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 64px;
  margin: 64px 0 0 0;
`

const Intro = styled('p')`
  font-size: 24px;
  line-height: 1;
  max-width: 980px;
  margin-top: 64px;
`

const BonjourTxt = styled('p')`
  font-size: 24px;
  line-height: 1;
  padding-bottom: 128px;
  strong {
    font-size: 32px;
    text-transform: uppercase;
  }
`

const ServicesWrapper = styled(ExperiencesWrapper)`
  padding-bottom: 120px;
`

export {
  ExperiencesWrapper,
  ServicesWrapper,
  GridPresentation,
  BonjourTxt,
  Intro,
}
