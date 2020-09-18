import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/Layout'

import PostContent from '../content/PostContent'
import { myContext } from '../../provider'

const Post = ({ data: { prismicPost } }) => {
  const contextValues = useContext(myContext)
  contextValues.updateDamping(1) // Update scroll harschness

  return (
    <Layout>
      <SEO
        title={prismicPost.data.post_title.text}
        description={prismicPost.data.post_preview_description.text}
      />
      <PostContent prismicPost={prismicPost} />
    </Layout>
  )
}

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
                text
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
                alt
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
          alt
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
      dataRaw {
        post_hero_image {
          url
          alt
        }
      }
    }
  }
`
export default Post
