import React from 'react'

import {
  ServicesWrapper,
  Intro,
} from '../../styles/components/home/blockPresentation'
import { LineTitle } from '../../styles/common/title'

const BlockPresentation = () => {
  return (
    <ServicesWrapper>
      <LineTitle>Services</LineTitle>
      <Intro>
        <p>
          Actuellement, le web est présent dans la vie de chaque personne. Pour
          plus de 90% de la population française, le premier réflexe pour une
          recherche d’informations ou d’achat est d’aller vers Google. Alors
          nous pouvons comprendre à quel point il est important en 2020 aux
          entrepreneurs, infopreneurs, artisans et associations d’être visible
          et présent sur le NET.
        </p>
        <p>
          Aujourd’hui, l’internet nous accompagne partout. Que vous soyez en
          vacances, au travail ou chez vous Google est présent. Ainsi, sur votre
          smartphone, tablette ou ordinateur, vous n’hésitez plus à rechercher
          des informations sur où se trouve tel restaurant, quel film passe en
          weekend, faire sa réservation d’hôtel, ou encore acheter son billet
          d’avion, pour ne citer que ceux-là. Ainsi, toute personne qui souhaite
          augmenter son chiffre d’affaires, trouver de nouveaux clients ou
          prospects et développer son activité est contrainte d’être présente
          sur internet.
        </p>
      </Intro>
    </ServicesWrapper>
  )
}

export default BlockPresentation
