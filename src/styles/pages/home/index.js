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
  }

  .right-col {
    display: flex;
    align-items: center;
    justify-content: center;
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

  .sep {
    display: block;
    width: 64px;
    height: 2px;
    margin-top: 32px;
    background-color: ${theme.border.primary};
  }
`

export { GridHome, SubTitle }
