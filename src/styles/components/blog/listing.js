import styled from '@emotion/styled'
import mediaQueries from '../../global/mediaQueries'

const BlogGrid = styled('section')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5em;

  ${mediaQueries.tabletLandscape} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em;
  }
  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }
`

export { BlogGrid }
