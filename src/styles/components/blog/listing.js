import styled from '@emotion/styled'
import mediaQueries from '../../global/mediaQueries'

const BlogGrid = styled('section')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5em;
  padding: 0 32px 0 64px;

  &:hover .card:not(:hover) {
    opacity: 0.6;
    scale: 0.95;
  }

  ${mediaQueries.desktopFlorent} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em;
  }

  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
    padding: 0 8px;
  }
`

export { BlogGrid }
