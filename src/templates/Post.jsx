import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PostSlices from '../components/blog/PostSlices'
import { MainTitle } from '../styles/tags/title'
import SEO from '../components/seo'
import Layout from '../components/Layout'

const Post = ({ data }) => (
  <Layout>
    {console.log(data)}
    {console.log(data.prismic.post.post_hero_image.dimensions.width)}
    {console.log(data.post)}

    <SEO title={data.prismic.post.post_title[0].text} />
    <MainTitle>{data.prismic.post.post_title[0].text}</MainTitle>
    <Img
      style={{
        display: 'block',
        margin: '0 auto',
        maxWidth: data.prismic.post.post_hero_image.dimensions.width,
      }}
      fluid={data.prismic.post.post_hero_imageSharp.childImageSharp.fluid}
    />
    <PostSlices slices={data.prismic.post.post_body} />
  </Layout>
)

Post.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query PostQuery($uid: String!) {
    prismic {
      post(uid: $uid, lang: "fr-fr") {
        post_title
        post_preview_description
        post_hero_annotation
        post_date
        _linkType
        post_hero_image
        post_hero_imageSharp {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        post_body {
          ... on PRISMIC_PostPost_bodyText {
            type
            label
            primary {
              rich_text
            }
          }
          ... on PRISMIC_PostPost_bodyCode_snippet {
            type
            label
            primary {
              code_snippet
              language
            }
          }
          ... on PRISMIC_PostPost_bodyHighlighted_text {
            type
            label
            primary {
              highlight_title
            }
          }
          ... on PRISMIC_PostPost_bodyImage {
            type
            label
            primary {
              imageSharp {
                childImageSharp {
                  fluid {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
          }
          ... on PRISMIC_PostPost_bodyHn {
            type
            label
            primary {
              hn
            }
          }
        }
      }
    }
  }
`

export default Post
