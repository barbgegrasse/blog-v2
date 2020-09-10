import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
  console.info(data)
  return (
    <div style={{ width: 'min(628px,100%)' }}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default ImgJohanPetrikovsky
