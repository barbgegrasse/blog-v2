import React from 'react'

import Code from './slices/Code'
import Text from './slices/Text'
import Hn from './slices/Hn'
import HighLight from './slices/HighLight'
import Image from './slices/Image'
import { ArticleContainer } from '../../styles/components/blog/postSlices'

const PostSlices = ({ slices }) =>
  slices.map(slice => {
    console.log(slice)

    const res = (() => {
      switch (slice.__typename) {
        case 'PRISMIC_PostPost_bodyCode_snippet':
          return <Code slice={slice} />
        case 'PRISMIC_PostPost_bodyHighlightedText':
          return <HighLight slice={slice} />
        case 'PRISMIC_PostPost_bodyHn':
          return <Hn slice={slice} />
        case 'PRISMIC_PostPost_bodyText':
          return <Text slice={slice} />
        case 'PRISMIC_PostPost_bodyImage':
          return <Image slice={slice} />
        default:
          return false
      }
    })()
    return <ArticleContainer>{res}</ArticleContainer>
  })

export default PostSlices
