import React from 'react'

import Code from './slices/Code'
import Text from './slices/Text'
import Hn from './slices/Hn'
import HighLight from './slices/HighLight'
import Image from './slices/Image'
import { ArticleContainer } from '../../styles/components/blog/postSlices'

const PostSlices = ({ slices }) =>
  slices.map(slice => {
    const res = (() => {
      switch (slice.__typename) {
        case 'PrismicPostPostBodyCodeSnippet':
          return <Code slice={slice} />
        case 'PrismicPostPostBodyHighlightedText':
          return <HighLight slice={slice} />
        case 'PrismicPostPostBodyHn':
          return <Hn slice={slice} />
        case 'PrismicPostPostBodyText':
          return <Text slice={slice} />
        case 'PrismicPostPostBodyImage':
          return <Image slice={slice} />
        default:
          return false
      }
    })()
    return <ArticleContainer>{res}</ArticleContainer>
  })

export default PostSlices
