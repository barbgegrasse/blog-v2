import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import { BlogGrid } from '../styles/components/blog/listing'
import { MainTitle } from '../styles/tags/title'
import PostCard from '../components/blog/PostCard'

const BlogPage = ({ data }) => {
  const listPosts = data.allPrismicPost.edges

  return (
    <Layout>
      <SEO title="Blog développeur web" />
      <MainTitle>Blog</MainTitle>
      <BlogGrid>
        {listPosts.map(post => (
          <PostCard key={post.node.uid} post={post} />
        ))}
      </BlogGrid>
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const BlogQuery = graphql`
  query MyQuery {
    allPrismicPost {
      edges {
        node {
          uid
          data {
            post_title {
              text
            }
            post_preview_description {
              html
            }
            post_date(formatString: "DD MMMM YYYY", locale: "fr-FR")
            categories {
              category {
                slug
                document {
                  data {
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
`

export default BlogPage
