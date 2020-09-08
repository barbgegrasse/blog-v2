import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PostSlices from '../components/blog/PostSlices'
import { MainTitle } from '../styles/tags/title'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import { ArticleContainer } from '../styles/components/blog/postSlices'

const Post = ({ data: { prismicPost } }) => {
  const handleHeroImage = () => {
    if (prismicPost.data.post_hero_image.localFile.childImageSharp) {
      return (
        <Img
          style={{
            display: 'block',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginBottom: '60px',
            maxWidth: prismicPost.data.post_hero_image.dimensions.width,
            maxHeight: prismicPost.data.post_hero_image.dimensions.height,
          }}
          fluid={
            prismicPost.data.post_hero_image.localFile.childImageSharp.fluid
          }
        />
      )
    }

    return (
      <img
        style={{
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
          maxHeight: '430px',
          maxWidth: '980px',
        }}
        src={prismicPost.dataRaw.post_hero_image.url}
        alt={prismicPost.dataRaw.post_hero_image.alt}
      />
    )
  }

  return (
    <Layout>
      <SEO
        title={prismicPost.data.post_title.text}
        description={prismicPost.data.post_preview_description.text}
      />
      <div style={{ contentVisibility: 'auto' }}>
        <MainTitle>{prismicPost.data.post_title.text}</MainTitle>
        {handleHeroImage()}
      </div>
      <ArticleContainer>
        <PostSlices slices={prismicPost.data.post_body} />
      </ArticleContainer>
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
