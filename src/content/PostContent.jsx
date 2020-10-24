import PropTypes from 'prop-types'
import gsap from 'gsap'
import React, { useRef, useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Img from 'gatsby-image'
import useWindowSize from '../hooks/useWindowSize'
import Summary from '../components/blog/summary/WrapperSummary'
import { ArticleContainer } from '../styles/components/blog/postSlices'
import PostSlices from '../components/blog/PostSlices'
import { MainTitle } from '../styles/common/title'

const PostContent = ({ location, prismicPost }) => {
  const refPostContent = useRef(null)

  return (
    <div ref={refPostContent}>
      <ArticleContainer>
        <MainTitle>{prismicPost.data.post_title.text}</MainTitle>
        <Summary slices={prismicPost.data.post_body} />

        <PostSlices slices={prismicPost.data.post_body} />
      </ArticleContainer>
    </div>
  )
}

PostContent.propTypes = {
  location: PropTypes.object.isRequired,
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
