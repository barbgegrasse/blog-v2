import styled from '@emotion/styled'
import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const GridHome = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100%;

  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }

  .left-col {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .right-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin-bottom: 1em;
    text-align: left;
    font-family: ${theme.fonts.title};
  }

  p {
    font-size: 24px;
    line-height: 1.4;
    padding-bottom: 20px;
  }
`

export { GridHome }
