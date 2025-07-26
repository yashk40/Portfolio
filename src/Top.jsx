import React, { useEffect, useRef, useState, useCallback } from 'react'
import BlurText from './Heading'

export default function Top() {
  const vantaRef = useRef(null)
  const [showVanta, setShowVanta] = useState(false)
  const [deviceCapability, setDeviceCapability] = useState('low')
  const vantaEffectRef = useRef(null)
  const rafRef = useRef(null)

  // Advanced device capability detection
  useEffect(() => {
    const detectCapability = () => {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent)
      const isLowEndMobile = /Android 4|Android 5|iPhone [1-6]/i.test(navigator.userAgent)
      const cores = navigator.hardwareConcurrency || 1
      const memory = navigator.deviceMemory || 1
      const pixelRatio = window.devicePixelRatio || 1
      const screenSize = window.screen.width * window.screen.height
      
      // Performance score calculation
      let score = 0
      score += cores * 2
      score += memory
      score -= pixelRatio > 2 ? 2 : 0
      score -= screenSize > 2073600 ? 1 : 0 // 1920x1080
      score += window.WebGLRenderingContext ? 2 : 0
      
      if (isLowEndMobile || isMobile && score < 6) return 'minimal'
      if (isMobile || score < 8) return 'low'
      if (score < 12) return 'medium'
      return 'high'
    }

    setDeviceCapability(detectCapability())
  }, [])

  // Ultra-optimized configurations
  const getVantaConfig = useCallback(() => {
    const baseConfig = {
      el: vantaRef.current,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      color: 0xf9f0e1,
      backgroundColor: 0x121212,
      highlightColor: 0xf9f0e1,
      midtoneColor: 0x777777,
      lowlightColor: 0x222222,
      forceAnimate: false,
      antialias: false,
      alpha: false,
      premultipliedAlpha: false,
      depthTest: false,
      flatShading: true,
      powerPreference: 'low-power', // Use integrated GPU
    }

    const configs = {
      minimal: {
        ...baseConfig,
        scale: 0.3,
        speed: 0.1,
        spacing: 80,
        points: 1,
        maxDistance: 4,
        showDots: false,
        lineOpacity: 0.05,
        dotOpacity: 0,
        pixelRatio: 1,
        precision: 'lowp',
        // Extreme optimizations for very low-end devices
        quality: 0.3,
        frameSkip: 3, // Skip every 3rd frame
      },
      low: {
        ...baseConfig,
        scale: 0.4,
        speed: 0.15,
        spacing: 60,
        points: 1.5,
        maxDistance: 5,
        showDots: false,
        lineOpacity: 0.08,
        dotOpacity: 0,
        pixelRatio: Math.min(window.devicePixelRatio, 1.5),
        precision: 'lowp',
        quality: 0.5,
        frameSkip: 2,
      },
      medium: {
        ...baseConfig,
        scale: 0.7,
        speed: 0.2,
        spacing: 40,
        points: 2.5,
        maxDistance: 8,
        showDots: true,
        lineOpacity: 0.12,
        dotOpacity: 0.3,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        precision: 'mediump',
        quality: 0.7,
        frameSkip: 1,
      },
      high: {
        ...baseConfig,
        scale: 1,
        speed: 0.25,
        spacing: 30,
        points: 3,
        maxDistance: 10,
        showDots: true,
        lineOpacity: 0.15,
        dotOpacity: 0.5,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        precision: 'highp',
        quality: 1,
        frameSkip: 0,
      }
    }

    return configs[deviceCapability]
  }, [deviceCapability])

  // Lazy loading and initialization with frame rate control
  useEffect(() => {
    if (!showVanta || !vantaRef.current) return

    let frameCount = 0
    const config = getVantaConfig()
    const frameSkip = config.frameSkip || 0

    const initVanta = async () => {
      try {
        if (!window.VANTA?.TOPOLOGY) {
          console.warn('VANTA.TOPOLOGY not available')
          return
        }

        // Clean up previous effect
        if (vantaEffectRef.current) {
          vantaEffectRef.current.destroy()
          vantaEffectRef.current = null
        }

        // Ensure DOM is ready
        await new Promise(resolve => requestAnimationFrame(resolve))

        if (vantaRef.current) {
          vantaEffectRef.current = window.VANTA.TOPOLOGY(config)
          
          // Custom frame rate limiting for low-end devices
          if (frameSkip > 0) {
            const originalRender = vantaEffectRef.current.renderer?.render
            if (originalRender) {
              vantaEffectRef.current.renderer.render = function(...args) {
                frameCount++
                if (frameCount % (frameSkip + 1) === 0) {
                  originalRender.apply(this, args)
                }
              }
            }
          }
        }
      } catch (error) {
        console.error('VANTA initialization failed:', error)
        // Fallback: show static background
        if (vantaRef.current) {
          vantaRef.current.style.background = 'linear-gradient(135deg, #121212 0%, #222222 100%)'
        }
      }
    }

    initVanta()

    return () => {
      if (vantaEffectRef.current) {
        try {
          vantaEffectRef.current.destroy()
          vantaEffectRef.current = null
        } catch (error) {
          console.error('Error destroying VANTA:', error)
        }
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [showVanta, getVantaConfig])

  // Optimized resize handler with debouncing
  useEffect(() => {
    if (!showVanta) return

    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (vantaEffectRef.current?.resize) {
          // Only resize if size actually changed
          const rect = vantaRef.current?.getBoundingClientRect()
          if (rect) {
            vantaEffectRef.current.resize()
          }
        }
      }, 300) // Increased debounce time
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [showVanta])

  // Enhanced visibility and performance management
  useEffect(() => {
    if (!showVanta) return

    let isVisible = true
    let performanceObserver

    const handleVisibilityChange = () => {
      isVisible = !document.hidden
      if (vantaEffectRef.current) {
        if (isVisible) {
          vantaEffectRef.current.play?.()
        } else {
          vantaEffectRef.current.pause?.()
        }
      }
    }

    // Monitor performance and throttle if needed
    if ('PerformanceObserver' in window) {
      performanceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'layout' && entry.duration > 16) {
            // If layout takes longer than 16ms, throttle animation
            if (vantaEffectRef.current && isVisible) {
              vantaEffectRef.current.pause?.()
              setTimeout(() => vantaEffectRef.current?.play?.(), 100)
            }
          }
        })
      })
      performanceObserver.observe({ entryTypes: ['measure'] })
    }

    // Intersection Observer to pause when out of view
    let intersectionObserver
    if ('IntersectionObserver' in window && vantaRef.current) {
      intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (vantaEffectRef.current) {
            if (entry.isIntersecting && isVisible) {
              vantaEffectRef.current.play?.()
            } else {
              vantaEffectRef.current.pause?.()
            }
          }
        })
      }, { threshold: 0.1 })
      
      intersectionObserver.observe(vantaRef.current)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true })
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      performanceObserver?.disconnect()
      intersectionObserver?.disconnect()
    }
  }, [showVanta])

  // Memory management with cleanup on unmount
  useEffect(() => {
    return () => {
      // Force garbage collection hints
      if (vantaEffectRef.current) {
        vantaEffectRef.current = null
      }
    }
  }, [])

  const handleFirstBlurTextComplete = useCallback(() => {
    // Progressive enhancement: only show Vanta on capable devices
    if (deviceCapability !== 'minimal') {
      setTimeout(() => setShowVanta(true), 300)
    }
  }, [deviceCapability])

  const handleAnimationComplete = useCallback(() => {
    console.log('Animation completed!')
  }, [])

  return (
    <div 
      id='Top' 
      style={{ 
        position: 'relative', 
        width: '100vw', 
        height: '100vh', 
        overflow: 'hidden',
        // Enhanced CSS optimizations
        backfaceVisibility: 'hidden',
        perspective: 1000,
        willChange: showVanta ? 'transform' : 'auto',
        contain: 'layout style paint', // CSS containment
        isolation: 'isolate', // Create new stacking context
      }}
    >
      {/* Conditional VANTA background with fallback */}
      {showVanta ? (
        <div
          ref={vantaRef}
          style={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            zIndex: -1,
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            contain: 'strict', // Maximum containment
          }}
        />
      ) : deviceCapability === 'minimal' ? (
        // Static fallback for very low-end devices
        <div
          style={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            zIndex: -1,
            background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 50%, #222222 100%)',
          }}
        />
      ) : null}
      
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
