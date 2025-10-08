import './App.css';
import Navbar from './Navbar';
import ProjectsSection from './projects-section';
import SkillsSection from './SkillSection';
import Footer from './footer';
import ClickSpark from './Clickspark';
import Top from './Top';
import TopMid from './TopMid';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
    <ClickSpark
  sparkColor='#F9F0E1'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  
      <Navbar />
      <Top />
      <TopMid />
       <SkillsSection/>
       <ProjectsSection/>
       <Footer/>
       
</ClickSpark>
    </>
  );
}

export default App;
