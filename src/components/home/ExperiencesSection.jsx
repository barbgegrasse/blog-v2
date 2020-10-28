import React, { useEffect, useRef } from 'react'

import {
  BonjourTxt,
  ExperiencesWrapper,
  GridPresentation,
} from '../../styles/components/home/blockPresentation'
import { LineTitle } from '../../styles/common/title'

const BlockPresentation = () => {
  return (
    <ExperiencesWrapper data-scroll id="experiences">
      <LineTitle>Expériences</LineTitle>
      <GridPresentation>
        <div>
          <BonjourTxt
            data-scroll
            data-scroll-sticky
            data-scroll-target="#experiences"
            data-scroll-offset="10%"
          >
            Bonjour, <br />
            Je suis un artisan numérique, <br />
            <strong>
              DEVELOPPEUR <br /> FREELANCE
            </strong>
            <br />
            J'accompagne les entrerpises depuis <strong>8 ans </strong>
            <br /> dans leur développement sur internet.
          </BonjourTxt>
        </div>
        <div>
          <div data-scroll data-scroll-speed="2">
            <p>
              Titulaire d'un <strong>B.T.S.</strong> informatique de gestion
              option développeur d'applications, je suis rapidement devenu
              développeur web freelance. Aujourd'hui c'est un métier que je
              pratique avec passion depuis maintenant <strong>8 ans</strong>. En
              tant que développeur freelance j'apporte mon savoir faire et mes
              compétences à des entreprises pour les aider à satisfaire les
              besoins de leurs clients.
            </p>

            <p>
              Depuis 8 ans je collabore avec des P.M.E. et des agences de
              communication. Ainsi je suis intervenu sur plus de{' '}
              <strong>cinquante projets</strong> et applications web. Mon
              domaine de compétences en tant que développeur web est large, j'ai
              pu intervenir dans différents secteurs, la{' '}
              <strong>
                création de site vitrine, la création de site e-commerce,
                création d’applications web
              </strong>
              .
            </p>

            <p>
              Depuis 8 ans je suis à l’écoute de mes clients et leur propose des
              solutions qui repondent à leur besoin, je réalise des{' '}
              <strong>développements sur mesure</strong> lorsque les demandes
              sont très spécifiques. Pour faire économiser du temps de et de
              l’argent à mes clients j'ai également beaucoup travaillé avec des{' '}
              <strong>C.M.S.</strong> : Wordpress, Prestashop, Drupal, Magento.
              En effet ces outils robustes et soutenus par des communautés
              regroupant des millions d’utilisateurs, offrent des solutions clés
              en mains pour répondre à vos attentes pour la création de site
              vitrine ou la création de site e-commerce.
            </p>
          </div>
        </div>
      </GridPresentation>
    </ExperiencesWrapper>
  )
}

export default BlockPresentation
