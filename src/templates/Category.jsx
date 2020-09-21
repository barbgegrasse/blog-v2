import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import loadable from '@loadable/component'
import SEO from '../components/seo'
import Layout from '../components/Layout'

const CategoryContent = loadable(() => import('../content/CategoryContent'))

const Category = ({ data: { prismicCategory, allPrismicPost } }) => {
  return (
    <Layout>
      <SEO
        title={prismicCategory.data.meta_title}
        description={prismicCategory.data.meta_description}
      />
      <CategoryContent
        allPrismicPost={allPrismicPost.edges}
        prismicCategory={prismicCategory.data}
      />
    </Layout>
  )
}

export const query = graphql`
  query CategoryByUid($categoryUid: String!) {
    prismicCategory(uid: { eq: $categoryUid }) {
      id
      data {
        meta_title
        meta_description
        name
        description {
          text
          html
        }
      }
    }
    allPrismicPost(
      filter: {
        dataRaw: {
          categories: { elemMatch: { category: { uid: { eq: $categoryUid } } } }
        }
      }
    ) {
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
Category.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Category
