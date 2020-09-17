import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PostSlices from '../components/blog/PostSlices'
import { MainTitle } from '../styles/common/title'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import Summary from '../components/blog/summary/WrapperSummary'
import { ArticleContainer } from '../styles/components/blog/postSlices'
import { myContext } from '../../provider'

const Post = ({ data: { prismicPost } }) => {
  const contextValues = useContext(myContext)
  contextValues.updateDamping(1) // Update scroll harschness

  const handleHeroImage = () => {
    if (prismicPost.data.post_hero_image?.localFile?.childImageSharp) {
      return (
        <Img
          alt={prismicPost.data.post_hero_image.alt}
          style={{
            display: 'block',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginBottom: '60px',
            maxWidth: prismicPost.data.post_hero_image.dimensions.width,
            maxHeight: prismicPost.data.post_hero_image.dimensions.height,
          }}
          durationFadeIn={250}
          fluid={
            prismicPost.data.post_hero_image.localFile.childImageSharp.fluid
          }
        />
      )
    }

    return (
      <img
        alt={prismicPost.data.post_hero_image.alt}
        style={{
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
          maxHeight: '430px',
          maxWidth: '980px',
        }}
        src={prismicPost.dataRaw.post_hero_image.url}
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
        <Summary slices={prismicPost.data.post_body} />
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
