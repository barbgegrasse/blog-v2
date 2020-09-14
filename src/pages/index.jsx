import React, { useRef, useContext, useEffect } from 'react'
import gsap from 'gsap'
import Image from '../components/common/Image'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import BlockMaintTitle from '../components/home/MainTitle'
import BlockPresentation from '../components/home/BlockPresentation'
import ImgJohanPetrikovsky from '../components/images/ImgJohanPetrikovsky'

import { GridHome } from '../styles/pages/home/index'
import Overlay from '../components/home/Overlay'

import { myContext } from '../../provider'

const IndexPage = () => {
  const tl = useRef()
  tl.current = gsap.timeline({ pause: true })

  const contextValue = useContext(myContext)
  const { homeAnimation, changeHomeAnimation } = contextValue

  useEffect(() => {
    changeHomeAnimation(false)
    tl.current.play()
  })

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
            <GridHome>
              <div
                className="left-col"
                style={{
                  position: 'relative',
                  transform: `translate3d(0, ${context.scrollPosition /
                    4}px, 0)`,
                }}
              >
                <BlockMaintTitle homeAnimation={homeAnimation} tl={tl} />
              </div>
              <div
                className="right-col"
                style={{
                  position: 'relative',
                  transform: `translate3d(0, ${context.scrollPosition /
                    2}px, 0)`,
                }}
              >
                <ImgJohanPetrikovsky />
                {/* <BlockIllu homeAnimation={homeAnimation} tl={tl} /> */}
              </div>
            </GridHome>
            <div
              style={{
                position: 'relative',
                transform: `translate3d(0, ${context.scrollPosition / 2}px, 0)`,
              }}
            >
              <BlockPresentation homeAnimation={homeAnimation} tl={tl} />
            </div>
          </Layout>
        </>
      )}
    </myContext.Consumer>
  )
}

export default IndexPage
