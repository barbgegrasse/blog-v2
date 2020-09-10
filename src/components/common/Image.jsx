import PropTypes from 'prop-types'
import React from 'react'

import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

const Image = ({ src, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n =>
        n.node.relativePath.includes(src)
      )
      if (!image) {
        return null
      }

      console.info(image.node)

      const imageSizes = image.node.childImageSharp.sizes
      return (
        <Img
          alt={alt}
          fluid={image.node.childImageSharp.fluid}
          sizes={imageSizes}
        />
      )
    }}
  />
)

export default Image

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}
