"use client"

import { ArrowUp , Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

import "./App.css"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-text">
            <p>© Yash.</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/yashk40"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img src="Github.svg" height={20} />
              <span>Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/yash-kum-658a252aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img src="./linkdin.svg" height="20"/>
              
             <span>Linkedin</span>
            </a>

            <a
  href="mailto:Ykumawat006@gmail.com"
  className="footer-link"
  title="Send email to Ykumawat006@gmail.com"
  aria-label="Send email"
  onClick={(e) => {
    // Optional: You can track the click event here if needed
    console.log('Email link clicked');
    // The default behavior (opening mail client) will still occur
  }}
>
  <img src="./Mail.svg" height={20} alt="Email Icon" />
  <span>Email</span>
</a>
<a
  href="https://drive.google.com/file/d/1F0jCYb8w-pAVMQwubVdniRPb5K2Q3dPt/view?usp=sharing"
  className="footer-link"     
  rel="noopener noreferrer" 
>
  <img src="./Page.svg" height={20} alt="PDF Icon" /> 
  <span>Resume</span>
</a>

            <button
              onClick={scrollToTop}
              className={`back-to-top ${!isVisible ? "hidden" : "visible"}`}
            >
              <span>Back To Top</span>
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="footer-quote">
          <p>
            "The longer you live... The more you realize that reality is just made of pain, suffering and emptiness." -- Madara Uchiha
          </p>
        </div>

        <div className="footer-dots">
          <div className="footer-dot"></div>
          <div className="footer-dot"></div>
          <div className="footer-dot"></div>
        </div>
      </div>
    </footer>
  )
}
