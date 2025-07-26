import React, { useEffect, useRef } from 'react';

const TopologyAnimation = () => {
  const containerRef = useRef(null);
  const appRef = useRef(null);
  const particlesRef = useRef([]);
  const connectionsRef = useRef([]);

  useEffect(() => {
    const loadPixi = async () => {
      // Check if PIXI is already loaded
      if (window.PIXI) {
        initPixiApp(window.PIXI);
        return;
      }

      try {
        // Dynamically import PIXI
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/8.3.2/pixi.min.js';
        
        script.onload = () => {
          initPixiApp(window.PIXI);
        };
        
        script.onerror = () => {
          console.error('Failed to load PixiJS');
        };
        
        document.head.appendChild(script);
        
        return () => {
          if (document.head.contains(script)) {
            document.head.removeChild(script);
          }
        };
      } catch (error) {
        console.error('Error loading PixiJS:', error);
      }
    };

    loadPixi();

    return () => {
      cleanup();
    };
  }, []);

  const initPixiApp = async (PIXI) => {
    if (!containerRef.current || !PIXI) return;

    // Create PIXI Application
    const app = new PIXI.Application();
    await app.init({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x0a0a0a,
      antialias: true,
      resolution: Math.min(window.devicePixelRatio, 2),
      autoDensity: true,
    });

    containerRef.current.appendChild(app.canvas);
    appRef.current = app;

    // Create particle container for better performance
    const particleContainer = new PIXI.Container();

    app.stage.addChild(particleContainer);

    // Create graphics container for connections
    const connectionContainer = new PIXI.Container();
    app.stage.addChild(connectionContainer);

    // Initialize particles and connections
    createParticles(particleContainer, PIXI);
    createConnections(connectionContainer, PIXI);
    
    // Start animation loop
    app.ticker.add((ticker) => animate(ticker, PIXI));

    // Handle window resize
    const handleResize = () => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
  };

  const createParticles = (container, PIXI) => {
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      const graphics = new PIXI.Graphics();
      graphics.circle(0, 0, Math.random() * 2 + 1);
      graphics.fill({
        color: 0xffffff,
        alpha: Math.random() * 0.5 + 0.3,
      });

      const texture = appRef.current.renderer.generateTexture(graphics);
      const particle = new PIXI.Sprite(texture);

      particle.x = Math.random() * window.innerWidth;
      particle.y = Math.random() * window.innerHeight;
      particle.anchor.set(0.5);

      particle.vx = (Math.random() - 0.5) * 0.5;
      particle.vy = (Math.random() - 0.5) * 0.5;
      particle.originalAlpha = particle.alpha;
      particle.pulseSpeed = Math.random() * 0.02 + 0.01;
      particle.time = Math.random() * Math.PI * 2;

      container.addChild(particle);
      particlesRef.current.push(particle);
    }
  };

  const createConnections = (container, PIXI) => {
    const connectionCount = window.innerWidth < 768 ? 15 : 30;
    connectionsRef.current = [];

    for (let i = 0; i < connectionCount; i++) {
      const line = new PIXI.Graphics();
      
      line.startX = Math.random() * window.innerWidth;
      line.startY = Math.random() * window.innerHeight;
      line.endX = Math.random() * window.innerWidth;
      line.endY = Math.random() * window.innerHeight;
      line.animationSpeed = Math.random() * 0.001 + 0.0005;
      line.time = Math.random() * Math.PI * 2;
      line.maxAlpha = Math.random() * 0.3 + 0.1;

      container.addChild(line);
      connectionsRef.current.push(line);
    }
  };

  const animate = (ticker, PIXI) => {
    const deltaTime = ticker.deltaTime;

    // Animate particles
    particlesRef.current.forEach((particle) => {
      particle.x += particle.vx * deltaTime;
      particle.y += particle.vy * deltaTime;

      if (particle.x < 0) particle.x = window.innerWidth;
      if (particle.x > window.innerWidth) particle.x = 0;
      if (particle.y < 0) particle.y = window.innerHeight;
      if (particle.y > window.innerHeight) particle.y = 0;

      particle.time += particle.pulseSpeed * deltaTime;
      particle.alpha = particle.originalAlpha * (0.5 + 0.5 * Math.sin(particle.time));
      particle.rotation += 0.001 * deltaTime;
    });

    // Animate connections
    connectionsRef.current.forEach((line, index) => {
      line.clear();
      line.time += line.animationSpeed * deltaTime;

      const particle1 = particlesRef.current[index % particlesRef.current.length];
      const particle2 = particlesRef.current[(index + 1) % particlesRef.current.length];

      if (particle1 && particle2) {
        const distance = Math.sqrt(
          Math.pow(particle2.x - particle1.x, 2) + 
          Math.pow(particle2.y - particle1.y, 2)
        );

        if (distance < 150) {
          const alpha = line.maxAlpha * (1 - distance / 150) * (0.5 + 0.5 * Math.sin(line.time));
          
          line.moveTo(particle1.x, particle1.y);
          line.lineTo(particle2.x, particle2.y);
          line.stroke({
            width: 1,
            color: 0xffffff,
            alpha: alpha,
          });
        }
      }
    });
  };

  const cleanup = () => {
    if (appRef.current) {
      appRef.current.destroy(true);
      appRef.current = null;
    }
    particlesRef.current = [];
    connectionsRef.current = [];
  };

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    />
  );
};

export default TopologyAnimation;
