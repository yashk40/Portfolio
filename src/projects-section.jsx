"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github, Loader2 } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ProjectsSection() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)
  const [imagesLoaded, setImagesLoaded] = useState({})
  const [visibleProjects, setVisibleProjects] = useState(3) // Start with 3 projects visible
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024

  const allProjects = [
    {
      title: "News Website",
      description:
        "A News website built with React.js and Tailwind CSS to showcase News of all over the world and also you can change the language of news and country also",
      technologies: ["React.js", "Bootstrap", "Tailwind CSS"],
      githubUrl: "https://github.com/yashk40/News-book",
      liveUrl: "https://newzzbook.netlify.app/",
      image:
        "https://firebasestorage.googleapis.com/v0/b/e-commerce-749a1.appspot.com/o/Screenshot%202025-04-02%20141438.png?alt=media&token=13d547ee-dae3-4f8d-a513-8c1728788091?height=400&width=500",
      color: "#6366F1",
    },
    {
      title: "Crypto-tracker",
      description:
        "A real-time cryptocurrency price tracker built using Next.js, Tailwind CSS, and ShadCN UI.Integrated with CoinGecko API for fetching live market data.Features include search, dark/light mode toggle, favorite coins, and detailed crypto view",
      technologies: [
        "Next.js 14 (App Router)",
        "Tailwind CSS + ShadCN UI",
        "TypeScript",
        "CoinGecko Public API",
        "Dark/Light Theme using next-themes",
      ],
      githubUrl: "https://github.com/yashk40/Crypto-tracker",
      liveUrl: "https://crypto-tracker-lemon-five.vercel.app/",
      image: "./Crypto2.png",
      color: "#10B981",
    },
    {
      title: "Mood-Book",
      description:
        "A dynamic web application that recommends books based on the user's current mood. Built with Next.js, React, and Tailwind CSS, the app integrates AI (via Groq LLM) to generate personalized book suggestions in real-time. It features smooth animations using Framer Motion, mood-specific theming, and a clean, responsive UI.",
      technologies: ["Next.js", "Groq AI", "Tailwind CSS + ShadCN UI",
        "TypeScript",],
      githubUrl: "https://github.com/yashk40/Mood-Book",
      liveUrl:"https://mood-book34.vercel.app/",
      image: "./Moodbook.png",
      color: "#F59E0B",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://yourportfolio.com",
      image: "/placeholder.svg?height=300&width=500",
      color: "#3B82F6",
    },
    {
      title: "Weather App",
      description: "A weather application that displays current weather conditions and forecasts for any location.",
      technologies: ["React", "OpenWeather API", "Geolocation API"],
      githubUrl: "https://github.com/yourusername/weatherapp",
      liveUrl: "https://yourweatherapp.com",
      image: "/placeholder.svg?height=300&width=500",
      color: "#EC4899",
    },
    {
      title: "Recipe Finder",
      description: "An application that helps users find recipes based on ingredients they have available.",
      technologies: ["React", "Edamam API", "Firebase"],
      githubUrl: "https://github.com/yourusername/recipefinder",
      liveUrl: "https://yourrecipefinder.com",
      image: "/placeholder.svg?height=300&width=500",
      color: "#8B5CF6",
    },
    {
      title: "Fitness Tracker",
      description: "A mobile-first application for tracking workouts and fitness progress.",
      technologies: ["React Native", "Firebase", "Redux"],
      githubUrl: "https://github.com/yourusername/fitness-tracker",
      liveUrl: "https://yourfitnesstracker.com",
      image: "/placeholder.svg?height=300&width=500",
      color: "#F97316",
    },
    {
      title: "Chat Application",
      description: "A real-time chat application with multiple rooms and user authentication.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/yourusername/chatapp",
      liveUrl: "https://yourchatapp.com",
      image: "/placeholder.svg?height=300&width=500",
      color: "#06B6D4",
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts.",
      technologies: ["Next.js", "Sanity.io", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/blogplatform",
      liveUrl: "https://yourblogplatform.com",
      image: "/placeholder.svg?height=300&width=500",
      color: "#84CC16",
    },
  ]

  // Only show the number of projects based on visibleProjects state
  const projects = allProjects.slice(0, visibleProjects)

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }))
  }

  const loadMoreProjects = () => {
    // Increase the number of visible projects by 3, but don't exceed the total number
    setVisibleProjects((prev) => Math.min(prev + 3, allProjects.length))
  }

  // Check if there are more projects to load
  const hasMoreProjects = visibleProjects < allProjects.length

  // Main section styles
  const sectionStyle = {
    position: "relative",
    padding: isMobile ? "4rem 0" : "6rem 0",
    overflow: "hidden",
    backgroundColor: "#121212",
  }

  // Container styles
  const containerStyle = {
    position: "relative",
    zIndex: 10,
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1.5rem",
    height: "fit-content",
  }

  // Header styles
  const headerContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: isMobile ? "2.5rem" : "5rem",
  }

  const headingStyle = {
    fontSize: isMobile ? "3.5rem" : isTablet ? "4.5rem" : "6rem",
    fontWeight: "bold",
    color: "#f5e9d1",
    position: "relative",
    textTransform: "capitalize",
    margin: 0,
  }

  const headingUnderlineStyle = {
    position: "absolute",
    bottom: "0rem",
    left: 0,
    width: "100%",
    height: "2px",
    background: "linear-gradient(to right, transparent, #f5e9d1, transparent)",
  }

  const subheadingStyle = {
    marginTop: "2rem",
    fontSize: isMobile ? "1rem" : "1.25rem",
    color: "#a3a3a3",
    margin: 0,
  }

  // Project container styles
  const projectsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: isMobile ? "3rem" : "6rem",
  }

  // Project item styles
  const projectItemStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: isMobile ? "1.5rem" : "3rem",
    alignItems: "center",
  }

  // Image container styles - now with a unique "floating display" style
  const imageContainerStyle = (index) => ({
    position: "relative",
    borderRadius: "0.75rem",
    aspectRatio: isMobile ? "4/3" : "16/9",
    order: 0, // Default order (will be modified for alternating)
    perspective: "1000px", // Add perspective for 3D effect
  })

  // Inner container for 3D effect
  const imageInnerContainerStyle = (index) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transform: index % 2 === 0 ? "rotateY(2deg)" : "rotateY(-2deg)",
    transition: "transform 0.5s ease",
  })

  // Frame style for the image
  const imageFrameStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "#1a1a1a",
    borderRadius: "0.75rem",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    transformStyle: "preserve-3d",
    transform: "translateZ(0px)",
    backfaceVisibility: "hidden",
  }

  // Image style
  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    objectPosition: "center",
    display: "block",
    borderRadius: "0.5rem",
    transform: "translateZ(10px)", // Slight 3D effect
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }

  // Reflection effect
  const reflectionStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
    background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",
    transform: "rotateX(180deg) translateZ(-1px)",
    opacity: 0.5,
    pointerEvents: "none",
  }

  const imageLoaderStyle = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1a1a",
    borderRadius: "0.5rem",
    zIndex: 10,
  }

  // Project details styles
  const detailsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }

  const projectTitleStyle = (color) => ({
    fontSize: isMobile ? "1.5rem" : isTablet ? "1.875rem" : "2.25rem",
    fontWeight: "bold",
    marginBottom: isMobile ? "0.75rem" : "1rem",
    color: color,
    textShadow: `0 2px 8px ${color}40`,
    margin: 0,
  })

  const projectDescriptionStyle = {
    marginBottom: isMobile ? "1rem" : "1.5rem",
    color: "#d4d4d4",
    lineHeight: 1.6,
    fontSize: isMobile ? "0.875rem" : "1rem",
    margin: 0,
  }

  const tagsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: isMobile ? "1.5rem" : "2rem",
  }

  const tagStyle = (color) => ({
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    fontSize: isMobile ? "0.75rem" : "0.875rem",
    fontWeight: 500,
    boxShadow: `0 2px 4px ${color}20`,
    border: `1px solid ${color}30`,
    backgroundColor: `${color}15`,
    color: color,
  })

  const buttonsContainerStyle = {
    display: "flex",
    gap: "1rem",
    flexWrap: isMobile ? "wrap" : "nowrap",
  }

  const githubButtonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    fontSize: isMobile ? "0.75rem" : "0.875rem",
    fontWeight: 500,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
    transition: "background-color 0.2s ease",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    width: isMobile ? "100%" : "auto",
    justifyContent: isMobile ? "center" : "flex-start",
    textDecoration: "none",
  }

  const liveButtonStyle = (color) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    fontSize: isMobile ? "0.75rem" : "0.875rem",
    fontWeight: 500,
    color: "#121212",
    transition: "transform 0.2s ease",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    width: isMobile ? "100%" : "auto",
    justifyContent: isMobile ? "center" : "flex-start",
    textDecoration: "none",
    backgroundColor: color,
  })

  const discoverButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontSize: isMobile ? "0.875rem" : "1rem",
    fontWeight: 500,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#f5e9d1",
    border: "1px solid rgba(245, 233, 209, 0.3)",
    cursor: "pointer",
    margin: "3rem auto 0",
    transition: "all 0.3s ease",
  }

  return (
    <section style={sectionStyle} ref={containerRef}>
      {/* Animated background elements */}
      <div>
        {allProjects.map((project, index) => (
          <motion.div
            key={`bg-${index}`}
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 50% 50%, ${project.color}15 0%, transparent 50%)`,
              backdropFilter: "blur(100px)",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.2,
            }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </div>

      <motion.div style={{ ...containerStyle, opacity, y }}>
        <div style={headerContainerStyle}>
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={headingStyle}>Projects</h2>
            <div style={headingUnderlineStyle} />
          </motion.div>
          <motion.p
            style={subheadingStyle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore my creative journey
          </motion.p>
        </div>

        <div style={projectsContainerStyle}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={{
                ...projectItemStyle,
                // Alternate image position on desktop
                gridTemplateAreas: isMobile
                  ? `"image" "content"`
                  : index % 2 === 0
                    ? `"image content"`
                    : `"content image"`,
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              {/* Project Image - order alternates on desktop */}
              <motion.div
                style={{
                  ...imageContainerStyle(index),
                  order: isMobile ? 0 : index % 2 === 0 ? 0 : 1,
                  gridArea: "image",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  style={imageInnerContainerStyle(index)}
                  whileHover={{
                    transform: "rotateY(0deg)",
                    transition: { duration: 0.5 },
                  }}
                >
                  <div style={imageFrameStyle}>
                    {!imagesLoaded[index] && (
                      <div style={{ ...imageLoaderStyle, color: project.color }}>
                        <Loader2 size={24} style={{ animation: "spin 1s linear infinite" }} />
                      </div>
                    )}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      style={imageStyle}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageLoad(index)}
                    />
                    <div style={reflectionStyle}></div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Project Details */}
              <div
                style={{
                  ...detailsContainerStyle,
                  gridArea: "content",
                }}
              >
                <h3 style={projectTitleStyle(project.color)}>{project.title}</h3>
                <p style={projectDescriptionStyle}>{project.description}</p>

                <div style={tagsContainerStyle}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={tagStyle(project.color)}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={buttonsContainerStyle}>
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={githubButtonStyle}
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={liveButtonStyle(project.color)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMoreProjects && (
          <motion.button
            style={discoverButtonStyle}
            onClick={loadMoreProjects}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderColor: "rgba(245, 233, 209, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <span>Discover More</span>
            <ExternalLink size={16} />
          </motion.button>
        )}
      </motion.div>
    </section>
  )
}
