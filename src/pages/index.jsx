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
          <SEO
            title="Développeur web à Toulouse, développeur freelance, je suis développeur front-end, back-end et Wordpress."
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
