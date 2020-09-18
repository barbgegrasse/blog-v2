import PropTypes from 'prop-types'
import React from 'react'
import loadable from '@loadable/component'

const Code = loadable(() => import('./slices/Code'))
const Hn = loadable(() => import('./slices/Hn'))
const HighLight = loadable(() => import('./slices/HighLight'))
const Image = loadable(() => import('./slices/Image'))
const Text = loadable(() => import('./slices/Text'))

const PostSlices = ({ slices }) =>
  slices.map(slice => {
    const result = (() => {
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
    return result
  })

PostSlices.propTypes = {
  slices: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }),
}

export default PostSlices
