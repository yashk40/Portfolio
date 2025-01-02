import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Top.css'

export default function Top() {
  const headingRef = useRef(null);
  const nameRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const elements = [headingRef.current, nameRef.current];

    // Initial state
    gsap.set(elements, {
      opacity: 0,
      y: 50,
      rotateX: 15,
      filter: "blur(10px)"
    });

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        end: "bottom top+=0%",
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
        onEnterBack: () => tl.restart(), // Restart animation when scrolling up
        markers: false,
        scrub: false
      }
    });

    tl.to(elements, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      duration: 2.2,
      stagger: 0.2,
      ease: "expo.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div id='Top'>
        <div id='Top-Heading-Container' ref={containerRef}>
          <h2 ref={headingRef} id='Top-Heading'>Hey,</h2>
          <div ref={nameRef} id='Top-Heading-Name'>I'm Yash, a student with a vision, building the foundations of my dreams</div>
        </div>
      </div>
    </>
  )
}
