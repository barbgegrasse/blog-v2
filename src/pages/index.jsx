import React, { useRef, useContext, useEffect } from 'react'
import gsap from 'gsap'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import BlockMaintTitle from '../components/home/MainTitle'
import BlockPresentation from '../components/home/BlockPresentation'
import BlockIllu from '../components/home/BlockIllu'

import { GridHome } from '../styles/pages/home/index'
import Overlay from '../components/home/Overlay'

import { myContext } from '../../provider'

const IndexPage = () => {
  const tl = useRef()
  tl.current = gsap.timeline()

  const contextValue = useContext(myContext)
  const { homeAnimation, changeHomeAnimation } = contextValue

  useEffect(() => {
    changeHomeAnimation(false)
  })

  return (
    <>
      {/* <Overlay tl={tl} homeAnimation={homeAnimation} /> */}
      <Layout>
        <SEO
          title="Johan Petrikovsky Développeur web à toulouse"
          description="Développeur web depuis 8ans basé à Toulouse. J'apprécie travailler avec React, GatsbyJS, et GSAP"
        />

        <GridHome>
          <div className="left-col">
            <BlockMaintTitle homeAnimation={homeAnimation} tl={tl} />
            <BlockPresentation homeAnimation={homeAnimation} tl={tl} />
          </div>
          <div className="right-col">
            <BlockIllu homeAnimation={homeAnimation} tl={tl} />
          </div>
        </GridHome>
      </Layout>
    </>
  )
}

export default IndexPage
