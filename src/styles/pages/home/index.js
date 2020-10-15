import styled from '@emotion/styled'
import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const PresentationSection = styled('section')`
  padding-left: 20vw;
  min-height: calc(100vh - 48px);
  ${mediaQueries.tabletLandscape} {
    position: relative;
  }
  ${mediaQueries.mobile} {
    position: relative;
    min-height: calc(100vh - 16px);
  }

  p {
    font-size: 24px;
    line-height: 1.4;
    padding-bottom: 20px;
  }
`
const WrapperTitle = styled('div')`
  position: relative;
  z-index: 20;
  padding-top: 15vw;

  ${mediaQueries.tabletLandscape} {
    position: absolute;
    bottom: 16px;
    left: 32px;
    padding-top: 0;
  }

  ${mediaQueries.mobile} {
    bottom: 32px;
    left: 8px;
  }
`

const MainTitle = styled('h1')`
  font-family: ${theme.fonts.title};
  font-size: max(4.8vw, 45px);
  text-align: left;
  line-height: 1.1;
  text-transform: uppercase;
  z-index: 20;

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
    text-transform: capitalize;
  }
`

const SubTitle = styled('div')`
  margin-bottom: 64px;
  position: relative;
  letter-spacing: 0.08em;
  overflow: hidden;
  text-transform: uppercase;
  font-size: 0.8em;

  ${mediaQueries.tabletLandscape} {
    margin-bottom: 32px;
  }

  ${mediaQueries.mobile} {
    margin-bottom: 16px;
  }

  .sep {
    display: block;
    width: 64px;
    height: 2px;
    margin-top: 32px;
    transform: scaleX(1);
    transform-origin: top left;
    background-color: ${theme.border.primary};
  }
`

export { PresentationSection, SubTitle, MainTitle, WrapperTitle }
