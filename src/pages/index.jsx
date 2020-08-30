import React, { useRef } from 'react'
import gsap from 'gsap'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import BlockMaintTitle from '../components/home/MainTitle'
import BlockPresentation from '../components/home/BlockPresentation'
import BlockIllu from '../components/home/BlockIllu'

import { GridHome } from '../styles/pages/home/index'
import Overlay from '../components/home/Overlay'

const IndexPage = () => {
  const tl = useRef()
  tl.current = gsap.timeline()

  return (
    <>
      <Overlay tl={tl} />
      <Layout>
        <SEO
          title="Johan Petrikovsky Développeur web à toulouse"
          description="Développeur web depuis 8ans basé à Toulouse. J'apprécie travailler avec React, GatsbyJS, et GSAP"
        />

        <GridHome>
          <div className="left-col">
            <BlockMaintTitle tl={tl} />
            <BlockPresentation tl={tl} />
          </div>
          <BlockIllu tl={tl} />
        </GridHome>
      </Layout>
    </>
  )
}

export default IndexPage
