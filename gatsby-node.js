// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/Post.jsx')
  const categoryTemplate = require.resolve('./src/templates/Category.jsx')

  const result = await wrapper(
    graphql(`
      {
        prismic {
          allPosts {
            edges {
              node {
                categories {
                  category {
                    ... on PRISMIC_Category {
                      _meta {
                        uid
                      }
                    }
                  }
                }
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    `)
  )

  const categorySet = new Set()
  const postsList = result.data.prismic.allPosts.edges

  // Double check that the project has a category assigned
  postsList.forEach(edge => {
    if (edge.node.categories[0].category) {
      edge.node.categories.forEach(cat => {
        categorySet.add(cat.category._meta.uid)
      })
    }

    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/blog/${edge.node._meta.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node._meta.uid,
      },
    })
  })

  const categoryList = Array.from(categorySet)

  categoryList.forEach(category => {
    createPage({
      path: `/blog/categorie-${category}`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}
