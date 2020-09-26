import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

import { BlogGrid } from '../styles/components/blog/listing'
import { MainTitle } from '../styles/common/title'
import PostCard from '../components/blog/PostCard'

const BlogPage = ({ data }) => {
  const listPosts = data.allPrismicPost.edges

  return (
    <>
      <SEO title="Blog développeur web à Toulouse" />
      <MainTitle>Blog</MainTitle>
      <BlogGrid>
        {listPosts.map(post => (
          <PostCard key={post.node.uid} post={post.node} />
        ))}
      </BlogGrid>
    </>
  )
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const BlogQuery = graphql`
  {
    allPrismicPost {
      edges {
        node {
          uid
          data {
            post_title {
              html
              text
            }
            post_preview_description {
              html
              text
            }
            post_date
            categories {
              category {
                uid
                document {
                  ... on PrismicCategory {
                    id
                    dataRaw {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPage
