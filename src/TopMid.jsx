import React, { useEffect, useRef } from 'react'
import './Top.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./Skills.css"
gsap.registerPlugin(ScrollTrigger)

export default function TopMid() {
  const textRef1 = useRef(null)
  const textRef2 = useRef(null)
  const skillsRef = useRef(null)
  const skillsRef2 = useRef(null)
  const PCskillsRef= useRef(null)
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


  }, [])

  return (
    <>
      <div style={{ width: "100vw" }}>

        <div className='Top-Mid-Container-Text' ref={textRef1}>

          As a Second-year undergraduate pursuing a BCA degree in Computer Science and Engineering, I`m currently freelancing while also on the lookout for full-time gigs and Internships.

        </div>

        <div className='Top-Mid-Container-Text' ref={textRef2} style={{ marginTop: "50px" }}>
          When I`m not working, you`ll catch me watching Netflix, reading random stuff, or messing with some fun side projects.

        </div>
      </div>

      <div className='Topbtm-start' ref={skillsRef}>
        <div className='Topbtm-start-text'>Skills</div>
        <div className='Skills-container'>


          <button class="Skills-btn">
            HTML<img id='img-skills' src="html.svg" alt='html' />
          </button>
          <button class="Skills-btn">
            CSS <img id='img-skills' src="styles.svg" alt='css' />
          </button>
          <button class="Skills-btn">
            JavaScript <img id='img-skills' src="script.svg" alt='js' />
          </button>
          <button class="Skills-btn">
            Tailwind <img id='img-skills' src="Tcss.svg" alt='tailwind' />
          </button>
          <button class="Skills-btn">
            Bootstrap <img id='img-skills' src="bootstrap.svg" alt='bootstrap' />
          </button>
          <button class="Skills-btn">
            React <img id='img-skills' src="React.svg" alt='react' />
          </button>
          <button class="Skills-btn">
            Vite <img id='img-skills' src="Vite.js.svg" alt='vite' />
          </button>
          <button class="Skills-btn">
            GSAP <img id='img-skills' src="https://avatars.githubusercontent.com/u/2386673?v=4" width={30} height={30} alt='gsap' />
          </button>
          <button class="Skills-btn">
            Material UI <img id='img-skills' src="Mat.svg" alt='gsap' />
          </button>
        </div>
      </div>
      <div className='Skills-pc' ref={PCskillsRef}>
         <div className='skils-pt1'>
              Projects
         </div>
         <div className='skils-pt2'>
                Skills
          </div>
      </div>
      <div className='projects-whole-cont' ref={skillsRef2}>
        <div className='Projects-cont'>

          Projects

        </div>
        <div className='project'>
          <a id='link-project' href='https://newzzbook.netlify.app/'>

            <p className='Project-title'>
              NewsBook <svg xmlns="http://www.w3.org/2000/svg" height={17} viewBox="0 0 448 512"><path fill="#f9f0e1" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>

            </p>

          </a>

          <img
            src="news.png"
            alt='newsbook'
            className='responsive-image'
            style={{
              maxWidth: '88%',
              height: 'auto',
              display: 'block',
            }}
          />
          <p>
          </p>
          <p className='descreption-project'>
            <a style={{ color: '#F9f0e1' }} href='https://newzzbook.netlify.app/'>newzzbook.netlify.app</a><br />
            <span style={{ fontSize: '18px' }}>Description : </span>Developed a dynamic, fully-responsive news app using React, Bootstrap, and Tailwind CSS, integrating the News API to deliver real-time headlines with customizable language and country filters for a tailored user experience.
          </p>
        </div>
      </div>

    </>
  )
}
