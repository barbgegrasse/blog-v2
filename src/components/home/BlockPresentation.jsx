import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { Expo } from 'gsap'

const BlockPresentation = ({ tl }) => {
  const text1 = useRef(null)
  const text2 = useRef(null)
  const text3 = useRef(null)

  useEffect(() => {
    tl.current.from(
      text1.current,
      1.0,
      {
        opacity: 0,
        y: '100%',
        ease: Expo.easeInOut,
      },
      '-=1'
    )

    tl.current.from(
      text2.current,
      1.0,
      {
        opacity: 0,
        y: '100%',
        ease: Expo.easeInOut,
      },
      '-=0.8'
    )

    tl.current.from(
      text3.current,
      1.0,
      {
        opacity: 0,
        y: '100%',
        ease: Expo.easeInOut,
      },
      '-=0.8'
    )
  })

  return (
    <>
      <div className="hide-text">
        <div ref={text1}>
          <p>
            Bonjour 👋 je suis Johan Petrikovsky développeur front-end basé à
            Toulouse.
          </p>
        </div>
      </div>
      <div className="hide-text">
        <div ref={text2}>
          <p>
            J'ai l'œil pour la conception d'interface avec une approche du
            développement axée sur l'utilisateur.
          </p>
        </div>
      </div>
      <div className="hide-text">
        <div ref={text3}>
          <p>
            Pendant mon temps libre, je travaille sur GSAP et diverses
            animations CSS. J'apprends actuellement à écrire de meilleurs tests
            avec Cypress.
          </p>
        </div>
      </div>
    </>
  )
}

BlockPresentation.propTypes = {
  tl: PropTypes.shape({
    current: PropTypes.shape({
      from: PropTypes.func,
    }),
  }),
}

export default BlockPresentation
