import styled from '@emotion/styled'
import theme from '../global/theme'

const ClassicText = styled('div')`
  max-width: ${theme.maxWidthContent};
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  padding-bottom: 32px;
  p {
    margin-bottom: 32px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export { ClassicText }
