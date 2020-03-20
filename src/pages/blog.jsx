import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import { BlogGrid } from '../styles/components/blog/listing'
import { MainTitle } from '../styles/tags/title'
import PostCard from '../components/blog/PostCard'

const BlogPage = ({ data }) => {
  const listPosts = data.prismic.allPosts.edges

  return (
    <Layout>
      <SEO title="Blog développeur web" />
      <MainTitle>Blog</MainTitle>
      <BlogGrid>
        {listPosts.map(post => (
          <PostCard key={post.node._meta.uid} post={post} />
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
    prismic {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
            post_title
            post_preview_description
            post_date
            categories {
              category {
                ... on PRISMIC_Category {
                  _meta {
                    uid
                  }
                  name
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
