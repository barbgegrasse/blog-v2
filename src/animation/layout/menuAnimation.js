import gsap from 'gsap'

const menuAnimation = () => {
  const tl = gsap.timeline()
  tl.staggerFrom(
    '.item-menu',
    2,
    { top: '100%', opacity: 0 },
    0.5,
    'endTown'
  ).addLabel('finishMenu')
  return tl
}

export default menuAnimation
