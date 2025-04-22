import React, { useEffect, useRef } from 'react'

import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TopMid() {
  const textRef1 = useRef(null)
  const textRef2 = useRef(null)
  const textRef3 = useRef(null)
  const skillsRef = useRef(null)
  const skillsRef2 = useRef(null)
  const PCskillsRef= useRef(null)
  const phoneref = useRef(null)
  useEffect(() => {
    gsap.fromTo(textRef1.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef1.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
          markers: false
        }
      }
    )
    gsap.fromTo(phoneref.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger:phoneref.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
          markers: false
        }
      }
    )

    gsap.fromTo(textRef2.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef2.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
          markers: false
        }
      }
    )
  
    gsap.fromTo(skillsRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
          markers: false
        }
      }
    )
    gsap.fromTo(skillsRef2.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: skillsRef2.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
          markers: false
        }
      }
    )


    gsap.fromTo(PCskillsRef.current,
      {
        opacity: 0,
        y: 90
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: textRef2.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false
        }
      }
    )
    gsap.fromTo(textRef3.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef1.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
          markers: false
        }
      }
    )



  }, [])

  return (
    <>
    <div style={{display:"flex", width: "100vw" }}>

  
      <div  className='mid-desc'>

        <div className='Top-Mid-Container-Text' ref={textRef1}>

          As a Second-year undergraduate pursuing a BCA degree in Computer Science and Engineering, I`m currently freelancing while also on the lookout for full-time gigs and Internships.

        </div>

        <div className='Top-Mid-Container-Text' ref={textRef2} style={{ marginTop: "50px"  }}>
          When I`m not working, you`ll catch me watching Netflix, reading random stuff, or messing with some fun side projects.

        </div>
        <div id='exp-cont-phone' ref={phoneref} style={{ marginTop: "50px" }}>
        <div  className='Exp-sec' ref={textRef3}  >experience</div>
      <div className='comp-name-pos'>Web developer Intern</div>
      <a className='company-name' href='https://account.hktechnical.com/certification/create/aupdlkhgd/'  >HK Technical</a>
      <div className='company-date'>Jan 2025 - March 2025</div>
        </div>
      
      </div>
      <div id="exp-cont">
      <div  className='Exp-sec' ref={textRef3}  >experience</div>
      <div className='comp-name-pos'>Web developer Intern</div>
      <a className='company-name' href='https://account.hktechnical.com/certification/create/aupdlkhgd/'  >HK Technical</a>
      <div className='company-date'>Jan 2025 - March 2025</div>
      </div>

      </div>
      

    </>
  )
}
