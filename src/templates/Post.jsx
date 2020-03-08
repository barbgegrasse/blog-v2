import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import PostSlices from '../components/blog/PostSlices'
import { MainTitle } from '../styles/tags/title'

const Post = ({ data }) => (
  <>
    <MainTitle>{data.prismicPost.data.post_title.text}</MainTitle>
    <PostSlices slices={data.prismicPost.data.post_body} />
  </>
)

Post.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query postQuery($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      data {
        post_title {
          html
          text
        }
        post_hero_image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
        post_hero_annotation {
          text
        }
        post_body {
          ... on PrismicPostPostBodyText {
            slice_type
            primary {
              rich_text {
                html
              }
            }
          }
          ... on PrismicPostPostBodyHn {
            slice_type
            primary {
              hn {
                html
              }
            }
          }
          ... on PrismicPostPostBodyHighlightedText {
            slice_type
            primary {
              highlight_title {
                html
              }
            }
          }
          ... on PrismicPostPostBodyCodeSnippet {
            slice_type
            primary {
              code_snippet {
                html
                text
              }
              language {
                text
              }
            }
          }
          ... on PrismicPostPostBodyImage {
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                      presentationWidth
                    }
                  }
                }
              }
            }
            slice_type
          }
        }
      }
    }
  }
`

export default Post
