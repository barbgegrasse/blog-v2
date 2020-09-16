import React, { useRef, useContext, useEffect } from 'react'
import gsap from 'gsap'

import SEO from '../components/seo'
import Layout from '../components/Layout'

import IndexContent from '../content/IndexContent'

import { myContext } from '../../provider'

const IndexPage = props => {
  console.info({ props })
  const tl = useRef()
  tl.current = gsap.timeline({ pause: true })

  const contextValue = useContext(myContext)
  const { homeAnimation, changeHomeAnimation } = contextValue

  useEffect(() => {
    changeHomeAnimation(false)
    tl.current.play()
  })

  console.info({ tl })

  return (
    <myContext.Consumer>
      {context => (
        <>
          {/* <Overlay tl={tl} homeAnimation={  homeAnimation} /> */}
          <Layout>
            <SEO
              title="👨‍💻 Johan Petrikovsky"
              description="Développeur web depuis 8ans basé à Toulouse. Je développe des applications web avec un focus sur l'utilisateur, les performances et l'accesibilité"
            />
            <IndexContent
              homeAnimation={homeAnimation}
              tl={tl}
              context={context}
            />
          </Layout>
        </>
      )}
    </myContext.Consumer>
  )
}

export default IndexPage
