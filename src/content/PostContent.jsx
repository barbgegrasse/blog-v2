import PropTypes from 'prop-types'
import gsap from 'gsap'
import React, { useRef, useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Img from 'gatsby-image'
// import useWindowSize from '../hooks/useWindowSize'
// import Summary from '../components/blog/summary/WrapperSummary'
import { ArticleContainer } from '../styles/components/blog/postSlices'
import PostSlices from '../components/blog/PostSlices'
import { MainTitle } from '../styles/common/title'

const PostContent = ({ location, prismicPost }) => {
  // const windowSize = useWindowSize()

  // const handleSummaryClick = id => {
  //   const linkTopPosition = document.querySelector(id).getBoundingClientRect()
  //     .top

  //   window.scrollTo(0, linkTopPosition + windowSize.height * 0.9)
  //   return false
  // }

  const refPostContent = useRef(null)

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: refPostContent.current,
      smooth: true,
    })
    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    locomotiveScroll.on('scroll', func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute('data-direction', func.direction)
    })

    setTimeout(() => {
      locomotiveScroll.update()
    }, 400)

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [location])

  return (
    <div ref={refPostContent}>
      <ArticleContainer>
        <MainTitle>{prismicPost.data.post_title.text}</MainTitle>
        {/* <Summary
        handleSummaryClick={handleSummaryClick}
        slices={prismicPost.data.post_body}
      /> */}

        <PostSlices slices={prismicPost.data.post_body} />
      </ArticleContainer>
    </div>
  )
}

PostContent.propTypes = {
  prismicPost: PropTypes.shape({
    data: PropTypes.shape({
      post_body: PropTypes.array.isRequired,
      post_hero_image: PropTypes.shape({
        alt: PropTypes.string,
        dimensions: PropTypes.shape({
          height: PropTypes.string,
          width: PropTypes.string,
        }),
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.object,
          }),
        }),
      }),
      post_title: PropTypes.shape({
        text: PropTypes.string,
      }),
    }),
    dataRaw: PropTypes.shape({
      post_hero_image: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
}

export default PostContent
