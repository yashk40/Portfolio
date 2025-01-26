import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Top.css'
import { useState } from 'react'
export default function Top() {

   

  useEffect(() => {
    const topElement = document.getElementById('Top');
    if (topElement) {
        topElement.classList.add('visible');
    }
 }, []);
 

  return (
    <>

   
      <div id='Top' >
        <div id='Top-Heading-Container'>
          <h2  id='Top-Heading'>Hey,</h2>
          <div  id='Top-Heading-Name'>I'm Yash, a student with a vision, building the foundations of my dreams</div>
        </div>
      </div>
    </>
  )
}
