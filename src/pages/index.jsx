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
  tl.current = gsap.timeline()

  const contextValue = useContext(myContext)
  const { homeAnimation, changeHomeAnimation } = contextValue

  useEffect(() => {
    changeHomeAnimation(false)
  })

  return (
    <myContext.Consumer>
      {context => (
        <>
          {/* <Overlay tl={tl} homeAnimation={  homeAnimation} /> */}
          <Layout>
            <SEO
              title="Développeur Web à Toulouse - Johan Petrikovsky."
              description="Développeur web depuis 8ans basé à Toulouse. J'apprécie travailler avec React, GatsbyJS, et GSAP"
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
          </Layout>
        </>
      )}
    </myContext.Consumer>
  )
}

/* <p>
                  Après avoir collaboré pendant 7 ans comme développeur web avec
                  des agences de communication, j’ai pu mettre en oeuvre mes
                  compétences sur plus d’une cinquantaine de projets web (sites
                  institutionnels, sites vitrines, e-commerce...) principalement
                  sur la partie front-end (HTML, CSS, Sass, Javascript) mais
                  aussi sur la partie back-end des applications dont j’avais la
                  charge (Php/MySql). En tant que développeur freelance j’ai
                  également travaillé avec un large éventail de C.M.S.
                  Wordpress, Drupal, Magento, et Prestashop. J’ai également pu
                  travailler avec des P.M.E. où j’avais en charge le
                  développement de l’ensemble de leur stratégie numérique, je
                  suis donc êxtrêmement sensible à tout les sujets annexes qui
                  gravitent autour du développement : gestion de projets, S.E.O.
                  , S.E.A, U.X., design.
                </p> */

export default IndexPage
