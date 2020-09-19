import React, { useRef, useContext, useEffect } from 'react'
import loadable from '@loadable/component'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import { myContext } from '../../provider'

const IndexContent = loadable(() => import('../content/IndexContent'))

const IndexPage = () => {
  const contextValue = useContext(myContext)
  const { homeAnimation } = contextValue

  return (
    <myContext.Consumer>
      {context => (
        <>
          {/* <Overlay tl={tl} homeAnimation={  homeAnimation} /> */}
          <Layout>
            <SEO
              title="👨‍💻 Johan Petrikovsky"
              description="Développeur web à Toulouse. Développeur front-end et développeur back-end freelance. Je développe des applications web avec un focus sur l'utilisateur, les performances et l'accesibilité."
            />
            <IndexContent homeAnimation={homeAnimation} context={context} />
          </Layout>
        </>
      )}
    </myContext.Consumer>
  )
}

export default IndexPage
