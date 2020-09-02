import React from 'react'

import Code from './slices/Code'
import Text from './slices/Text'
import Hn from './slices/Hn'
import HighLight from './slices/HighLight'
import Image from './slices/Image'

const PostSlices = ({ slices }) =>
  slices.map(slice => {
    const result = (() => {
      switch (slice.__typename) {
        case 'PrismicPostPostBodyCodeSnippet':
          return <Code style={{ contentVisibility: 'auto' }} slice={slice} />
        case 'PrismicPostPostBodyHighlightedText':
          return (
            <HighLight style={{ contentVisibility: 'auto' }} slice={slice} />
          )
        case 'PrismicPostPostBodyHn':
          return <Hn style={{ contentVisibility: 'auto' }} slice={slice} />
        case 'PrismicPostPostBodyText':
          return <Text style={{ contentVisibility: 'auto' }} slice={slice} />
        case 'PrismicPostPostBodyImage':
          return <Image style={{ contentVisibility: 'auto' }} slice={slice} />
        default:
          return false
      }
    })()
    return result
  })

export default PostSlices
