import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import LinesWrapper from '../home/lines/LinesWrapper'
import mediaQueries from '../../styles/global/mediaQueries'

const ImageWrapper = styled('div')`
  position: absolute;
  right: 20vw;
  top: 50px;
  max-width: 628px;
  width: min(50vw, 100%);

  ${mediaQueries.tabletLandscape} {
    right: initial;
    left: 0;
  }

  ${mediaQueries.mobile} {
    width: 100%;
  }
`

const ImgJohanPetrikovsky = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "assets/johan_petrikovsky.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 628) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ImageWrapper className="image-wrapper" data-scroll data-scroll-speed="-2">
      {/* <LinesWrapper /> */}
      <Img
        alt="Johan Petrikovsky développeur web"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </ImageWrapper>
  )
}

export default ImgJohanPetrikovsky
