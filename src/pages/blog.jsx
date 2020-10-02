import PropTypes from 'prop-types'
import React, { useContext, useRef, useEffect } from 'react'

import { graphql } from 'gatsby'
import { gsap, Power3 } from 'gsap'
import SplitText from 'gsap/SplitText'
import SEO from '../components/seo'

import { BlogGrid } from '../styles/components/blog/listing'
import { MainTitle } from '../styles/common/title'
import PostCard from '../components/blog/PostCard'
import { myContext } from '../../provider'

const BlogPage = ({ data }) => {
  const listPosts = data.allPrismicPost.edges
  const refBlogTitle = useRef(null)

  const contextValues = useContext(myContext)
  const { blogTimeline, setBlogTimeline } = contextValues

  useEffect(() => {}, [])

  useEffect(() => {
    // TypeError: Failed to execute 'getComputedStyle' on 'Window': parameter 1 is not of type 'Element'
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(SplitText)

      const splitTitle = new SplitText(refBlogTitle.current, {
        type: 'chars',
        position: 'relative',
      })
      const charsTitle = splitTitle.chars

      blogTimeline
        .addLabel('splitTitle')
        .staggerFrom(
          charsTitle,
          1,
          {
            ease: Power3.easeOut,
            y: '+100%',
          },
          0.2
        )
        .addLabel('moveCard')
        .staggerFrom(
          '.card',
          1,
          {
            ease: Power3.easeOut,
            opacity: 0,
            x: '-=10%',
          },
          0.2,
          '-=0.3'
        )
        .addLabel('endMoveCard')

      setBlogTimeline(blogTimeline)

      blogTimeline.play()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <SEO
        title="Blog développeur web à Toulouse"
        description="Retrouvez une série d'articles où je parle de mes découvertes en tant que développeur full stack, développeur front-end, back-end, sans oublier les C.M.S."
      />
      <MainTitle ref={refBlogTitle}>Blog</MainTitle>
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
