import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const ImageWrapper = styled('div')`
  position: absolute;
  bottom: 0px;
  width: 23vw;
  transform: translateX(50%);
`

const ImgJohanPetrikovsky = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "developpeur-web-toulouse.png" }
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
    <ImageWrapper className="image-wrapper">
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </ImageWrapper>
  )
}

export default ImgJohanPetrikovsky
