import styled from '@emotion/styled'
import mediaQueries from '../../global/mediaQueries'

const ArticleContainer = styled('div')`
  padding: 0 32px 0 64px;

  ${mediaQueries.mobile} {
    padding: 0 8px;
  }

  .block-img {
    img {
      max-width: 100%;
    }
  }
  line-height: 1.5;
  p,
  ul,
  ol {
    margin-bottom: 20px;
  }
  ul,
  ol {
    margin-left: 20px;
    list-style-type: initial;
  }
  em {
    font-style: italic;
  }
`

export { ArticleContainer }
