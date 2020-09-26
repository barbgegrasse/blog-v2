import gsap, { Power1 } from 'gsap'

const profilAnimation = () => {
  const tl = gsap.timeline()

  tl.addLabel('animation-profil').from(
    '#right-col',
    {
      duration: 0.8,
      y: '4%',
      opacity: 0,
      ease: Power1.easeOut,
    },
    'endTown-=0.5'
  )

  return tl
}

export default profilAnimation
