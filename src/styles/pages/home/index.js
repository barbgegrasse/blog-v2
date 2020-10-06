import styled from '@emotion/styled'
import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const GridHome = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }

  .left-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 64px;

    min-height: calc(100vh - 270px);
    ${mediaQueries.tabletLandscape} {
      padding-bottom: 32px;
    }
    ${mediaQueries.mobile} {
      padding-bottom: 16px;
      min-height: 100vh;
    }
  }

  .right-col {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mediaQueries.mobile} {
      display: none;
      min-height: 100vh;
    }
  }

  p {
    font-size: 24px;
    line-height: 1.4;
    padding-bottom: 20px;
  }
`

const MainTitle = styled('h1')`
  font-family: ${theme.fonts.title};
  font-size: max(4.8vw, 45px);
  text-align: left;
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

export { GridHome, SubTitle, MainTitle }
