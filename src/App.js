import './App.css';
import Navbar from './Navbar';
import Skillpc from './Skillpc';

import Top from './Top';
import Topbtm from './Topbtm';
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
      <Navbar />
      <Top />
      <TopMid />
    </>
  );
}

export default App;
