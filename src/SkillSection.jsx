"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { FaCube } from "react-icons/fa";
import { useInView } from "react-intersection-observer"
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiBootstrap
//   SiVisualstudiocode,
} from "react-icons/si"
import "./SkillsSection.css"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <SiReact />, level: 90 },
      { name: "JavaScript", icon: <SiJavascript />, level: 85 },
      { name: "Threejs", icon: <svg fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="wheat" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
         <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
         <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
         <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
         <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
         <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
         <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
        </g>
       </svg>, level: 75 },
      { name: "HTML5", icon: <SiHtml5 />, level: 95 },
      { name: "CSS3", icon: <SiCss3 />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
      { name: "Bootstrap", icon: <SiBootstrap />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 80 },
      { name: "React-three-fiber", icon: <SiReact />, level: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 80 },
      { name: "Express", icon: <SiExpress />, level: 75 },
      { name: "MongoDB", icon: <SiMongodb />, level: 70 },
      { name: "Firebase", icon: <SiFirebase />, level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: <SiGit />, level: 85 },
      { name: "GitHub", icon: <SiGithub />, level: 90 },
    //   { name: "VS Code", icon: <SiVisualstudiocode />, level: 95 },
      { name: "Figma", icon: <SiFigma />, level: 70 },
    ],
  },
]

const SkillBar = ({ skill }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      className="skill-bar-container"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
    >
      <div className="skill-info">
        <div className="skill-icon">{skill.icon}</div>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

const SkillCategory = ({ category, items }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      className="skill-category"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
    >
      <h3 className="category-title">{category}</h3>
      <div className="skill-bars">
        {items.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          <h2 className="skills-title" style={{textAlign:"center"}}>skills</h2>
          <p className="skills-subtitle"  style={{textAlign:"center"}}>My technical expertise</p>
        </motion.div>

        <div className="skills-content" >
          {skills.map((skillGroup, index) => (
            <SkillCategory key={index} category={skillGroup.category} items={skillGroup.items} />
          ))}
        </div>
      </div>
      
    </section>
  )
}

