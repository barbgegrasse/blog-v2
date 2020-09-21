import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Erreur 404 la page n'a pas été trouvée</h1>
    <p>Circulez il n'y a rien à voir ici</p>
  </Layout>
)

export default NotFoundPage
