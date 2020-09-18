import PropTypes from 'prop-types'
import gsap from 'gsap'
import React, { useRef } from 'react'
import Img from 'gatsby-image'
import useWindowSize from '../hooks/useWindowSize'
import Summary from '../components/blog/summary/WrapperSummary'
import { ArticleContainer } from '../styles/components/blog/postSlices'
import PostSlices from '../components/blog/PostSlices'
import { MainTitle } from '../styles/common/title'

const PostContent = ({ prismicPost }) => {
  const windowSize = useWindowSize()

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

  const handleSummaryClick = id => {
    console.info(document.querySelector(id).getBoundingClientRect().top)
    const linkTopPosition = document.querySelector(id).getBoundingClientRect()
      .top

    window.scrollTo(0, linkTopPosition + windowSize.height * 0.9)
    return false
  }
  return (
    <>
      <div>
        <MainTitle>{prismicPost.data.post_title.text}</MainTitle>
        {/* {handleHeroImage()} */}
      </div>
      <ArticleContainer>
        <Summary
          handleSummaryClick={handleSummaryClick}
          slices={prismicPost.data.post_body}
        />
        <PostSlices slices={prismicPost.data.post_body} />
      </ArticleContainer>
    </>
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
  scrollContainer: PropTypes.object.isRequired,
}

export default PostContent
