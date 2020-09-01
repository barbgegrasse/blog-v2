import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PostSlices from '../components/blog/PostSlices'
import { MainTitle } from '../styles/tags/title'
import SEO from '../components/seo'
import Layout from '../components/Layout'

const Post = ({ data: { prismicPost } }) => (
  <Layout>
    <SEO
      title={prismicPost.data.post_title.text}
      description={prismicPost.data.post_preview_description.text}
    />
    <MainTitle>{prismicPost.data.post_title.text}</MainTitle>
    <Img
      style={{
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '60px',
        maxWidth: prismicPost.data.post_hero_image.dimensions.width,
        maxHeight: prismicPost.data.post_hero_image.dimensions.height,
      }}
      fluid={prismicPost.data.post_hero_image.localFile.childImageSharp.fluid}
    />
    <PostSlices slices={prismicPost.data.post_body} />
  </Layout>
)

Post.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      id
      data {
        post_title {
          text
        }
        post_preview_description {
          text
        }
        post_body {
          ... on PrismicPostPostBodyText {
            id
            primary {
              rich_text {
                html
              }
            }
            slice_type
          }
          ... on PrismicPostPostBodyHn {
            id
            primary {
              hn {
                html
              }
            }
          }
          ... on PrismicPostPostBodyCodeSnippet {
            id
            primary {
              code_snippet {
                text
              }
              language {
                text
              }
            }
          }
          ... on PrismicPostPostBodyHighlightedText {
            id
            primary {
              highlight_title {
                html
              }
            }
            slice_type
          }
          ... on PrismicPostPostBodyImage {
            id
            primary {
              image {
                dimensions {
                  height
                  width
                }
                localFile {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
        post_hero_image {
          dimensions {
            height
            width
          }
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
export default Post
