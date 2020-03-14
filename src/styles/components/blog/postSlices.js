import styled from '@emotion/styled'
import theme from '../../global/theme'

const ArticleContainer = styled('div')`
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
    font-weight: bold;
    color: ${theme.colors.important};
  }
`

export { ArticleContainer }
