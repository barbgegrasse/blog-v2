import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import { MainTitle } from '../styles/tags/title'
import illu from '../images/developper_web_home.svg'
import { GridHome } from '../styles/pages/home/index'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Johan Petrikovsky Développeur web à toulouse"
      description="Développeur web depuis 8ans."
    />
    <GridHome>
      <div>
        <h1>Johan Petrikovsky</h1>
        <h2>Développeur front-end.</h2>
        <p>
          Bonjour, je suis Johan Petrikovsky développeur web. après 7ans comme
          développeur indépendant une nouvelle aventure va bientôt commencer et
          je suis ravi d'intégrer les équipes de l'entrerpise Sigfox.
        </p>
        <p>
          Passioné par React, Gatsby, et les animations, je partage mes
          découvertes dans mon blog.
        </p>
      </div>
      <img src={illu} alt="" />
    </GridHome>
  </Layout>
)

export default IndexPage
