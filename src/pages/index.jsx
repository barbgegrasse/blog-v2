import React, { useRef } from 'react'
import gsap, { TweenMax, Expo, TimelineLite } from 'gsap'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import { MainTitle } from '../styles/tags/title'
import illu from '../images/web_developer.svg'
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
          description="Développeur web depuis 8ans."
        />

        <GridHome>
          <div className="left-col">
            <MainTitle as="h1">
              Développeur <br />
              front-end à Toulouse.
            </MainTitle>
            <p>
              Bonjour 👋 je suis Johan Petrikovsky développeur front-end basé à
              Toulouse.
            </p>
            <p>
              J'ai l'œil pour la conception d'interface avec une approche du
              développement axée sur l'utilisateur.
            </p>
            <p>
              Pendant mon temps libre, je travaille sur GSAP et diverses
              animations CSS. J'apprends actuellement à écrire de meilleurs
              tests avec Cypress.
            </p>
          </div>
          <img src={illu} alt="" />
        </GridHome>
      </Layout>
    </>
  )
}

export default IndexPage
