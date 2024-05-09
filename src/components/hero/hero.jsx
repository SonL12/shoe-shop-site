import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import profilePitcure from "../../assets/IMG-20210522-WA0012_1621689773774.jpg"
import "./hero.css"


const Hero = () => {

    const {scrollYProgress} = useScroll()
    const kanan= useTransform(scrollYProgress,[0,1],[0,800])
    const kiri= useTransform(scrollYProgress,[0,1],[0,-800])
  return <section className='Hero' id='Home'>
    <div className="containerHero">
  
      <div className="firstText">
      <motion.h1
    initial ={{x:-1800}}
    animate = {{
      x : 0,
      transition : {
        duration: 0.8,
        delay: 2,
      },
    }}
  style={{x:kanan}}
    className='textberisi'
    >
      software engineer
    </motion.h1>
    <motion.h1
    initial = {{x:-1800}}
    animate = {{
      x : 0,
      transition : {
        duration: 0.8,
        delay: 2,
      },
    }}
  style={{x:kanan}}
    className='textkosong'
    >
      software engineer
    </motion.h1>
      </div>
      <div className="secondText">
      <motion.h1
    initial = {{x:1800}}
    animate = {{
      x : 0,
      transition : {
        duration: 0.8,
        delay: 2,
      },
    }}
  style={{x:kiri}}
    className='textberisi'
    >
      newbie javascript tech stack developer
      </motion.h1>
    <motion.h1
    initial = {{x:1800}}
    animate = {{
      x : 0,
      transition : {
        duration: 0.8,
        delay: 2,
      },
    }}
  style={{x:kiri}}
    className='textkosong'
    >
      newbie javascript tech stack developer
    </motion.h1>
    </div>
      <div className="heroImage">
        <motion.img
        initial={{y:200,opacity:1}}
        animate={{
          y:0,
          transition:{
            duration:1,
            delay:2.1,
          }
          
        }}
        
        className='heroPitcure' src={profilePitcure} alt="" />
      </div>
    </div>
  </section>

}

export default Hero