import React from 'react'

import {
  ServicesWrapper,
  Intro,
} from '../../styles/components/home/blockPresentation'
import { LineTitle, SubTitle } from '../../styles/common/title'

const BlockPresentation = () => {
  return (
    <ServicesWrapper as="div">
      <LineTitle as="h3">Développement sur mesure.</LineTitle>
      <p>
        Pourquoi choisir un développement sur mesure ? répondre à des besoins
        spécifiques
      </p>
      <SubTitle as="h4">
        Pourquoi faire appel à un développeur front-end ?
      </SubTitle>
      <Intro>
        <p>
          Quant au rôle du <strong>développeur web front-end</strong>, c’est de
          programmer la partie visible, l’interface utilisateur d’une
          application ou d’un site web. Grâce à ses nombreuses compétences en
          développement, il maîtrise la création des solutions web. C’est pour
          cette raison qu’il est aussi appelé développeur intégrateur web.
        </p>
        <p>
          En tant que développeur web Front-end, j’ai assez de compétences pour
          vous donner satisfaction. Je peux procéder à l’intégration et au
          développement front-end des sites et outils. Je peux intervenir plus
          particulièrement sur l’intégration html/css, Javascript ainsi que sur
          de la déclinaison graphique et la mise à jour des bases de données.
        </p>
        <p>
          J’ai une solide expérience dans le montage HTML, HTML/CSS et des
          projets en responsive. J’ai la maîtrise parfaite de framework html de
          type <strong>Bootstrap</strong> et de pre-processeurs css de type{' '}
          <strong>Sass</strong>, la maîtrise des contraintes techniques aussi
          bien au niveau des langages serveur que pour la compatibilité des
          postes clients. Je peux vous rassurer aussi que je possède une large
          connaissance de{' '}
          <strong>Javascript / Jquery React, Redux ou Gatbsy</strong>. Etant
          donné que les librairies évoluent avec le temps, il est important de
          savoir maîtriser les technologies qui sont à la pointe du
          développement. De même, les profils{' '}
          <strong>Angular, Next, webpack ou Vue</strong> sont particulièrement
          recherchés
        </p>
      </Intro>
      <SubTitle as="h4">
        Pourquoi faire appel à un développeur back-end ?{' '}
      </SubTitle>
      <p>
        Pour ce qui est du back-end, je dispose de compétences dans les domaines
        suivants :
        <ul>
          <li>Langages de programmation « dynamiques », par exemple PHP ;</li>
          <li>Langages de scripting comme NodeJS (koa/express) ;</li>
          <li>API, webservices</li>
          <li>L’Administration de bases de données (SQL etc.)</li>
          <li>Sécurité, gestion des accès</li>
        </ul>
      </p>
    </ServicesWrapper>
  )
}

export default BlockPresentation
