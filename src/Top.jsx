import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Top.css'
import { useState } from 'react'
import BlurText from './Heading'
export default function Top() {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  


  return (
    <>

   
      <div id='Top' >
        <div id='Top-Heading-Container'>
          <div id="Top-Heading">
            
     <div style={{marginLeft:"20px"}}>
     <BlurText
        text='Hey,'
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
 
/>
      
      </div>   
      
</div>
<div   id="Top-Heading-Name">

<div >
<BlurText
        text='I m Yash, a student with a vision, building the foundations of my dreams'
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}

/>  
</div>

</div>      {/* <div  id='Top-Heading-Name'></div> */}
        </div>
      </div>
    </>
  )
}
