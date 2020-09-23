import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Expo } from 'gsap'
import { PresentationWrapper } from '../../styles/components/home/blockPresentation'

const BlockPresentation = ({ tl }) => {
  const text1 = useRef(null)
  const text2 = useRef(null)
  const text3 = useRef(null)

  useEffect(() => {
    tl.from(
      text1.current,
      1.0,
      {
        opacity: 0,
        y: '25%',
        ease: Expo.easeInOut,
      },
      '-=1'
    )
      .from(
        text2.current,
        1.0,
        {
          opacity: 0,
          y: '25%',
          ease: Expo.easeInOut,
        },
        '-=0.8'
      )
      .from(
        text3.current,
        1.0,
        {
          opacity: 0,
          y: '25%',
          ease: Expo.easeInOut,
        },
        '-=0.8'
      )
  })

  return (
    <PresentationWrapper>
      <div className="hide-text">
        <div ref={text1}>
          <p>
            Bonjour 👋 je suis Johan Petrikovsky développeur web basé à
            Toulouse.
          </p>
        </div>
      </div>
      <div className="hide-text">
        <div ref={text2}>
          <p>
            J'ai l'œil pour la conception d'interface avec une approche du
            développement axée sur l'utilisateur, les performances et
            l'accessibilité.
          </p>
        </div>
      </div>

      <div className="hide-text">
        <p ref={text3}>
          Après avoir collaboré pendant <span className="highlight">7 ans</span>{' '}
          comme <span className="highlight">développeur web</span> avec des
          agences de communication, j’ai pu mettre en oeuvre mes compétences sur
          plus d’une cinquantaine de projets web (sites institutionnels, sites
          vitrines, e-commerce...) principalement sur la partie Javascript) mais
          aussi sur la partie <span className="highlight">front-end</span>{' '}
          (HTML, CSS, Sass, Javascript) mais aussi sur la partie{' '}
          <span className="highlight">back-end</span> des applications dont
          j’avais la charge (Php/MySql).
        </p>
      </div>
      <p>
        En tant que développeur freelance j’ai également travaillé avec un large
        éventail de{' '}
        <span className="highlight">
          C.M.S. Wordpress, Drupal, Magento, et Prestashop
        </span>
        J’ai également pu travailler avec des P.M.E. où j’avais en charge le
        développement de l’ensemble de leur stratégie numérique, je suis donc
        êxtrêmement sensible à tout les sujets annexes qui gravitent autour du
        développement : gestion de projets, S.E.O. , S.E.A, U.X., design.
      </p>

      <p>
        Pendant mon temps libre, j'aime réaliser des animations sur la librairie
        avascript gsap.{' '}
        <span className="highlight">
          J'apprends actuellement à écrire de meilleurs tests avec Cypress.
        </span>
      </p>
    </PresentationWrapper>
  )
}

BlockPresentation.propTypes = {
  tl: PropTypes.shape({
    from: PropTypes.func,
  }),
}

export default BlockPresentation
