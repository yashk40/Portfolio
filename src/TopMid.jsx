import React, { useEffect, useRef } from 'react'
import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TopMid() {
  const textRef1 = useRef(null)
  const textRef2 = useRef(null)
  const textRef3 = useRef(null)
  const textRef4 = useRef(null)
  const phoneExpRef = useRef(null)
  const desktopExpRef = useRef(null)
  const phoneCertRef = useRef(null)
  const desktopCertRef = useRef(null)

  useEffect(() => {
    // Create timeline for better control
    const tl = gsap.timeline()

    // Clear any existing scroll triggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // First text animation
    gsap.fromTo(textRef1.current, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef1.current,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        markers: false
      }
    })

    // Second text animation
    gsap.fromTo(textRef2.current, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef2.current,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        markers: false
      }
    })

    // Desktop experience section
    gsap.fromTo(desktopExpRef.current, {
      opacity: 0,
      y: 60
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: desktopExpRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false
      }
    })

    // Phone experience section
    gsap.fromTo(phoneExpRef.current, {
      opacity: 0,
      y: 60
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: phoneExpRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false
      }
    })

    // Desktop certifications section
    gsap.fromTo(desktopCertRef.current, {
      opacity: 0,
      y: 60
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: desktopCertRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false
      }
    })

    // Phone certifications section
    gsap.fromTo(phoneCertRef.current, {
      opacity: 0,
      y: 60
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: phoneCertRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false
      }
    })

    // Refresh scroll triggers after all animations are set up
    ScrollTrigger.refresh()

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <div style={{ display: "flex", width: "100vw" }}>


        <div className='mid-desc'>

          <div className='Top-Mid-Container-Text' ref={textRef1}>

            As a Second-year undergraduate pursuing a BCA degree in Computer Science and Engineering, I`m currently freelancing while also on the lookout for full-time gigs and Internships.

          </div>

          <div className='Top-Mid-Container-Text' ref={textRef2} style={{ marginTop: "50px" }}>
            When I`m not working, you`ll catch me watching Netflix, reading random stuff, or messing with some fun side projects.

          </div>
          <div id='exp-cont-phone' style={{ marginTop: "50px" }}>
            <div ref={phoneExpRef}>
              <div className='Exp-sec'>experience</div>
              <div className='comp-name-pos'>Web developer Intern</div>
              <a className='company-name' href='https://account.hktechnical.com/certification/create/aupdlkhgd/'>HK Technical <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
              <div className='company-date'>Jan 2025 - March 2025</div>
            </div>
            
            <div ref={phoneCertRef}>
              <div className='Exp-sec' style={{ marginTop: "20px", display: "block" }}>Certifications</div>
              <a className='company-name' style={{ display: "block" }} href='https://openai-buildathon.nxtwave.tech/certificate?cid=SRZPYU4657'>OpenAI Workshop Cert. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
              <a className='company-name' style={{ display: "block" }} href='https://drive.google.com/file/d/1EbJNo0203Ql5im4cCJ41fp80eK2cOFa1/view'>Silicon Hack Club Cert. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
              <a className='company-name' style={{ display: "block" }} href='https://drive.google.com/file/d/1agOPND5oh2YT2iEWD_KpSBrNYoVrmpwF/view'>Hack Forge 2025 Cert. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
              <a className='company-name' style={{ display: "block" }} href='https://drive.google.com/file/d/1EF5ELims68s2RvRfSOZfE1AARuAFyEEu/view'>Syrotech hack Cert. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
              <a className='company-name' style={{ display: "block" }} href='https://verify.skilljar.com/c/seyqpi4yd4cu'>Anthropic MCP Cert. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
            </div>
          </div>

        </div>
        <div id="exp-cont">
          <div ref={desktopExpRef}>
            <div className='Exp-sec'>experience</div>
            <div className='comp-name-pos'>Web developer Intern</div>
            <a className='company-name' style={{ display: "flex" }} href='https://account.hktechnical.com/certification/create/aupdlkhgd/'>HK Technical <svg xmlns="http://www.w3.org/2000/svg" width="44" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
            <div className='company-date'>Jan 2025 - March 2025</div>
          </div>

          <div ref={desktopCertRef} style={{marginTop:"80px"}}>
            <div className='Exp-sec' style={{ marginTop: "20px", display: "block" }}>Certifications</div>
            <a className='company-name' style={{ display: "block" }} href='https://openai-buildathon.nxtwave.tech/certificate?cid=SRZPYU4657'>OpenAI Workshop Cert. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
            <a className='company-name' style={{ display: "block" }} href='https://drive.google.com/file/d/1EbJNo0203Ql5im4cCJ41fp80eK2cOFa1/view'>Silicon Hack Club Cert. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
            <a className='company-name' style={{ display: "block" }} href='https://drive.google.com/file/d/1agOPND5oh2YT2iEWD_KpSBrNYoVrmpwF/view'>Hack Forge 2025 Cert. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
            <a className='company-name' style={{ display: "block" }} href='https://drive.google.com/file/d/1EF5ELims68s2RvRfSOZfE1AARuAFyEEu/view'>Syrotech hack Cert. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
            <a className='company-name' style={{ display: "block" }} href='https://verify.skilljar.com/c/seyqpi4yd4cu'>Anthropic MCP Cert. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></a>
          </div>
        </div>


      
      </div>


    </>
  )
}
