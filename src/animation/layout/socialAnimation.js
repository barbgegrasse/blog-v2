import gsap, { Power1 } from 'gsap'

const socialAnimation = () => {
  const tl = gsap.timeline()

  tl.from('.logo-wrapper', {
    opacity: 0,
    duration: 1,
    ease: 'linear',
    stagger: 0.1,
  })

  return tl
}

export default socialAnimation
