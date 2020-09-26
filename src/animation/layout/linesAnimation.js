import gsap, { Power1 } from 'gsap'

const linesAnimation = () => {
  const tl = gsap.timeline()

  tl.addLabel('VisibilityWrapperLine').set('.line-wrapper', {
    visibility: 'visible',
  })
  tl.from('#logo-wrapper', {
    opacity: 0,
    bottom: '+=100%',
    duration: 1,
    ease: Power1.easeIn,
  })
  tl.addLabel('horizontalLineStart')
    .from(
      '.horizontal1',
      {
        scaleX: '0',
        duration: 0.9,
        ease: Power1.easeOut,
      },
      'horizontalLineStart'
    )
    .addLabel('horizontal1Close')
    .from('.close1', {
      scaleY: '0',
      duration: 0.1,
      ease: Power1.easeOut,
    })

    .from('.horizontal2', {
      scaleX: '0',
      duration: 0.9,
      ease: Power1.easeOut,
    })

    .addLabel('horizontalLineClose')

    .from(
      '.vertical2',
      {
        scaleY: '0',
        duration: 0.9,
        ease: Power1.easeOut,
      },
      'horizontalLineStart'
    )
    .addLabel('vertical2end')
    .from(
      '.close2',
      {
        scaleX: '0',
        duration: 0.1,
        ease: Power1.easeOut,
      },
      'horizontalLineStart+=0.9'
    )
    .from(
      '.vertical1',
      {
        scaleY: '0',
        duration: 0.9,
        ease: Power1.easeOut,
      },
      'horizontalLineStart+=1'
    )
    .addLabel('finishLine')
  return tl
}

export default linesAnimation
