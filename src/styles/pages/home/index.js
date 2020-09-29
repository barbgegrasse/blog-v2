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

    min-height: calc(100vh - 270px);
    ${mediaQueries.mobile} {
      padding-bottom: 30px;
      min-height: 100vh;
    }
  }

  .right-col {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mediaQueries.mobile} {
      min-height: 100vh;
    }
  }

  h1 {
    margin-bottom: 64px;
    text-align: left;
    font-family: ${theme.fonts.title};
  }

  p {
    font-size: 24px;
    line-height: 1.4;
    padding-bottom: 20px;
  }
`

const SubTitle = styled('div')`
  margin-bottom: 64px;
  position: relative;
  letter-spacing: 0.08em;
  overflow: hidden;
  text-transform: uppercase;
  font-size: 0.8em;

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

export { GridHome, SubTitle }
