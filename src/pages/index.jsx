import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import loadable from '@loadable/component'

import SEO from '../components/seo'
import { myContext } from '../../provider'

const IndexContent = loadable(() => import('../content/IndexContent'))

const IndexPage = ({ transitionStatus }) => {
  const contextValue = useContext(myContext)
  const { homeAnimation } = contextValue

  return (
    <myContext.Consumer>
      {context => (
        <>
          {/* <Overlay tl={tl} homeAnimation={  homeAnimation} /> */}

          <SEO
            title="Johan Petrikovsky développeur freelance, développeur front-end, backend-end."
            description="Développeur web à Toulouse. Développeur front-end et développeur back-end freelance. Je développe des applications web avec un focus sur l'utilisateur, les performances et l'accesibilité."
          />
          <IndexContent homeAnimation={homeAnimation} context={context} />
        </>
      )}
    </myContext.Consumer>
  )
}

IndexPage.propTypes = {
  transitionStatus: PropTypes.string.isRequired,
}

export default IndexPage
