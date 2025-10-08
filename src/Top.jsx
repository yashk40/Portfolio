import React from 'react'
import BlurText from './Heading'

export default function Top() {
  const handleFirstBlurTextComplete = () => {
    // No-op, Vanta removed
  }

  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }

  return (
    <div 
      id='Top' 
      style={{ 
        position: 'relative', 
        width: '100vw', 
        height: '100vh', 
        overflow: 'hidden',
        backfaceVisibility: 'hidden',
        perspective: 1000,
        willChange: 'auto',
        contain: 'layout style paint',
        isolation: 'isolate',
      }}
    >
      <div id='Top-Heading-Container'>
        <div id="Top-Heading">
          <div style={{ marginLeft: "20px" }}>
            <BlurText
              text='Hey,'
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleFirstBlurTextComplete}
            />
          </div>
        </div>
        <div id="Top-Heading-Name">
          <div>
            <BlurText
              text='I m Yash, a student with a vision, building the foundations of my dreams'
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
